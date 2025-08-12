import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Circle, Ellipse, Line, Text, Transformer } from "react-konva";
import { useSelector, useDispatch } from "react-redux";
import EditNavbar from "./EditNavbar";
import { addShape, updateShape, clearShapes, undo, redo } from "../store/shapesSlice";

export default function Editor() {
  const { shapes } = useSelector((state) => state.shapes);
  const dispatch = useDispatch();

  const [currentColor, setCurrentColor] = useState("#000000");
  const [isPainting, setIsPainting] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const isDrawing = useRef(false);
  const transformerRef = useRef();

  // --- Shape creation ---
  const handleAddShape = (shape) => dispatch(addShape(shape));

  const handleAddRect = () =>
    handleAddShape({
      type: "rect",
      x: Math.random() * 500,
      y: Math.random() * 400,
      width: 100,
      height: 100,
      fill: currentColor,
      id: Date.now()
    });

  const handleAddCircle = () =>
    handleAddShape({
      type: "circle",
      x: Math.random() * 500,
      y: Math.random() * 400,
      radius: 50,
      fill: currentColor,
      id: Date.now()
    });

  const handleAddEllipse = () =>
    handleAddShape({
      type: "ellipse",
      x: Math.random() * 500,
      y: Math.random() * 400,
      radiusX: 70,
      radiusY: 40,
      fill: currentColor,
      id: Date.now()
    });

  const handleAddLine = () =>
    handleAddShape({
      type: "line",
      points: [20, 20, 200, 200],
      stroke: currentColor,
      strokeWidth: 3,
      id: Date.now()
    });

  const handleAddTriangle = () =>
    handleAddShape({
      type: "line",
      points: [50, 150, 150, 150, 100, 50],
      stroke: currentColor,
      closed: true,
      fill: currentColor,
      id: Date.now()
    });

  const handleAddText = () =>
    handleAddShape({
      type: "text",
      x: 150,
      y: 150,
      text: "New Text",
      fontSize: 24,
      fill: currentColor,
      draggable: true,
      id: Date.now()
    });

  // --- Clear ---
  const handleClear = () => {
    dispatch(clearShapes());
    setSelectedId(null);
    if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer().batchDraw();
    }
  };

  // --- Paint mode ---
  const handleMouseDown = (e) => {
    if (isPainting) {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      handleAddShape({
        type: "line",
        points: [pos.x, pos.y],
        stroke: currentColor,
        strokeWidth: 2,
        tension: 0.5,
        lineCap: "round",
        id: Date.now()
      });
    } else {
      const clickedOnEmpty = e.target === e.target.getStage();
      if (clickedOnEmpty) {
        setSelectedId(null);
        if (transformerRef.current) {
          transformerRef.current.nodes([]);
          transformerRef.current.getLayer().batchDraw();
        }
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current || !isPainting) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    const lastShape = shapes[shapes.length - 1];
    dispatch(
      updateShape({
        id: lastShape.id,
        newAttrs: {
          points: lastShape.points.concat([point.x, point.y])
        }
      })
    );
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // --- Selection ---
  const handleSelect = (id, node) => {
    setSelectedId(id);
    const transformer = transformerRef.current;
    transformer.nodes([node]);
    transformer.getLayer().batchDraw();
  };

  const handleDragEnd = (id, node) => {
    dispatch(
      updateShape({
        id,
        newAttrs: {
          x: node.x(),
          y: node.y()
        }
      })
    );
  };

  const handleTransformEnd = (id, node) => {
  const shapeType = node.getClassName();

  const newAttrs = {
    x: node.x(),
    y: node.y(),
    rotation: node.rotation()
  };

  if (shapeType === "Rect" || shapeType === "Text") {
    newAttrs.width = node.width() * node.scaleX();
    newAttrs.height = node.height() * node.scaleY();
  }
  if (shapeType === "Circle") {
    newAttrs.radius = node.radius() * node.scaleX();
  }
  if (shapeType === "Ellipse") {
    newAttrs.radiusX = node.radiusX() * node.scaleX();
    newAttrs.radiusY = node.radiusY() * node.scaleY();
  }

  node.scaleX(1);
  node.scaleY(1);

  dispatch(updateShape({ id, newAttrs }));
};

  return (
    <div className="bg-black min-h-screen text-white">
      <EditNavbar
        onRect={handleAddRect}
        onCircle={handleAddCircle}
        onEllipse={handleAddEllipse}
        onLine={handleAddLine}
        onTriangle={handleAddTriangle}
        onText={handleAddText}
        onClear={handleClear}
        onUndo={() => dispatch(undo())}
        onRedo={() => dispatch(redo())}
        onColorChange={setCurrentColor}
        onPaintToggle={() => setIsPainting(!isPainting)}
        isPainting={isPainting}
      />

      <div className="flex justify-center p-6">
        <Stage
          width={800}
          height={600}
          className="bg-white"
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
        >
          <Layer>
            {shapes.map((shape) => {
              const isSelected = shape.id === selectedId;
              const nodeRef = React.createRef();

              let ShapeComponent;
              switch (shape.type) {
                case "rect":
                  ShapeComponent = Rect;
                  break;
                case "circle":
                  ShapeComponent = Circle;
                  break;
                case "ellipse":
                  ShapeComponent = Ellipse;
                  break;
                case "line":
                  ShapeComponent = Line;
                  break;
                case "text":
                  ShapeComponent = Text;
                  break;
                default:
                  return null;
              }

              return (
                <ShapeComponent
                  key={shape.id}
                  {...shape}
                  ref={nodeRef}
                  draggable
                  onClick={() => handleSelect(shape.id, nodeRef.current)}
                  onDragEnd={() => handleDragEnd(shape.id, nodeRef.current)}
                  onTransformEnd={() => handleTransformEnd(shape.id, nodeRef.current)}
                />
              );
            })}
            <Transformer ref={transformerRef} rotateEnabled={true} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

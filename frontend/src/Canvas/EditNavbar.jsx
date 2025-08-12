export default function EditNavbar({
  onRect,
  onCircle,
  onEllipse,
  onLine,
  onTriangle,
  onText,
  onClear,
  onUndo,
  onRedo,
  onColorChange,
  onPaintToggle,
  isPainting
}) {
  return (
    <div className="bg-gray-900 text-gray-100 shadow-sm w-full">
      <div className="flex items-center space-x-4 px-6 h-12">
        <button onClick={onRect} className="hover:text-red-400">Rect</button>
        <button onClick={onCircle} className="hover:text-red-400">Circle</button>
        <button onClick={onEllipse} className="hover:text-red-400">Ellipse</button>
        <button onClick={onLine} className="hover:text-red-400">Line</button>
        <button onClick={onTriangle} className="hover:text-red-400">Triangle</button>
        <button onClick={onText} className="hover:text-red-400">Text</button>

        {/* Color Picker */}
        <input
          type="color"
          onChange={(e) => onColorChange(e.target.value)}
          className="w-8 h-8 p-0 border-none bg-transparent cursor-pointer"
        />

        {/* Paint Mode */}
        <button onClick={onPaintToggle} className="hover:text-red-400">
          {isPainting ? "Stop Paint" : "Paint"}
        </button>

        <button onClick={onClear} className="hover:text-red-400">Clear</button>
        <button onClick={onUndo} className="hover:text-red-400">Undo</button>
        <button onClick={onRedo} className="hover:text-red-400">Redo</button>
      </div>
    </div>
  );
}

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shapes: [],
    history: [],
    redoStack: [],
};

const shapesSlice = createSlice({
    name: "shapes",
    initialState,
    reducers: {
        addShape(state,action){
            state.history.push([...state.shapes]);
            state.shapes.push(action.payload);
            state.redoStack = [];
        },
        updateShape(state, action) {
            const { id, newAttrs } = action.payload;
            state.history.push([...state.shapes]);
            state.shapes = state.shapes.map(shape =>
                shape.id === id ? { ...shape, ...newAttrs } : shape
            );
            state.redoStack = [];
        },
        clearShapes(state){
            state.history.push([...state.shapes]);
            state.shapes = [];
            state.redoStack = [];
        },
        undo(state){
            if(state.history.length > 0){
                state.redoStack.push([...state.shapes]);
                state.shapes = state.history.pop();
            }
        },
        redo(state){
            if(state.redoStack.length > 0){
                state.history.push([...state.shapes]);
                state.shapes = state.redoStack.pop();
            }
        }
    }
});

export const {addShape,updateShape, clearShapes, undo, redo} = shapesSlice.actions;
export default shapesSlice.reducer;
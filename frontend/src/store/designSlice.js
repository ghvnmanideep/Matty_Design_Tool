import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    selected: null,
}

const designSlice = createSlice({
    name: designs,
    initialState,
    reducers: {
        setDesigns: (state, action) => {
            state.list = action.payload
        },
        addDesign: (state, action) => {
            state.list.push(action.payload);
        },
        updateDesign: (state, action) => {
            const idx = state.list.findIndex(e => e.id === action.payload);
            if(idx){
                state.list[idx] = action.payload;
            }
        },
        deleteDesign: (state, action) => {
            state.list = state.list.filter(e => e.id !== action.payload);
        },
        setSelectedDesign: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const {setDesigns, addDesign, updateDesign, deleteDesign, setSelectedDesign } = designSlice.actions;
export default deleteDesign.reducer;
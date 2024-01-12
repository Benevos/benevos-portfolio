import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    nameAnimationEnded: false,
}

export const themeSlice = createSlice({
    name: 'animations',
    initialState: initalState,
    reducers: {
        toggleNameAnimationState: (state, action) =>
        {
            state.nameAnimationEnded = !action.payload;
        }
    }
})

export const { toggleNameAnimationState } = themeSlice.actions; 
export default themeSlice.reducer;
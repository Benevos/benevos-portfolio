import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    isOnDarkMode: true,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initalState,
    reducers: {
        toggleTheme: (state, action) =>
        {
            state.isOnDarkMode = !action.payload;
        }
    }
})

export const { toggleTheme } = themeSlice.actions; 
export default themeSlice.reducer;
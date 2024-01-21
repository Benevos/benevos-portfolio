import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    isMobileNavPanelOpen: false,
    isAboutOpen: false,
}

export const uiStateSlice = createSlice({
    name: 'uiState',
    initialState: initalState,
    reducers: {
        toggleMobileNavPanelState: (state, action) =>
        {
            state.isMobileNavPanelOpen = !action.payload;
        },
        toggleIsAboutOpen: (state, action) =>
        {
            state.isAboutOpen = !action.payload;
        }
    }
})

export const { toggleMobileNavPanelState, toggleIsAboutOpen } = uiStateSlice.actions; 
export default uiStateSlice.reducer;
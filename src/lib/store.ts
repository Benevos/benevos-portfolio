import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/theme/themeSlice'
import animationsReducer from './features/theme/animationsSlice'
import uiStateReducer from './features/theme/uiStateSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        theme: themeReducer,
        animations: animationsReducer,
        uiState:  uiStateReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
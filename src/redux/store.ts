import homeReducer from './slices/homeSlice';
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import blogReducer from './slices/blogSlice';

export const store = configureStore({
    reducer: {
        home: homeReducer,
        blog: blogReducer,
    },
    
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppDispatch,
    unknown,
    Action<string>
>
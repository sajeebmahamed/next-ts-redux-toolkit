import { AppState } from '../store';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IHomeState {
    isLoading: boolean;
    isError: boolean;
    data: any;
    count: number
}

const initialState: IHomeState = {
    isLoading: false,
    isError: false,
    data: null,
    count: 0
}

export const fetchAsync = createAsyncThunk(
    'home/fetch',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    }
)

export const getPostById = createAsyncThunk(
    'home/getPostById',
    async (id: number) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    }
)

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getHomeData: (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.data = null;
        },
        incrementCount: (state) => {
            state.count += 1;
        },
        decrementCount: (state) => {
            state.count -= 1;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAsync.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getPostById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getPostById.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })


    }
})

export const { getHomeData, incrementCount, decrementCount } = homeSlice.actions

export const homeReducer = (state: AppState) => state.home;

export default homeSlice.reducer
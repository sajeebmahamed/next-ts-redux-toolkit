import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface IBlogSlice {
    blog: any,
    blogCount: number
}

const initialState: IBlogSlice = {
    blog: null,
    blogCount: 0
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        getBlogData: (state, action) => {
            state.blog = null
        },
        incrementBlogCount: (state) => {
            state.blogCount += 1;
        },
        decrementBlogCount: (state) => {
            state.blogCount -= 1;
        }
    }
})


export const { getBlogData, incrementBlogCount, decrementBlogCount } = blogSlice.actions

export const selectBlogCount = (state: AppState) => state.blog.blogCount

export default blogSlice.reducer
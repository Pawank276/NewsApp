import { createSlice } from "@reduxjs/toolkit";

const NewsItemSlice = createSlice({
    name: "news",
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            return action.payload;
        }
    }
}
)

export const NewsItemSliceActions = NewsItemSlice.actions;
export default NewsItemSlice;
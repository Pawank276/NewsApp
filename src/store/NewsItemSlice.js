import { createSlice } from "@reduxjs/toolkit";

const NewsItemSlice = createSlice({
    name: "news",
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            return action.payload;
        },
        addMoreItems: (state, action) => {
            return state.concat(action.payload);
        }
    }
}
)

export const NewsItemSliceActions = NewsItemSlice.actions;
export default NewsItemSlice;
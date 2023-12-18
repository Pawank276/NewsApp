import { createSlice } from "@reduxjs/toolkit";

const PageNoSlice = createSlice({
    name: "page",
    initialState: {
        pageNo: 1,
        pageSize: 6,
    },
    reducers: {
        next: (state) => {
            return state.pageNo++;
        },
        prev: (state) => {
            return state.pageNo--;
        },
    }
}
)

export const PageNoSliceActions = PageNoSlice.actions;
export default PageNoSlice;
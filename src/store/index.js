import { configureStore } from "@reduxjs/toolkit"
import NewsItemSlice from "./NewsItemSlice";
import PageNoSlice from "./PageNoSlice";



const NewsStore = configureStore({
    reducer: {
        news: NewsItemSlice.reducer,
        page: PageNoSlice.reducer,
    }
})

export default NewsStore;
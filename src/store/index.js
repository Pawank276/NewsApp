import { configureStore } from "@reduxjs/toolkit"
import NewsItemSlice from "./NewsItemSlice";



const NewsStore = configureStore({
    reducer: {
        news: NewsItemSlice.reducer,
    }
})

export default NewsStore;
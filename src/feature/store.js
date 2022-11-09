import { configureStore } from "@reduxjs/toolkit";
import movieTeducer from './movie/movieSlice'

export const store = configureStore({
    reducer: {
        movies:movieTeducer
    }
})
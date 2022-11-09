import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const name = 'Dragon';

    const response = await MovieApi.get(`?apikey=${APIKey}&s=${name}&type=movie`);
    return response.data;
      
})

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries ', async () => {
    const name = 'Dragon';

    const response = await MovieApi.get(`?apikey=${APIKey}&s=${name}&type=series`);
    return response.data;
      
})


const initialState = {
    movies: {},
    series:{}
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state,{payload}) => {
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending')
        },

        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('movie fetch Sucessfully')
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected')
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            console.log('series fetch Sucessfully')
            return { ...state, series: payload };
        },
    }
})


export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
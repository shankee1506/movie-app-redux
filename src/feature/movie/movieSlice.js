import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (input) => {
    

    const response = await MovieApi.get(`?apikey=${APIKey}&s=${input}&type=movie`);
    return response.data;
      
})

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries ', async (input) => {
    

    const response = await MovieApi.get(`?apikey=${APIKey}&s=${input}&type=series`);
    return response.data;
      
})

export const fetchAsyncMovieOrShowDetail= createAsyncThunk('movies/fetchAsyncMovieOrShowDetail ', async (id) => {
    

    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
    return response.data;
      
})
const initialState = {
    movies: {},
    series: {},
    movieOrShowDetail:{}
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeMovieOrShow: (state) => {
            state.movieOrShowDetail= {}
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

        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log('movie or show detail fetch Sucessfully')
            return { ...state, movieOrShowDetail: payload };
        },
    }
})


export const { removeMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
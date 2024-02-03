import { createSlice } from '@reduxjs/toolkit';
import { MovieAction, MovieState } from '../../helpers/types';

const initialState: MovieState = [];

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        updateMovies(state: MovieState, action: MovieAction) {
            return { ...state, ...action.payload }
        },
        clearMovies() {
            return initialState;
        },
    },
})

export const { updateMovies, clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
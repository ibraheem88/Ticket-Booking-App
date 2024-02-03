import { combineReducers } from '@reduxjs/toolkit';

import movies from './movies';

export const rootReducer = combineReducers({
    movies: movies
});

export type RootReducer = ReturnType<typeof rootReducer>;
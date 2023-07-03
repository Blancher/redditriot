import {configureStore} from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import postSlice from './postSlice';

const store = configureStore({reducer: {search: searchSlice.reducer, post: postSlice.reducer}});

export default store;
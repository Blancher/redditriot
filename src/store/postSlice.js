import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'post',
    initialState: '',
    reducers: {
        setPost(state, action) {
            return action.payload;
        }
    }
});

export const postActions = postSlice.actions;

export default postSlice;
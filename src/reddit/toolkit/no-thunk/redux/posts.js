import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    reactjs: {
      isFetching: false,
      isInvalid: true,
      posts: [],
      lastUpdated: Date.now(),
    },
  },

  reducers: {
    invalidate(state, action) {
      //we need to reload the Data
      state[action.payload].isInvalid = true;
    },
    request(state, action) {
      // we are asking for data
      if (!state[action.payload]) {
        state[action.payload] = {};
        state[action.payload].posts = [];
      }
      state[action.payload].isInvalid = false;
      state[action.payload].isFetching = true;
    },
    receive(state, action) {
      //we have received data. update the state!
      state[action.payload.selectedSubreddit].isInvalid = false;
      state[action.payload.selectedSubreddit].isFetching = false;
      state[action.payload.selectedSubreddit].posts = action.payload.posts;
      state[action.payload.selectedSubreddit].lastUpdated = Date.now();
    },
  },
});

export const { invalidate, receive, request } = postsSlice.actions;

export default postsSlice.reducer;

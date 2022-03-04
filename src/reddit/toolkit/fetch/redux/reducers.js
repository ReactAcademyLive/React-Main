import { combineReducers, createSlice } from '@reduxjs/toolkit';

const selectedSubredditSlice = createSlice({
  name: 'selectedSubreddit',
  initialState: 'reactjs',
  reducers: {
    select(state, action) {
      return action.payload;
    },
  },
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    reactjs: {
      isFetching: false,
      isInvalid: true,
      posts: [],
      lastUpdated: new Date(),
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
      state[action.payload.selectedSubreddit].lastUpdated = new Date();
    },
  },
});

const rootReducer = combineReducers({
  selectedSubreddit: selectedSubredditSlice.reducer,
  posts: postsSlice.reducer,
});

export const { select } = selectedSubredditSlice.actions;
export const { invalidate, receive, request } = postsSlice.actions;

export default rootReducer;

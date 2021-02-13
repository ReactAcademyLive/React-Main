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
      state[action.payload].isInvalid = true;
    },
    request(state, action) {
      if (!state[action.payload]) {
        state[action.payload] = {};
        state[action.payload].posts = [];
      }
      state[action.payload].isInvalid = false;
      state[action.payload].isFetching = true;
    },
    receive(state, action) {
      state[action.payload.selectedSubreddit].isInvalid = false;
      state[action.payload.selectedSubreddit].isFetching = false;
      state[action.payload.selectedSubreddit].posts = action.payload.posts;
      state[action.payload.selectedSubreddit].lastUpdated = new Date();
    },
  },
});

// function selectedSubreddit(state = 'reactjs', action) {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit;
//     default:
//       return state;
//   }
// }

// function posts(
//   state = {
//     isFetching: false,
//     didInvalidate: false,
//     items: [],
//   },
//   action
// ) {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//       return { ...state, didInvalidate: true };
//     case REQUEST_POSTS:
//       return { ...state, isFetching: true, didInvalidate: false };
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt,
//       };
//     default:
//       return state;
//   }
// }

// function postsBySubreddit(state = {}, action) {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         [action.subreddit]: posts(state[action.subreddit], action),
//       };
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  selectedSubreddit: selectedSubredditSlice.reducer,
  posts: postsSlice.reducer,
});

export const { select } = selectedSubredditSlice.actions;
export const { invalidate, receive, request } = postsSlice.actions;

export default rootReducer;

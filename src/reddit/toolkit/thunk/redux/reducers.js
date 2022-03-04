import {
  combineReducers,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

// export const fetchPosts2 = createAsyncThunk(
//   'posts/fetchPosts',
//   async (selectedSubreddit, thunkAPI) => {
//     console.log('getData');
//     const response = await fetch(
//       `https://www.reddit.com/r/${selectedSubreddit}.json`
//     );
//     const data = await response.json();
//     console.log('retourne données!');
//     return data;
//   }
// );

export const fetchPosts = (selectedSubreddit) => async (dispatch) => {
  console.log('here!');
  dispatch(postsSlice.actions.request(selectedSubreddit));
  try {
    const response = await fetch(
      `https://www.reddit.com/r/${selectedSubreddit}.json`
    );
    const data = await response.json();
    dispatch(
      postsSlice.actions.receive({
        selectedSubreddit,
        posts: data.data.children.map((child) => child.data),
      })
    );
  } catch (err) {
    //dispatch(getRepoDetailsFailed(err.toString()));
  }
};

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
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(fetchPosts.fulfilled, (state, action) => {
  //     console.log('receiving!');
  //     state[action.payload.subreddit] = action.payload;
  //   });
  // },

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
      //we have received data. Display it!
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

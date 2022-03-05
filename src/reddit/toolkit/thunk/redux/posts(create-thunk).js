import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (selectedSubreddit) => {
    const response = await fetch(
      `https://www.reddit.com/r/${selectedSubreddit}.json`
    );
    const data = await response.json();
    return {
      selectedSubreddit,
      posts: data.data.children.map((child) => child.data),
      receivedAt: Date.now(),
    };
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      const currentSubreddit = action.meta.arg;
      if (!state[currentSubreddit]) {
        // Create object store if it doesn't exist yet
        state[currentSubreddit] = {};
        state[currentSubreddit].posts = [];
      }
      state[currentSubreddit].isInvalid = false;
      state[currentSubreddit].isFetching = true;
    });

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      const currentSubreddit = action.payload.selectedSubreddit;
      state[currentSubreddit].isFetching = false;
      state[currentSubreddit].isInvalid = false;
      state[currentSubreddit].posts = action.payload.posts;
      state[currentSubreddit].lastUpdated = action.payload.receivedAt;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log('rejected');
      console.log(state['reactjs']);
    });
  },

  reducers: {
    invalidate(state, action) {
      //we need to reload the Data
      state[action.payload].isInvalid = true;
    },
  },
});

export const { invalidate, receive, request } = postsSlice.actions;

export default postsSlice.reducer;

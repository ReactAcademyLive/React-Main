const { createSlice } = require('@reduxjs/toolkit');

const selectedSubredditSlice = createSlice({
  name: 'selectedSubreddit',
  initialState: 'reactjs',
  reducers: {
    select(_, action) {
      return action.payload;
    },
  },
});

export const { select } = selectedSubredditSlice.actions;
export default selectedSubredditSlice.reducer;

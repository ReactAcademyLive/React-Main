import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const visibilityFilter = createSlice({
  name: 'visibilityFilter',
  initialState: StatusFilters.All,
  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload;
    },
  },
});

export default visibilityFilter;

export const { setVisibilityFilter } = visibilityFilter.actions;

import { createSlice } from '@reduxjs/toolkit';
import { StatusFilters } from '../../common/StatusFilters';

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

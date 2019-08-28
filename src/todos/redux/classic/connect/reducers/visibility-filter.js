import { VisibilityFilters, actionList } from '../actions';


export default function visibilityFilter (state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case actionList.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};


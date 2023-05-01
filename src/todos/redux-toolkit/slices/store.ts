import { configureStore } from '@reduxjs/toolkit';
import todos from './todos';
import visibilityFilter from './visibility-filter';

export const store = configureStore({
  reducer: {
    todos: todos.reducer,
    visibilityFilter: visibilityFilter.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

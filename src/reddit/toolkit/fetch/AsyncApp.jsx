import React, { useCallback, useEffect } from 'react';
//import PropTypes from 'prop-types';

import { invalidate, select, request, receive } from './redux/reducers';
import { Button } from 'reactstrap';
import Picker from './Picker';
import Posts from './Posts';
import { useDispatch, useSelector } from 'react-redux';

function AsyncApp(props) {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit);
  const subreddit = useSelector((state) => state.posts[selectedSubreddit]);
  const { isFetching, isInvalid, lastUpdated, posts } = subreddit ?? {};

  const fetchPostsIfNeeded = useCallback(
    async (selectedSubreddit) => {
      function shouldFetchPosts() {
        if (!posts) {
          return true;
        } else if (isFetching) {
          return false;
        } else {
          return isInvalid;
        }
      }
      if (shouldFetchPosts()) {
        dispatch(request(selectedSubreddit));
        try {
          const response = await fetch(
            `https://www.reddit.com/r/${selectedSubreddit}.json`
          );
          const data = await response.json();
          dispatch(
            receive({
              selectedSubreddit,
              posts: data.data.children.map((child) => child.data),
            })
          );
        } catch (err) {
          // dispatch({ type: 'error', payload: e.message });
        }
      }
    },
    [isFetching, dispatch, isInvalid, posts]
  );

  useEffect(() => {
    fetchPostsIfNeeded(selectedSubreddit);
  }, [isInvalid, selectedSubreddit, fetchPostsIfNeeded]);

  // if (!subreddit) {
  //   dispatch(request(selectedSubreddit));
  // }

  function handleChange(nextSubreddit) {
    //distpatch the Change, and fetchPostIfNeeded
    dispatch(select(nextSubreddit));
  }

  function handleRefreshClick(evt) {
    evt.preventDefault();

    dispatch(invalidate(selectedSubreddit));
  }

  return (
    <div>
      <Picker
        value={selectedSubreddit}
        onChange={handleChange}
        options={['reactjs', 'frontend', 'javascript']}
      />
      <p>
        <Button
          onClick={handleRefreshClick}
          color='primary'
          className={(isFetching ? 'invisible' : '') + ' mr-3'}
        >
          Refresh
        </Button>
        {lastUpdated && !isFetching && (
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
          </span>
        )}
      </p>
      {isFetching && posts?.length === 0 && <h2>Loading...</h2>}
      {!isFetching && posts?.length === 0 && <h2>Empty.</h2>}
      {posts?.length > 0 && (
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <Posts posts={posts} />
        </div>
      )}
    </div>
  );
}

// function mapStateToProps(state) {
//   const { selectedSubreddit, postsBySubreddit } = state;
//   const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
//     selectedSubreddit
//   ] || {
//     isFetching: true,
//     items: [],
//   };
//   return {
//     selectedSubreddit,
//     posts,
//     isFetching,
//     lastUpdated,
//     postsBySubreddit,
//   };
// }

export default AsyncApp;

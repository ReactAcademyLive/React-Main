import React, { useCallback, useEffect } from 'react';
//import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { invalidate, request, receive } from './redux/posts';
import { select } from './redux/selectedSubreddit';
import Picker from '../../common/Picker';
import Posts from '../../common/Posts';

function AsyncApp() {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit);
  const subredditData = useSelector((state) => state.posts[selectedSubreddit]);
  const { isFetching, isInvalid, lastUpdated, posts } = subredditData ?? {};

  const fetchPostsIfNeeded = useCallback(
    async (selectedSubreddit) => {
      let shouldFetch = false;

      if (!posts && !isFetching) {
        shouldFetch = true;
      } else if (!!isInvalid && !isFetching) {
        shouldFetch = true;
      }

      if (shouldFetch) {
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
    [isInvalid, isFetching, dispatch, posts]
  );

  useEffect(() => {
    fetchPostsIfNeeded(selectedSubreddit);
  }, [isInvalid, selectedSubreddit, fetchPostsIfNeeded]);

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
          variant='primary'
          className={(isFetching ? 'invisible' : '') + ' me-3'}
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

export default AsyncApp;

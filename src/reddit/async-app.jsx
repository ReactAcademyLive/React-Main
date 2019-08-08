import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectSubreddit,
  //fetchPostsIfNeeded,
  invalidateSubreddit,
  requestPosts,
  receivePosts
} from './redux/actions';
import {Button} from 'reactstrap';
import Picker from './picker';
import Posts from './posts';

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }
  
  componentDidMount() {
    const { /* dispatch, */  selectedSubreddit } = this.props;
    this.fetchPostsIfNeeded(selectedSubreddit);
    //dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const {  /* dispatch, */  selectedSubreddit } = this.props;
      this.fetchPostsIfNeeded(selectedSubreddit);
      //dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit));
    this.fetchPostsIfNeeded(nextSubreddit);
    //this.props.dispatch(fetchPostsIfNeeded(nextSubreddit));
  }

  handleRefreshClick(evt) {
    evt.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    this.fetchPostsIfNeeded(selectedSubreddit,true);
    //dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  shouldFetchPosts(subreddit, isInvalid) {
    const posts = this.props.postsBySubreddit[subreddit];
    if (!posts) {
      return true;
    } else if (posts.isFetching) {
      return false;
    } else {
      return isInvalid;
    }
  }

  async fetchPostsIfNeeded(subreddit, isInvalid) {
    const {dispatch} = this.props;
    if (this.shouldFetchPosts(subreddit,isInvalid)) {
      dispatch(requestPosts(subreddit));
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        dispatch(receivePosts(subreddit, json));
      }
      catch (err)
      {
       // dispatch({ type: 'error', name: 'error', value: e.message });
      }
    }
  }


  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend', 'javascript']}
        />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
          {!isFetching &&
            <Button onClick={this.handleRefreshClick}>
              Refresh
            </Button>}
        </p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>}
      </div>
    )
  }
}

AsyncApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  };
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
    postsBySubreddit
  };
}

export default connect(mapStateToProps)(AsyncApp);
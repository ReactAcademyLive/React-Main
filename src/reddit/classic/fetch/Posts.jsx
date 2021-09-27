import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

export default class Posts extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.posts.map((post, i) => (
          <ListGroup.Item key={i}>
            <a href={post.url}>{post.title}</a>
            {post.is_self ? (
              ''
            ) : (
              <>
                {' '}
                &mdash;
                <a href={`https://www.reddit.com${post.permalink}`}>
                  {' '}
                  discussion
                </a>
              </>
            )}
            <span className='float-end'>{post.ups} ups</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

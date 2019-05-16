import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Posts extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.posts.map((post, i) => 
          <ListGroupItem key={i}>
            <a href={post.url} >{post.title}</a>   
            { post.is_self  ? ''  :  
                <React.Fragment> &mdash; 
                  <a href={`https://www.reddit.com${post.permalink}`} >discussion</a> 
                </React.Fragment>   
            }   
          </ListGroupItem>)
        }
      </ListGroup>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
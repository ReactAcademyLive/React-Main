import { ListGroup } from 'react-bootstrap';

interface PostsProps {
  posts: Post[];
}

interface Post {
  url: string;
  title: string;
  permalink: string;
  is_self: boolean;
  ups: number;
}

export default function Posts({ posts }: PostsProps) {
  return (
    <ListGroup>
      {posts.map((post, i) => (
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

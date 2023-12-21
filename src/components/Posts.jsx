import { Link } from 'react-router-dom';

import classes from './Posts.module.css';

const Posts = ({ blogPosts, users }) => {
  return (
    <ul className={classes.posts}>
      {blogPosts.map((post) => {
        const user = users.find((user) => user.id == post.userId);

        return (
          <Link to={post.id.toString()} key={post.id}>
            <li>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <span>Author: {user.name}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Posts;

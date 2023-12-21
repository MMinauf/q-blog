import { Link } from 'react-router-dom';
import classes from './BlogPost.module.css';

const BlogPost = ({ post, users, comments }) => {
  const userPost = users.find((user) => user.id == post.userId);
  return (
    <article className={classes.post}>
      <Link to='/'>Home</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <span>Author: {userPost.name}</span>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default BlogPost;

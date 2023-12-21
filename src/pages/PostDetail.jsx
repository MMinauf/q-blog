import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { getPost, getComments, getUsers } from '../util/api';
import LogComponent from '../components/LogComponent';

function PostDetailPage() {
  const [post, setPost] = useState();
  const [users, setUsers] = useState();
  const [comments, setComments] = useState();
  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        getPost(id).then(setPost);
        getComments(id).then(setComments);
        getUsers().then(setUsers);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadData();
  }, [id]);

  return (
    <>
      <LogComponent componentName={`PostDetail with id ${id}`} />
      {isLoading && <p>Loading post...</p>}
      {error && <p>{error}</p>}
      {post && users && comments && (
      <BlogPost post={post} users={users} comments={comments} />
      )}
    </>
  );
}

export default PostDetailPage;

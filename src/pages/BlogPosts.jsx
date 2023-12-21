import { useEffect, useState, useRef } from 'react';
import Posts from '../components/Posts';
import Input from '../components/Input';
import LogComponent from '../components/LogComponent';
import { getPosts, getUsers } from '../util/api';

const BlogPostsPage = () => {
  const [error, setError] = useState();
  const [posts, setPosts] = useState();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [users, setUsers] = useState();
  const inputRef = useRef('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        getPosts().then(setPosts);
        getUsers().then(setUsers);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredPosts = posts.filter((post) => {
      return filteredUsers.some((user) => {
        return user.id === post.userId;
      });
    });
    setFilteredPosts(filteredPosts);
  };

  return (
    <>
      <LogComponent componentName='BlogPosts' />
      <h1>Blog Posts</h1>
      {users && (
        <Input handleSearch={handleSearch} innerRef={inputRef} disabled />
      )}
      {isLoading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {!isLoading && filteredPosts && users && (
        <Posts
          blogPosts={!inputRef.current.value ? posts : filteredPosts}
          users={users}
        />
      )}
    </>
  );
};

export default BlogPostsPage;

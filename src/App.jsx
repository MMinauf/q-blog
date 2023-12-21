import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BlogPostsPage from './pages/BlogPosts';
import PostDetailPage from './pages/PostDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogPostsPage />} />
        <Route path=':id' element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

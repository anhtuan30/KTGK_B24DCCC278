import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import PostDetail from "./Components/PostDetail";
import PostForm from "./Components/PostForm";
import { Post } from "./types";

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "React Router cơ bản",
      author: "Nguyễn Văn A",
      thumbnail: "https://picsum.photos/400/200?1",
      content: "Nội dung bài viết mẫu ...",
      category: "Công nghệ",
      date: "2025-10-21",
    },
    {
      id: "2",
      title: "Hành trình phượt Đà Lạt",
      author: "Trần Văn B",
      thumbnail: "https://picsum.photos/400/200?2",
      content: "Nội dung bài viết mẫu ...",
      category: "Du lịch",
      date: "2025-10-20",
    }
    
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/posts" element={<PostList posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<PostForm posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/edit/:id" element={<PostForm posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;

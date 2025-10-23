import { Post } from "../types/Post";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList: React.FC<Props> = ({ posts, setPosts }) => {
  const [search, setSearch] = useState("");

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Danh sách bài viết ({filtered.length})</h2>
      <input
        placeholder="Tìm kiếm theo tiêu đề..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to="/create">+ Viết bài mới</Link>
      <div className="grid">
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

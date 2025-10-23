import { useNavigate, useParams, Link } from "react-router-dom";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostDetail: React.FC<Props> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) return <h2>Không tìm thấy bài viết</h2>;

  const handleDelete = () => {
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
      navigate("/");
    }
  };

  return (
    <div className="container">
      <img src={post.thumbnail} width="400" />
      <h1>{post.title}</h1>
      <p><b>Tác giả:</b> {post.author} | {post.date}</p>
      <p><b>Thể loại:</b> {post.category}</p>
      <p>{post.content}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <Link to={`/posts/edit/${post.id}`}>Chỉnh sửa</Link>
      <button onClick={handleDelete}>Xóa</button>
    </div>
  );
};

export default PostDetail;

import { Post } from "../types/post";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard = ({ post, onDelete }: PostCardProps) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa bài viết này?");
    if (confirmDelete) {
      onDelete(post.id);
    }
  };

  return (
    <div style={styles.card}>
      <img src={post.thumbnail} alt={post.title} style={styles.thumbnail} />

      <h3>{post.title}</h3>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Ngày đăng:</b> {post.date}</p>
      <p>{post.content.slice(0, 100)}...</p>

      <div style={styles.actions}>
        <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
        <button onClick={handleDelete} style={styles.deleteBtn}>Xóa</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "10px",
    background: "#fff",
  },
  thumbnail: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "4px",
  },
};

export default PostCard;

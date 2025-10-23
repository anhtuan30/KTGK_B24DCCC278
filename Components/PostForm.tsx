import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post } from "../types";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostForm: React.FC<Props> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const existingPost = posts.find((p) => p.id === id);

  const [form, setForm] = useState<Post>({
    id: "",
    title: "",
    author: "",
    thumbnail: "",
    content: "",
    category: "Công nghệ",
    date: ""
  });

  useEffect(() => {
    if (isEdit && existingPost) {
      setForm(existingPost);
    }
  }, [isEdit, existingPost]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.title.length < 10) return alert("Tiêu đề ít nhất 10 ký tự!");
    if (form.author.length < 3) return alert("Tác giả ít nhất 3 ký tự!");
    if (form.content.length < 50) return alert("Nội dung ít nhất 50 ký tự!");

    if (isEdit) {
      setPosts(posts.map((p) => (p.id === id ? form : p)));
      alert("Cập nhật thành công!");
      navigate(`/posts/${id}`);
    } else {
      const newPost = { ...form, id: Date.now().toString(), date: new Date().toISOString().split("T")[0] };
      setPosts([newPost, ...posts]);
      alert("Đăng bài thành công!");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h2>{isEdit ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>

      <input name="title" value={form.title} onChange={onChange} placeholder="Tiêu đề" />
      <input name="author" value={form.author} onChange={onChange} placeholder="Tác giả" />
      <input name="thumbnail" value={form.thumbnail} onChange={onChange} placeholder="URL thumbnail" />
      <select name="category" value={form.category} onChange={onChange}>
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <textarea name="content" rows={10} value={form.content} onChange={onChange} placeholder="Nội dung..." />

      <button onClick={handleSubmit}>{isEdit ? "Cập nhật" : "Đăng bài"}</button>
      <button onClick={() => navigate(-1)}>Hủy</button>
    </div>
  );
};

export default PostForm;

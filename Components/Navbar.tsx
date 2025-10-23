import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.logo} onClick={() => navigate("/")}>
        BLOG MANAGER
      </div>
      <div style={styles.menu}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...styles.link,
            color: isActive ? "yellow" : "white",
          })}
        >
          Trang chủ
        </NavLink>
        <button style={styles.button} onClick={() => navigate("/create")}>
          Viết bài
        </button>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    marginBottom: "20px",
  },
  logo: {
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  menu: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#4caf50",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    color: "white",
    borderRadius: "4px",
  },
};

export default Navbar;

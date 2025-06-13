import PostListContext from "../../store/Store_PostList";
import { useContext } from "react";

import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";

function Posts() {
  const { posts, dispatch } = useContext(PostListContext);
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5">
      {posts.map((post) => (
        <div
          className="card post"
          key={post.id}
          style={{ width: "18rem", marginBottom: "0.75rem", padding: "0.5rem" }} // Reduced margin and added padding
        >
          <span
            className="position-absolute d-flex align-items-center justify-content-center bg-danger"
            style={{
              right: "0.5rem",
              top: "0.5rem",
              cursor: "pointer",
              zIndex: 2,
              fontSize: "1.3rem", // Larger font for the ×
              width: "2rem", // Make it more circular
              height: "2rem",
              borderRadius: "50%", // Perfect circle
              border: "2px solid #fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              padding: 0, // Remove default padding
              textAlign: "center",
              lineHeight: "2rem", // Vertically center the ×
              color: "#fff",
              transition: "background 0.2s",
            }}
            onClick={() => {
              dispatch({ type: "DELETE_POST", payload: post.title });
            }}
            title="Delete post"
          >
            ×
          </span>
          <img
            className="card-img-top"
            src={
              post.img
                ? post.img
                : "https://via.placeholder.com/286x240?text=No+Image"
            }
            alt="Card image cap"
            style={{
              objectFit: "cover",
              height: "260px", // Increased image height
              width: "100%",
              aspectRatio: "16/9",
              backgroundColor: "#eee",
              marginBottom: "0.5rem", // Reduce gap below image
            }}
          />
          <div className="card-body p-2">
            <h5 className="card-title mb-2" style={{ fontSize: "1.1rem" }}>
              {post.title}
            </h5>
            <p className="card-text mb-2" style={{ fontSize: "0.95rem" }}>
              {post.content}
            </p>
          </div>
          <div
            className="px-2 reactions d-flex align-items-center mb-2"
            style={{ gap: "0.5rem" }}
          >
            <span>
              <AiFillLike /> {post.reactions.likes}
            </span>
            <span>
              <BiSolidDislike /> {post.reactions.dislikes}
            </span>
          </div>
          <div className="card-tags px-2 pb-2">
            {post.tags.map((tag) => (
              <button
                key={tag}
                className="btn btn-info btn-sm m-1"
                style={{ padding: "0.15rem 0.5rem" }}
              >
                #{tag}
              </button>
            ))}
            <button
              className="btn btn-secondary btn-sm m-1"
              style={{ padding: "0.15rem 0.5rem" }}
            >
              More...
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;

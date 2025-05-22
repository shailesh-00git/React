import PostListContext from "../../store/Store_PostList";
import { useContext } from "react";

function Posts() {
  const { posts, dispatch } = useContext(PostListContext);
  return (
    <div className="d-flex flex-wrap gap-4">
      {posts.map((post) => (
        <div
          className="card post"
          key={post.id}
          style={{ width: "18rem", marginBottom: "1.5rem" }}
        >
         
            <span className="position-absolute remove-badge top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => {
              // Handle delete post action here
              dispatch({ type: "DELETE_POST", payload: post.title });
            }}>
              X
            </span>

          <img
            className="card-img-top"
            src={post.img}
            alt="Card image cap"
            style={{ objectFit: "cover", height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
          <div className="card-tags px-3 pb-3">
            {post.tags.map((tag) => (
              <button key={tag} className="btn btn-info btn-sm m-1">
                #{tag}
              </button>
            ))}
            <button className="btn btn-secondary btn-sm m-1">More...</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;

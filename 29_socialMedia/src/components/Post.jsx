import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body position-relative">
        <h5 className="card-title">
          {post.title}
          <span
            className="btn position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
            title="Delete Post"
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="mb-2">
          {post.tags &&
            post.tags.map((tag) => (
              <span key={tag} className="badge text-bg-primary hashtag me-1">
                {tag}
              </span>
            ))}
        </div>
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;

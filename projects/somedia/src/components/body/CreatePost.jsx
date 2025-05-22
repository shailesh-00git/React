import PostListContext from "../../store/Store_PostList";
import { useContext } from "react";

function CreatePost() {
  const { dispatch } = useContext(PostListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    // Capitalize the first letter of the title
    title = title.charAt(0).toUpperCase() + title.slice(1);

    const newPost = {
      id: Date.now().toString(),          
      title: title,
      img: e.target.img.files[0] ? URL.createObjectURL(e.target.img.files[0]) : "",
      content: e.target.content.value,
      tags: e.target.tags.value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };
    dispatch({ type: "ADD_POST", payload: newPost });
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-size">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Post Title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-group mt-5 mb-3">
          <label htmlFor="img">Image</label>
          <input
            type="file"
            className="form-control-file"
            id="img"
            name="img"
            accept="image/*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="Post Tags (comma separated)"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

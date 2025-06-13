import { useNavigate } from "react-router-dom";
import PostListContext from "../../store/Store_PostList";
import { useContext, useRef } from "react";

function CreatePost() {
  const { dispatch } = useContext(PostListContext);
  const navigate = useNavigate();

  // Create refs for each input
  const titleRef = useRef();
  const contentRef = useRef();
  const imgRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title: titleRef.current.value,
      img: imgRef.current.files[0]
        ? URL.createObjectURL(imgRef.current.files[0])
        : "",
      content: contentRef.current.value,
      reactions: {
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
      },
      tags: tagsRef.current.value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.content,
        img: newPost.img,
        tags: newPost.tags,
        reactions: newPost.reactions,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Post created successfully:", data);
        // Add the server response to local state
        dispatch({ type: "ADD_POST", payload: { ...newPost, ...data } });
        navigate("/");
      });

    // Clear the form fields
    titleRef.current.value = "";
    contentRef.current.value = "";
    imgRef.current.value = "";
    tagsRef.current.value = "";
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
            ref={titleRef}
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
            ref={contentRef}
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
            ref={imgRef}
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
            ref={tagsRef}
          />
        </div>
        {/* <div className="mx-2 mt-3 mb-3">
          likes: <input type="text" value={ Math.floor(Math.random() * 100)} readOnly />
          Dislikes: <input type="text" value={Math.floor(Math.random() * 100)} readOnly />
        </div> */}
        <button type="submit" className="btn btn-primary mt-5">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

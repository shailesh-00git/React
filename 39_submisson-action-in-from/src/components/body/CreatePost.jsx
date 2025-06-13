import { Form, redirect } from "react-router-dom";

function CreatePost() {
  // No need for dispatch here, handled in the action
  return (
    <div className="container mt-5">
      <h1 className="text-center text-size">Create Post</h1>
      <Form method="post" encType="multipart/form-data">
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
      </Form>
    </div>
  );
}

export async function CreatePostAction({ request }) {
  const formData = await request.formData();

  // Get fields
  const title = formData.get("title");
  const content = formData.get("content");
  const tags = formData.get("tags") || "";

  const newPost = {
    id: Date.now().toString(),
    title,
    content,
    reactions: {
      likes: Math.floor(Math.random() * 100),
      dislikes: Math.floor(Math.random() * 100),
    },
    tags: tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag),
  };

  await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.content,
      tags: newPost.tags,
      reactions: newPost.reactions,
      userId: 5,
    }),
  });

  // Only one return is allowed, so keep redirect only
  return redirect("/");
}

export default CreatePost;

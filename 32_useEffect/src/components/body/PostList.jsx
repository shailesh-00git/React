import { useContext, useEffect } from "react";
import ErrorMsg from "./ErrorMsg";
import PostListContext from "../../store/Store_PostList";
import Posts from "./Posts";

function PostList() {
  const { posts, dispatch } = useContext(PostListContext);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        dispatch({
          type: "SET_POSTS",
          payload: data.posts,
        });
      });
  },[]);

  return (
    <>
      <div className="d-flex flex-wrap postlist my-5">
        {posts.length === 0 ? <ErrorMsg /> : <Posts />}
      </div>
    </>
  );
}

export default PostList;

import { useContext, useEffect, useState } from "react";
import ErrorMsg from "./ErrorMsg";
import PostListContext from "../../store/Store_PostList";
import Posts from "./Posts";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { posts, dispatch } = useContext(PostListContext);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_POSTS",
          payload: data.posts,
        });
        setfetching(false);
      });

    return () => {
      console.log("cleaning fetch")
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && (
        <div className="d-flex flex-wrap postlist my-5">
          {posts.length === 0 ? <ErrorMsg /> : <Posts />}
        </div>
      )}
    </>
  );
}

export default PostList;

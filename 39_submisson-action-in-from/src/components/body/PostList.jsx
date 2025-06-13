import { useContext} from "react";
import ErrorMsg from "./ErrorMsg";
import PostListContext from "../../store/Store_PostList";
import Posts from "./Posts";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { posts, fetching } = useContext(PostListContext);


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

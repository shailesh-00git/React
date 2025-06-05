import PostListContext from "../../store/Store_PostList";

function ErrorMsg({handleFetch}) {
  return (
    <div className="d-flex flex-column align-items-center bg-light ">
      <h2>No posts available</h2>
      <button onClick={handleFetch}>Fetch data</button>
    </div>
  );
}

export default ErrorMsg;

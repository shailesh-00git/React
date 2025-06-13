import { createContext } from "react";
import { useReducer,useState,useEffect } from "react";

const PostListContext = createContext({
  posts: [],
  dispatch: () => {},
});

export default PostListContext;

const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state];
    case "DELETE_POST":
      return state.filter((post) => post.title !== action.payload);

    case "SET_POSTS":
      return action.payload;

    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, DEFAULT_POSTS);
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
      console.log("cleaning fetch");
      controller.abort();
    };
  }, []);
  return (
    <PostListContext.Provider value={{ posts, dispatch , fetching }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POSTS = [];
export { PostListContext, PostListProvider };

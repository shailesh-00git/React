import { createContext } from "react";
import { useReducer } from "react";

const PostListContext = createContext({
    posts: [],
    dispatch: () => {},
    
});

export default PostListContext;
const PostListProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, DEFAULT_POSTS);
  return (
    <PostListContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostListContext.Provider>
  );
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
      case "DELETE_POST":
      return state.filter((post) => post.title !== action.payload);
    default:
      return state;
  }
};
const DEFAULT_POSTS = [
  {
    id: Date.now().toString(),

    title: "First Post",
    img: "https://plus.unsplash.com/premium_photo-1746637011338-7c7e45d4da20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["tag1", "tag2"],
  },
  {
    id: Date.now().toString(),
    title: "Second Post",
    img: "https://plus.unsplash.com/premium_photo-1747054587794-d719ea817d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    content:
      "This is the content of the second post.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["tag3", "tag4"],
  },
  {
    id: Date.now().toString(),
    title: "Third Post",
    img: "https://images.unsplash.com/photo-1747595435884-29c6b5235030?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    content:
      "This is the content of the third post.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["tag5", "tag6"],
  },
  {
    id: Date.now().toString(),
    title: "Fourth Post",
    img: "https://images.unsplash.com/photo-1747835369484-97d3f0f782ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "This is the content of the fourth post.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["tag7", "tag8"],
  },

  {
    id: Date.now().toString(),
    title: "Fifth Post",
    img: "https://images.unsplash.com/photo-1747752423635-616b69270e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "This is the content of the fifth post.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["tag9", "tag10"],
  },
];
export { PostListContext, PostListProvider };

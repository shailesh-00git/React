import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import PostList from "../components/body/PostList";
import { Outlet } from "react-router-dom";
import PostListContext, { PostListProvider } from "../store/Store_PostList";
// import CreatePost from "../components/body/CreatePost";

function App() {
  return (
    <PostListProvider>
      <div className="d-flex">
        <Sidebar />
        <div className="container" style={{ marginLeft: 240 }}>
          <Header />
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

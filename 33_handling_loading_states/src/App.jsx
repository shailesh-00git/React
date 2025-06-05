import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/body/PostList";

import PostListContext, { PostListProvider } from "./store/Store_PostList";

import CreatePost from "./components/body/CreatePost";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("home");
  return (
    <PostListProvider>
      <div className="d-flex">
        <Sidebar setTab={setTab} tab={tab} />
        <div className="container" style={{ marginLeft: 240 }}>
          <Header />
          {tab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

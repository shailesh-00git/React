import { useState } from "react";
import "./App.css";
import Dispaly from "./context/components/Dispaly";
import Profile from "./context/components/Profile";
import { AppProvider } from "./context/Store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [addProfile, setAddProfile] = useState("light");
  const [viewProfile, setViewProfile] = useState("light");
  return (
    <AppProvider>
      <div className="m-5">
        <button
          className={`btn btn-${addProfile}`}
          onClick={() => {
            setAddProfile("info");
            setViewProfile("light");
          }}
        >
          Add Profile
        </button>
        <button
          className={`btn btn-${viewProfile}`}
          onClick={() => {
            setViewProfile("info");
            setAddProfile("light");
          }}
        >
          view Profile
        </button>
      </div>
      <h2 className="mb-3">Hello World</h2>
      {addProfile === "info" ? <Profile></Profile> : <Dispaly></Dispaly>}
    </AppProvider>
  );
}

export default App;

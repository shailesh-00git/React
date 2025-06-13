import "./App.css";
import Header from "./components/Header";
import DispalyCounter from "./components/DispalyCounter";
import Privacy from "./components/Privacy";
import Controls from "./components/Controls";

import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div
        className="px-4 py-5 my-5 text-center border  border-3-dark border-2 rounded  mx-auto  "
        style={{ width: "50%" }}
      >
        <Header></Header>

        <div className="col-lg-6 mx-auto my-5">
          {privacy ? <Privacy /> : <DispalyCounter></DispalyCounter>}

          <Controls></Controls>
        </div>
      </div>
    </>
  );
}

export default App;

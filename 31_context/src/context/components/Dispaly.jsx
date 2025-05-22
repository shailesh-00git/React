import AppContext from "../Store";
import { useContext } from "react";

function Dispaly() {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  function handleDelete(id) {
    confirm("Are you sure you want to delete this profile?") && dispatch({
      type: "DELETE",
      id: id,
    });
  }
  return (
    <div>
      <h2>Profile List</h2>
      {state.length === 0 ? (
        <p>No profiles added.</p>
      ) : (
        state.map((profile) => (
          <div key={profile.id}>
            <p>id: {profile.id}</p>
            <p>name: {profile.name}</p>
            <p>age: {profile.age}</p>
            <button onClick={() => handleDelete(profile.id)}>delete</button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Dispaly;

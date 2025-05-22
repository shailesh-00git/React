import { useContext, useRef } from "react";
import AppContext from "../Store";

function Profile() {
  const nameRef = useRef();
  const ageRef = useRef();
  const { dispatch } = useContext(AppContext);

  function finalAdd() {
    dispatch({
      type: "ADD",
      newName: nameRef.current.value,
      newAge: ageRef.current.value,
    });
    alert("Profile added successfully");
    nameRef.current.value = "";
    ageRef.current.value = "";
  }

  return (
    <>
      <h2>Profile</h2>
      Name: <input
        type="text"
        placeholder="enter name"
        ref={nameRef}
      />{"   "}
      Age: <input
        type="text"
        placeholder="enter age"
        ref={ageRef}
      />
      <button onClick={finalAdd}>add</button>
    </>
  );
}

export default Profile;

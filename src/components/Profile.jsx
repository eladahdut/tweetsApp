import React, { useState, createRef } from "react";

export default function Profile(props) {
  const [userName, setUserName] = useState("");
  const myInput = createRef(null);

  const onInput = (value) => {
    setUserName(value);
  };

  const onSave = () => {
    props.upadteUsername(userName);
    myInput.current.value = "";
    setUserName("");
    alert("user name has changed");
  };

  return (
    <div style={{ marginTop: "2rem", width: "600px", color: "white" }}>
      <h2 style={{ width: "100%" }}>Profile</h2>
      <label htmlFor="myInput">User Name</label>
      <input
        style={{
          color: "white",
          backgroundColor: "transparent",
          border: "1px solid white",
        }}
        className="form-control"
        ref={myInput}
        autoFocus={true}
        type="text"
        onChange={(event) => onInput(event.target.value)}
      />
      <div
        style={{
          marginTop: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <button className="btn btn-primary" onClick={() => onSave()}>
          Save
        </button>
      </div>
    </div>
  );
}

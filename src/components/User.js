import React from "react";

const User = (props) => {
  console.log("tata", props);
  return (
    <span className="user">
      <span className="name">{props.userData.name}</span>
      <span className="handle">{props.userData.handle}</span>
    </span>
  );
};

export default User;

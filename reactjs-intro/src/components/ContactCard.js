import React from "react";
import user from "../images/35.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item" style={{ position: "relative" }}>
      <img className="ui avatar image" src={user} alt={name} />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        style={{
          color: "red",
          marginTop: "7px",
          position: "absolute",
          right: "10px",
          top: "0",
        }}
        className="trash alternate outline icon"
        onClick={() => {
          props.clickHandler(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;

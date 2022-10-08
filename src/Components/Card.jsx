import React from "react";

import "./Card.css";

const Card = (props) => {
  return <div className="frontcard" style={{ backgroundImage: 'url("/cube.png")' }}>{props.children} </div>;
};

export default Card;
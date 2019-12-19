import React from "react";
import "./style.css";

// function Title(props) {
//   return <h1 className="title">{props.children}</h1>
// }

const Title = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Title;





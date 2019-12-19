import React from "react";
import "./style.css";

// function ImagesCard(props) {
//     return (
//       <div className="card">
//         <div className="img-container">
//           <img alt={props.id} src={props.image} />
//         </div>       
        
//       </div>
//     );
//   }

const Card = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
    </div>
  );
  
  export default Card;
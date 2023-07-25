import React from "react";

// function add (num1, num2){
  //  return num1 + num2
// }

export default function Card(props) {
  let cardTitle = "Hey, what's up?"

  // this is where most of the js will happen
  return (
    // this is where most of the html will happen
    <div className="card mx-1" style={{width: "18rem"}}>
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

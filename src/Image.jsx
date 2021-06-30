import React from "react";
import Description from "./Description.jsx";
import Illustration from "./Illustration.jsx";


function Image (props){

  return <div className = "image">
    <Illustration img = {props.img}/>
    <Description caption ={props.caption} />
  </div>
}




export default Image;
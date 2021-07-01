import React from "react";
import Description from "./Description.jsx";
import Illustration from "./Illustration.jsx";
import { SRLWrapper} from "simple-react-lightbox";

const options = {
  thumbnails: {showThumbnails: false,},
  buttons: {showAutoplayButton: false,
    showNextButton: false,
    showPrevButton: false,
    showDownloadButton: false, }
}

function Image (props){

  return <div className = "image">
  <SRLWrapper options ={options}>
    <Illustration img = {props.img}/>
    <Description caption ={props.caption} />
  </SRLWrapper>
  </div>
}




export default Image;
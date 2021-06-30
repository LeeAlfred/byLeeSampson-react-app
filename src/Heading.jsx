import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from "react-bootstrap/Container";

function Heading() {
    return (
    // <Jumbotron fluid>
     <div className = "header">
        <div className = "profile"><img className ="profile-img" src="https://leealfred.github.io/LeeCV/circle-cropped.png"alt="profile picture" /></div>
        <div><h1 className="heading">byLeeSampson</h1></div>
     </div>
    // </Jumbotron>
    );
}

export default Heading;
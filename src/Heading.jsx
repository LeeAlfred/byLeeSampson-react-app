import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from "react-bootstrap/Container";

function Heading() {
    return (
    // <Jumbotron fluid>
     <div className = "header" id="home">
     <h1 className = "title">Penguins</h1>
        <img className ="profile-img" src="https://leealfred.github.io/LeeCV/circle-cropped.png"alt="Lee Sampson" />
        <h1 className="heading">byLeeSampson</h1>
     </div>
    // </Jumbotron>
    );
}

export default Heading;
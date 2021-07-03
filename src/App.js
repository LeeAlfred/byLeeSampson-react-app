// import logo from './logo.svg';
import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import './App.css';
import Heading from "./Heading";
import About from "./About"
import Footer from "./Footer";
import Greeting from './Greeting';
import Image from './Image';
import cartoons from './cartoons';
import Menu from "./Menu";

function createImage(cartoons){
  return <Image key={cartoons.id} img={cartoons.img} caption={cartoons.caption} />;
}



function App() {
  return (
    <div className="App">
<Menu />
<Heading />
<Greeting />
<About />
<SimpleReactLightbox>
{cartoons.map(createImage)}
</SimpleReactLightbox>

<Footer />

    </div>
  );
}

export default App;

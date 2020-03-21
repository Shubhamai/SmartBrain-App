import React from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "tachyons";
import "./App.css";

const partilesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 80
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    },
}};

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={partilesOptions} />

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*    
      <FaceRecognition />*/}
    </div>
  );
}

export default App;

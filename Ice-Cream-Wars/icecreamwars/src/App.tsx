import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <>
    
      <Header user={"James"} />
      <div className="Ads">
      <Ad flavor={"Chocolate"} isLight={false} fontSize={24} />
      <Ad flavor={"Vanilla"} isLight={true} fontSize={24} />
      <Ad flavor={"Strawberry"} isLight={false} fontSize={24} />
      </div>
      <div className="main">
        <AdDesigner />
        <Votes />
      </div>
    </>
  );
}

export default App;

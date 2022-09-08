import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './css/App.css';
import Card from "./components/Card";

function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Card />
      </div>
  )
}

export default App;

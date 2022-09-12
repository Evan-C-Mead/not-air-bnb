import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './css/App.css';
import Card from "./components/Card";
import Contact from "./components/Contact";
import mrW from '../src/images/mr-whiskerson.png';
import fluffykins from '../src/images/fluffykins.png';
import felix from '../src/images/felix.png';
import pumpkin from '../src/images/pumpkin.png';
import Joke from './components/Joke';

export default function App() {
    return (
        <div className="main">
            <Navbar/>
            <Hero/>
            <Card/>
        </div>
    )
}

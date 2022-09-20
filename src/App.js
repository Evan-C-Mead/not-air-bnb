import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './css/App.css';
import Card from "./components/Card";
import jokesData from "./jokesData";

export default function App() {
    console.log(jokesData);

    return (
        <div className="main">
            <Navbar/>
            <Hero/>
            <Card
                img=""
                rating={5.0}
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}

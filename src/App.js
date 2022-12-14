import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './css/App.css';
import Card from "./components/Card";
import data from "./data/data";

export default function App() {
    const cards = data.map(card => {
        return <Card
            key={card.id}
            card={card}
        />
    })

    return (
        <div className="main">
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

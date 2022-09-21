import React from "react";
import travelData from "./data/travelData";
import './css/App.css';
import TravelNavbar from "./components/TravelNavbar";
import TravelCard from "./components/TravelCard";

export default function TravelApp() {
    const cards = travelData.map(card => {
        return <TravelCard
            key={card.id}
            card={card}
        />
    })

    return (
        <div>
            <TravelNavbar/>
            <section>
                {cards}
            </section>
        </div>
    )
}

import React from "react";
import travelData from "./data/travelData";
import './css/App.css';
import TravelNavbar from "./components/TravelNavbar";
import TravelCard from "./components/TravelCard";
import Joke from "./components/Joke";
import jokesData from "./data/jokesData";

export default function TravelApp() {
    const cards = travelData.map(card => {
        return <TravelCard
            key={card.id}
            card={card}
        />
    })

    const jokeElements = jokesData.map(joke => {
        return (
            <Joke
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })

    return (
        <div>
            <TravelNavbar/>
            <section>
                {/*{cards}*/}
            </section>
            <section>
                {jokeElements}
            </section>
        </div>
    )
}

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
            {/*<Navbar />*/}
            {/*<Hero />*/}
            {/*<Card />*/}

            {/*<div className="contacts">*/}
            {/*    <Contact*/}
            {/*        img={mrW}*/}
            {/*        name="Mr. Whiskerson"*/}
            {/*        phone="(212) 555-1234"*/}
            {/*        email="mr.whiskaz@catnap.meow"*/}
            {/*    />*/}
            {/*    <Contact*/}
            {/*        img={fluffykins}*/}
            {/*        name="Fluffykins"*/}
            {/*        phone="(212) 555-2345"*/}
            {/*        email="fluff@me.com"*/}
            {/*    />*/}
            {/*    <Contact*/}
            {/*        img={felix}*/}
            {/*        name="Felix"*/}
            {/*        phone="(212) 555-4567"*/}
            {/*        email="thecat@hotmail.com"*/}
            {/*    />*/}
            {/*    <Contact*/}
            {/*        img={pumpkin}*/}
            {/*        name="Pumpkin"*/}
            {/*        phone="(0800) CAT KING"*/}
            {/*        email="pumpkin@scrimba.com"*/}
            {/*    />*/}
            {/*</div>*/}

            <div className="jokes">
                <Joke
                    punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                    isPun={true}
                />
                <Joke
                    setup="I got my daughter a fridge for her birthday."
                    punchline="I can't wait to see her face light up when she opens it."
                    isPun={false}
                />
                <Joke
                    setup="How did the hacker escape the police?"
                    punchline="He just ransomware!"
                    isPun={true}
                />
                <Joke
                    setup="Why don't pirates travel on mountain roads?"
                    punchline="Scurvy."
                    isPun={true}
                />
                <Joke
                    setup="Why do bees stay in the hive in the winter?"
                    punchline="Swarm."
                    isPun={true}
                />
                <Joke
                    setup="What's the best thing about Switzerland?"
                    punchline="I don't know, but the flag is a big plus!"
                    isPun={false}
                />
            </div>
        </div>
    )
}

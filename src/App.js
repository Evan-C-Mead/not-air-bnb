import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './css/App.css';
import Card from "./components/Card";
import Contact from "./components/Contact";
import mrW from '../src/images/mr-whiskerson.png'
import fluffykins from '../src/images/fluffykins.png'
import felix from '../src/images/felix.png'
import pumpkin from '../src/images/pumpkin.png'

function App() {
    return (
        // <div>
        //     <Navbar/>
        //     <Hero/>
        //     <Card/>
        // </div>

        <div className="contacts">
            <Contact
                img={mrW}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={fluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img={felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                img={pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './css/App.css';
import Card from "./components/Card";
import data from "./data/data";

export default function App() {
    const dataElements = data.map(card => {
        return <Card title={card.title} location={card.location} rating={card.stats.rating} price={card.price} reviewCount={card.stats.reviewCount} coverImg={card.coverImg}/>
    })

    return (
        <div className="main">
            {/*<Navbar/>*/}
            {/*<Hero/>*/}
            {/*<Card*/}
            {/*    img=""*/}
            {/*    rating={5.0}*/}
            {/*    reviewCount={6}*/}
            {/*    country="USA"*/}
            {/*    title="Life Lessons with Katie Zaferes"*/}
            {/*    price={136}*/}
            {/*/>*/}

            <div className="main">
                {dataElements}
            </div>
        </div>
    )
}

import React from "react";

export default function Colors() {
    const colors = [
        <span className="redText">
            <h3>Red</h3>
        </span>,
        <span className="orangeText">
            <h3>Orange</h3>
        </span>,
        <span className="yellowText">
            <h3>Yellow</h3>
        </span>,
        <span className="greenText">
            <h3>Green</h3>
        </span>,
        <span className="blueText">
            <h3>Blue</h3>
        </span>,
        <span className="indigoText">
            <h3>Indigo</h3>
        </span>,
        <span className="violetText">
            <h3>Violet</h3>
        </span>
    ]

    return (
        <div className="colorsList">
            {colors}
        </div>
    )
}

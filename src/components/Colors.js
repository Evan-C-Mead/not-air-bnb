import React from "react";

export default function Colors() {
    const colors = [
        <span className="redHeader">
            <h3>Red</h3>
        </span>,
        <span className="orangeHeader">
            <h3>Orange</h3>
        </span>,
        <span className="yellowHeader">
            <h3>Yellow</h3>
        </span>,
        <span className="greenHeader">
            <h3>Green</h3>
        </span>,
        <span className="blueHeader">
            <h3>Blue</h3>
        </span>,
        <span className="indigoHeader">
            <h3>Indigo</h3>
        </span>,
        <span className="violetHeader">
            <h3>Violet</h3>
        </span>
    ]

    return (
        <div className="colorsList">
            {colors}
        </div>
    )
}

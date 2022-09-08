import React from "react";
import cardImage from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card() {
    return (
        <div className="card">
            <img src={cardImage} alt="cardIMG" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span>5.0</span>
                <span className="grayText">(6) • </span>
                <span className="grayText">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="boldText">From $136 / person</span></p>
        </div>
    )
}

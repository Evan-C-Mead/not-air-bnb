import React from "react";
import katie from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card(props) {
    return (
        <div className="card">
            <img src={katie} className="card--image"  alt="card-img"/>
            <div className="card--stats">
                <img src={star} className="card--star"  alt="star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}

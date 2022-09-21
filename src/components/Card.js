import React from "react";
import star from '../images/star.png';

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.card.coverImg}`} className="card--image"  alt="card-img"/>
            <hr/>
            <div className="card--stats">
                <img src={star} className="card--star"  alt="star"/>
                <span>{props.card.stats.rating} (<span className="grayText">{props.card.stats.reviewCount} reviews</span>) • {props.card.location}</span>
            </div>
            <p className="card--title">{props.card.title}</p>
            <p className="card--price"><span className="bold">From ${props.card.price}</span>/person</p>
        </div>
    )
}

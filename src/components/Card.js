import React from "react";
import star from '../images/star.png';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.coverImg} className="card--image"  alt="card-img"/>
            <hr/>
            <div className="card--stats">
                <img src={star} className="card--star"  alt="star"/>
                <span>{props.rating} (<span className="grayText">{props.reviewCount} reviews</span>) • {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}

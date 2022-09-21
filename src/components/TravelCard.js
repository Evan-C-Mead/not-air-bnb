import React from "react";

export default function TravelCard(props) {
    return (
        <div>
            <div className="travelCard">
                <img src={`${props.card.imageUrl}`} className="travelCard--image"  alt="card-img"/>
                <div className="travelCard--stats">
                    <span><p>{props.card.location}</p></span>
                    <span className="travelTitle-map"><h3>{props.card.title}</h3><p className="mapsLink"><a href={props.card.googleMapsUrl}>View on Google Maps</a></p></span>
                    <span className="travelTimeframe"><h4>{props.card.startDate} - {props.card.endDate}</h4></span>
                    <p>{props.card.description}</p>
                </div>
            </div>
            <hr className="travelCard--hr"/>
        </div>

    )
}
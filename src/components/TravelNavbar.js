import React from "react";
import earthLogo from '../images/earth-logo.png';

export default function TravelNavbar() {
    return (
        <nav className="travelNav">
            <div className="travelHeader">
                <img src={`${earthLogo}`} alt="logo" className="travelNav--logo"/>
                <h3 className="travelNav-header--color">my travel journal.</h3>
            </div>
        </nav>
    )
}

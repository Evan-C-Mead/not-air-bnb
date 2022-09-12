import React from "react"

export default function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.setup ? "block" : "none"}}>{props.setup}</h3>
            <p>{props.punchline}</p>
            <p>Is this a pun? - {props.isPun.toString()}</p>
            <hr />
        </div>
    )
}

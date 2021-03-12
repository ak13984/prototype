import React from 'react'

export default function Hero(props) {
    return (

        <div className="column">
            <div className="cards">
                <h1 className="top"><b>{props.heading}</b></h1>
                <h4 className="mid">{props.middle}</h4>
                <p className="down">{props.footer}</p>
            </div>
        </div>

    )
}


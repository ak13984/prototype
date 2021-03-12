import React from 'react'
import mask from '../images/mask.png'
import virus from '../images/virus.png'
export default function Crises() {
    return (
        <div>
              <div className="crises">
            <hr style={{margin:'0 auto',
                        marginBottom:'20px' }} className="new3"></hr>
            <h1 className="yes">Yes! It's a crises.<br></br> We are here with you!</h1>
        </div>
        <img className="mask" src={mask}></img>
        <img className="virus1" src={virus}></img>
        <img className="virus2" src={virus}></img>
        <img className="virus3" src={virus}></img>
        </div>
    )
}

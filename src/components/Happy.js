import React from 'react'
import comp from '../images/comp.png'
import happy from '../images/happy.png'

export default function Happy() {
    return (
        <div className="m-happy">
        <div className="hap">
            <p style={{}}><b>THEY STILL PAT OUR BACKS!</b></p>
            <h1>OUR HAPPY CLIENTS, LISTED HERE ARE FEW!</h1>
            </div>
            <div className="happy">
                <img className="joy" style={{}} src={happy}></img>
                <img className="all-brands" style={{}} src={comp}></img>
            </div>
        </div>
    )
}

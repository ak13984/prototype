import React from 'react'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import p7 from '../images/p7.png'
export default function About() {
    return (
        <div className="about">
            <div>
                <hr style={{margin:'0 auto'
                        }} className="new3"></hr>
                <h1 style={{}}>Nurturing the power of the youth !</h1>
            </div>
            <img className="aboutimg" id="im1" style={{}} src={p1}></img>
            <img className="aboutimg" id="im2" style={{}} src={p2}></img>
            <img className="aboutimg" id="im3" style={{}}  src={p3}></img>
            <img className="aboutimg" id="im4" style={{}}  src={p4}></img>
            <img className="aboutimg" id="im5" style={{}}  src={p5}></img>
            <img className="aboutimg" id="im6" style={{}}  src={p6}></img>
            <img className="aboutimg" id="im7" style={{}} src={p7}></img>
        </div>
    )
}

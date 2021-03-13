import React from 'react'
import logo from '../images/Rocket.png'
import th from '../images/Thread.png'
import bl from '../images/blob.png'
import im from '../images/im.png'
// import bl from '../images/blob.png'
export default function Sol() {
    return (
        <div>
            <div className="sol-div">

                {/* <div>
            <img className="blob" src={bl} ></img> 
            <img src={im}></img>
            </div>
            <div className="getintouch">
            <h1 className="getinh">Customised Solution</h1>
            <p className="getinp">Allow us to set up customised solutions with the pool of youthancers
                that can be traines as per your requirement</p>
                <button className="getinb">Let's Get in Touch</button>
            </div>
           
            */}
                <div>
                    <img className="blob" src={bl}></img>
                    <img className="im" src={im}></img>
                </div>
                <div className="getintouch">
                    <h1 className="getinh">Customised Solution</h1>
                    <p className="getinp">Our talented workforce (The Youthance Army, also known as Youthancers!!) helps you to set up unique tailor made solutions for all your business needs. </p>
                    <button type="submit" className="getinb">Let's Get in Touch</button>
                </div>
                <div className="faded">
                    <h3>Small opportunities are often the beginning of great achievements.</h3> 
                    <h3>Connect. Collaborate. Grow
                    </h3>
                </div>


            </div>
            <img className="rocket" src={logo}></img>
            <img className="thread" src={th}></img>
        </div>

    )
}
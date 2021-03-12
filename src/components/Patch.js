import React, { Component } from 'react'
import hand from '../images/Hnad.png';

// import logo from '../images/Patch-image.svg'
export default class Patch extends Component {
    render() {
        return (
            <div className="patch1">

                <form className="p-form">
                    <br></br>
                    <p>Take your step now to scale with youthance!</p>
                    <h1>Let's get your job done<br></br> <span>on-demand!</span> </h1>

                    <div className="getstartedButton">
                        <button className="youthButton_or" style={{ background: 'white', color: '#6651B1' }} > Get Started
                        {/* <hr className="youth_button_line_or" style={{ borderColor: '#6651B1' }}></hr> */}
                        </button>
                    </div>

                    {/* <p className="p-area">take your step now to scale with youthance!</p>
           <h1 className="h-area">Let's get your job done </h1>
           <h1 className="h-area-d">on-demand!</h1>
           <img src= {logo} alt="patch-image"></img> */}

                    {/* <input className="patch-input" type="text" placeholder="Your email"></input>
                    <button className="patch-button" >Newsletter</button> */}

                </form>
                <div className="handd">
                    <img height="200px" src={hand} alt="handd"></img>
                </div>
            </div>
        )
    }
}

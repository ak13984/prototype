import React from 'react'
// import ap from '../images/app.png'
import ap from '../images/hands1.png'
import gp from '../images/gp.png'
import br from '../images/landing_brands.png'

export default function AboutIntro() {
    return (
        <div className="aboutin">
            <div className="work">

                <div className="divContainer">
                    <div className="divLeft">

                        <h1>Work, Earn & <br></br>Learn </h1>

                        <p className="anytime" style={{ marginTop: '20px !important', marginBottom: '10% !important' }}>
                            India’s most gigger-friendly platform!</p>

                        <br></br>
                        <hr className="new5" style={{ width: '15% !important' }}></hr>

                        <p style={{ color: '#29364A', width: '60%' }}>
                            Your trustworthy platform where you
                            work as you like, earn for your hard work
                            and learn with exposure to upskill.
                            Call yourself a ‘Youthancer’.
                        </p>

                        <p style={{
                            color: '#FD581F',
                            marginTop: '50px'
                        }}>Coming soon</p>

                        <img alt="img" src={gp}></img>

                    </div>
                    <div className="divRight">
                        <div>
                            <img className="ap" src={ap}></img>
                        </div>
                    </div>
                </div>
                <div className="various">
                    <p>Brands you all have helped us scale, there are many more!</p>
                    <img alt="brandss" src={br}></img>
                </div>

            </div>

        </div>
    )
}

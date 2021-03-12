import React from 'react'
import tr from '../images/training.png'
import sc from '../images/screening.png'
import work from '../images/work.png'
import di from '../images/Discover.png'
export default function Working() {
    return (
        <div>
            <br></br>
            <div className="working-div">
                <hr style={{ border: '3px solid #6543B1', width: '8%', marginLeft: '0' }}></hr>
                <h2 style={{ fontWeight: '500', color: "#042657", textTransform: 'uppercase' }}>How it works?</h2>
            </div>
            <div className="working">

                <div className="workit1">
                    <img className="worimg" src={di}></img>
                    <br></br>
                    <br></br>
                    <div className="workitsub">
                        <h2 style={{}}>Explore</h2>
                        <p>Pick from multiple job roles that interest you and widen your exposure across industries.

                </p>
                    </div>
                </div>
                <div className="workit2">
                    <div className="workitsub">
                        <h2 style={{}}>Screen & Train</h2>
                        <p>Go through a screening process, get shortlisted and trained before you hit the ground. </p>
                    </div>
                    <img className="worimg" src={sc}></img>

                </div>
                <div className="workit3">

                    <img className="worimg" src={tr}></img>
                    <div className="workitsub">
                        <h2 style={{}}>Work </h2>
                        <p>Get to work, clock-in before you start, give your 100% and get paid for it.
                </p>
                    </div>
                </div>
                <div className="workit4">
                    <div className="workitsub">
                        <h2 style={{}}>Earn & Learn</h2>
                        <p>Work to perfection and get  paid  post the completion of your job. No Drama, No Middlemen!
                </p>
                    </div>
                    <img className="worimg" src={work}></img>
                </div>
            </div>
        </div>
    )
}

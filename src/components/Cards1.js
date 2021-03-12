import React from 'react'
import Hero from './Hero'
import hn from '../images/hn.png'
export default function Cards1() {
    return (
        <div>
            <hr className="cards1hr"></hr>
            <div className="card-place">
                <h1 className="card-head">Why Youthance?</h1>
                <br></br>
                <Hero heading="90%"
                    middle="Fill Rate"
                    footer="Get pre-screened, trained & ready to deploy talent from ‘Youthance Army’"
                />
                <Hero heading="12 Hrs"
                    middle="Average time to recruit"
                    footer="Cut lead time from weeks to one single day - Real time, On-demand."
                />
                <Hero heading="100%"
                    middle="We got your back"
                    footer="From immediate replacement to regular feedbacks & trainings, we will be there for you.
             "
                />
            </div>
            <img src={hn} className="hn"></img>
        </div>
    )
}

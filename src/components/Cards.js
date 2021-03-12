import React, { Component } from 'react'
import Hero from './Hero'
export default class Cards extends Component {
    render() {
        return (
            <div className="card-place">
                <h1 className="card-head"><b>Why Youthance?</b></h1>
               <Hero heading="90%"
                      middle="Fill Rate"
                      footer="Our pre-screened pool of youthancers is 
                      growing continously."
                      /> 
               <Hero heading="12 Hrs"
                     middle="Average time to start"
                     footer="Cut lead time from staffing from several
                     weeks to a day."
                     />
               <Hero heading="80.6%"
                     middle="Customer satisfaction"
                     footer="We believe in being output focused than 
                     being resource focused."
               />
            </div>
        )
    }
}

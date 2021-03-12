import React from 'react'
import kudi from '../images/kudi.png'
import beardo from '../images/beardo.png'
import group from '../images/group.png'
import masking from '../images/masking.png'
import glove from '../images/glove.png'
import cashless from '../images/cashless.png'
import temp from '../images/temp.png'
import wash from '../images/wash.png'
import dist from '../images/dist.png'

export default function Features() {
    return (
        <div>
        <div className="features">
           <div className="feat1">
               <p >We at youthance have always supported those in need.
                   Even during this crisis, we continued to thrive and did
                   our bit by keeping the bread and butter for many intact.
                   <br></br>
                   Our Work cycle takes care of all the safety prorocols 
                       provided by WHO and thus we are ready to help you grow with
                       our campaign - <span style={{color:'orangered'}}> Youthance Cares.</span> 
           <br></br>
           <br></br>    
Youthance Cares is an initiative by us , under which we take responsible measures in order to 
    keep our clients and gig workers safe from the threat of Covid-19
</p>
<img  src={kudi}></img>
               </div> 

               <div className="yfg">
               <h2>Youthance for gig workers</h2>
               <hr></hr>
               </div>
               <div  className="feat2">
                   
                   <img  src={beardo}></img>
                   
                   <p>
                      {
                           <ul >
                               <li>Thermal Screening</li>
                               <li>Masks & Sanitizers</li>
                               <li>Safety Kit</li>
                               <li>Digital Payments</li>
                               <li>Remote Work</li>
                               <li>Online Skills</li>
                           </ul>
                       }
                   </p>

               </div>
               <div className="yfb">
               <h2>Youthance for Businesses</h2>
               <hr ></hr>
               </div>
               <div className="feat3">
                   <p >{<ul>
                       <li>Remote & Temporary Workers</li>
                       <li>Transformed fixed costs
                           into variable costs
                       </li>
                       <li>Digital Payments</li>
                       <li>Audio/Video Interviews</li>
                   </ul>
                       }</p>
                       <img src={group}></img>
               </div>
               

        </div>
        <div className="preacutions">
        <img src={masking}></img>
        <img src={temp}></img>
        <img src={wash}></img>
        <img src={dist}></img>
        <img src={glove}></img>
        <img src={cashless}></img>
    </div>
    <div className="times">
        <p><b>The times may be tough, but we all are in 
            this together. Don't you worry, Youthance
            has got your back!</b>
        </p>
    </div>
    </div>
    )
}

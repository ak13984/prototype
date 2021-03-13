import React, {useState} from 'react'
import logo from '../images/Watch.png'
import brands from '../images/landing_brands.png'
import {Redirect} from "react-router-dom"
import "./Intro.css"
import Banner from "./Banner"

export default function Intro() {
   const [state,setState]=useState(false);


if(state){
    return <Redirect push to="/formpage-a"/>
}

    return (
        <>
        <div className="Intro-div">
<section>
            <h1 className="intro">Hire On-demand
Quality Workforce</h1>
<p className="anytime" style={{}}>Anytime & Anywhere You Want!</p>
            <hr class="new5"></hr>
        <p className="introp">Work with pre-screened and trained talent
on our scalable, flexible and cost-effective
platform.</p>

<button type="submit" className="getstarted" onClick={()=>setState(true)} >Get Started</button>
</section>
<img className="watch" src={logo} alt="stories"></img>
        </div>
<Banner/>
</>

    )
}
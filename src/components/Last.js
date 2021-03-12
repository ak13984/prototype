import React, { useState } from 'react'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import y from '../images/y-foot.png'
// import gp from '../images/gp.png'
import gp from '../images/playstore2.jpeg'
export default function Last() {

    return (
        <div className="Last">
            <div className="last1">
                <img src={y} style={{}}></img>
                <p className="primaryCol">
                    <small>Youthance is one portal that allows people to deploy their best employment skills to earn some extra money. The platform, in its essence, aims to cater to the market demand by redefining the part-time work culture in India. Millennials, who derive their sense and identity of self from their work, are our focal point.
                </small>
                </p>
            </div>
            <div className="last2">
                <h2>Solutions</h2>
                <p className="p-link"> <a href="#find-work">Find Work</a></p>
                <p className="p-link"> <a href="#businesses">Businesses</a></p>
                <Link style={{ textDecoration: 'none' }} to="covid">  <p className="p-link"> <a href="#covid">Covid-19 Support</a></p></Link>
                <p className="p-link"> <a href="#yskills">Y4Skills</a>
                    <span>
                        <button className="comingSoon"> Coming Soon</button>
                    </span>
                </p>
            </div>
            <div className="last3">
                <h2>Company</h2>
                <Link style={{ textDecoration: 'none' }} to="about">        <p className="p-link"> <a href="#About-Us">About Us</a></p> </Link>
                <p className="p-link"> <a href="#Legal">Legal</a></p>
                <p className="p-link">
                    {/* <a href="#contact-us">Contact Us</a> */}
                    <Link style={{ textDecoration: 'none' }} to="contact-us" >Contact Us</Link>
                </p>
                <p className="p-link">
                    <Link style={{ textDecoration: 'none' }} to="faq" >FAQs</Link>
                </p>
                {/* <p className="p-link"> <a href="#faqs">FAQs</a></p> */}
            </div>

            <div className="last4">
                <h2 className="icon-head">We are social</h2>
                <br></br>
                <h1 style={{ marginTop: "-7%" }} className="icons"> <FaInstagramSquare className="fainsta" style={{ color: "#D2D4D6", fontSize: "110%" }} />&nbsp;&nbsp;
                                           <FaFacebookSquare className="fainsta" style={{ color: "#D2D4D6", fontSize: "110%" }} /> &nbsp;
                                           <FaLinkedin className="fainsta" style={{ color: "#D2D4D6", fontSize: "110%" }} /> &nbsp;
                                           <FaTwitter className="fainsta" style={{ color: "#D2D4D6", fontSize: "110%" }} />&nbsp;</h1>

                <h2>Download</h2>
                {/* <img style={{ marginTop: "-7%", width: "50%" }} src={gp}></img> */}
                <img style={{ marginTop: '-0px' }} alt="playstore" height="50px" width="180px" src={gp}></img>
                <br></br>
                <br></br>

            </div>
            {/* <div className="copy">
                    <p>© Copyright 2020 Youthancer Online Solutions Private Limited</p>
                </div>
             */}

        </div>
    )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../images/logo.png';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    // toggler = () =>{
    //   toggle ? settoggle(false) :settoggle(true)
    // }
    return (
        <div className="fixer">
            <nav className="navbar">
                <div className="youth">
                    <Link to="./">
                        <img height="40%" width="40%" alt="logo" src={logo}></img>
                    </Link>
                </div>
                <ul className="nav-links"
                    style={{ transform: open ? "translateX(0px)" : ""}}>
                    {/* <li className="find">Find Workers</li> */}
                    <Link className="navLink"  to="./" onClick={()=>setOpen(false)}> <li>Find Workers</li></Link>
                    <Link className="navLink"  to="find-work" onClick={()=>setOpen(false)}> <li>Find Work</li></Link>
                    <Link className="navLink"  to="about" onClick={()=>setOpen(false)}> <li>About Us</li></Link>
                  <button className="postap">  <Link className="navLink" style={{ textDecoration: 'none', color: 'white', fontSize: '15px'  }} to="post a gig" onClick={()=>setOpen(false)} > <li>Post A Project</li></Link></button>
                    {/* <li><a>Y4Skills</a></li> */}
                    {/* <li className="post"><a>Post a gig<span className="post-line"></span></a></li> */}
                </ul>
                <h1 onClick={() => setOpen(!open)} className="ham"><GiHamburgerMenu /></h1>
            </nav>
        </div>
    )
}


import React from 'react'
import cl from '../images/cl.png'
import cp from '../images/cp.png'
import ub from '../images/ub.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import 
//  import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

export default function Slider() {
    return (
        // </div>
        <div className="slideit">
            <AliceCarousel stylw={{ marginBottom: '-65px !important' }} className="slide-z" autoPlay autoPlayInterval="5000">

                <div className="sl">

                    <img src={cp} className="sliderimg" alt></img>
                    <section className="align">
                        <p className='getinpp'>"Youthance has been key contributor in supporting us with our on-demand workforce requirements and taking our brand to the target customers through multiple on-ground activations. The team here has been really enthusiastic and organised in solving the pain point of shortlisting and selection of part-time resources. Ensuring seamless real time reporting and regular flow of communication to us throughout a project is really an added advantage. Wish to work in future on more projects."</p>
                        <h1>Karan Mishra</h1>
                        <p className="getinp">Head Counsellor at Clat Possible</p>
                    </section>
                </div>
                <div className="sl"><img src={ub} className="sliderimg" alt></img>
                    <section className="align" >
                        <p className="getinpp">"It was great working with your team for launching our new markets in North India. Seamlessly handling our on ground activations with support in core areas like providing quality part-time workforce, ensuring smooth execution of activations, timely reporting on real time basis and making sure the work is done with complete transparency. Looking forward to work with you guys further."</p>
                        <h1>Anisha Sharma</h1>
                        <p className="getinp">- Marketing Head at Uber Eats India</p>
                    </section>
                </div>
                <div>
                    <div className="sl" >
                        <img src={cl} className="sliderimg" alt></img>
                        <section className="align">
                            <p className="getinpp">"Its has been few years that we are associated with Youthance, towards
                            the hiring of activity Guys, Promoters
 and other marketing activity. We hereby appreciate the way of your working with fully professionalism , punctuality, dedication and proper monitoring. Its a pleasure working with your team. Looking for a long term relationship with Youthance."</p>
                            <h1>Deepak Bhardwaj </h1>
                            <p className="getinp"> -Administrative Head at Career Launcher India</p>
                        </section>
                    </div>
                </div>

            </AliceCarousel>
        </div>
    )
}
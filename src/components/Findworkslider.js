import React from 'react'
import mr from '../images/Man-Rocket.png'
import ea from '../images/earn.png'
import le from '../images/learn.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
export default function Findworkslider() {
    return (
        <div className="Findworkslider">
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <div className="ro">
                    <img alt="sky" src={mr}></img>
                    <div className="mr">
                        <p>WE’VE GOT YOUR BACK</p>
                        <h3 className="head">Sky’s the limit</h3>
                        <br></br>
                        <article>Work with brands that excites you,
gain practical experience by working on multiple gigs that suits you or add value to your career and personal growth.</article>
                    </div>
                </div>
                <div className="ro">
                    <img alt="promise" src={ea}></img>
                    <div className="mr">
                        <p>WE’VE GOT YOUR BACK</p>
                        <h3 className="head">Youthance Promise - Bharosa hai!</h3>
                        <br></br>
                        <article>
                            Fair & transparent pay-outs, quick payments within the completion of project, no middlemen & secured payments.
                        </article>
                    </div>
                </div>
                <div className="ro">
                    <img alt="back" src={le}></img>
                    <div className="mr">
                        <p>WE’VE GOT YOUR BACK</p>
                        <h3 className="head">Learn, Unlearn & Relearn With Youthance</h3>
                        <br></br>
                        <article>
                            Interactive training/workshops for personal grooming and upskilling & travel opportunities through our various outstation projects.

                        </article>
                    </div>
                </div>

            </AliceCarousel>
        </div>
    )
}

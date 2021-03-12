import React from 'react'
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Gigslider() {
    return (
        <div>
            <div className="slideit">
            <AliceCarousel autoPlay autoPlayInterval="3000">
               
                <div className="sl">

                    <img style={{borderRadius:'50%'}} src={one}  className="sliderimg" alt></img>
                    <section className="align">
                    
                    {/* <p>"Youthance has been key contributor in supporting us with our on-demand workforce requirements and taking our brand to the target customers through multiple on-ground activations. The team here has been really enthusiastic and organised in solving the pain point of shortlisting and selection of part-time resources. Ensuring seamless real time reporting and regular flow of communication to us throughout a project is really an added advantage. Wish to work in future on more projects."</p> */}
                    <p>It instantly made me smile when I got paid for
my hard work. Youtance gave me the opportunity
to showcase my talent. It was a great learning
experience. Youthance value the hard work and
provides better learning and paid opportunities.
I wish to work with Youthance again.
My heartiest gratitude.
Swadha Mishra, Youthancer</p>
                    <h1>Swadha Mishra</h1>
                    <p style={{marginTop:'-20px'}}>Youthancer</p>
                    </section>
                    </div>
                <div className="sl"
                ><img style={{borderRadius:'50%'}} src={two} className="sliderimg" alt></img>
                <section className="align" >
                    {/* <p>"It was great working with your team for launching our new markets in North India. Seamlessly handling our on ground activations with support in core areas like providing quality part-time workforce, ensuring smooth execution of activations, timely reporting on real time basis and making sure the work is done with complete transparency. Looking forward to work with you guys further."</p> */}
                    <p>I am a student of biotechnology at Amity
University and my work really involves a lot
of research and experience. Youthance
really helped me find the right opportunity,
not only did I earned but I learnt a lot and
I thank Youthance for this wonderful and
great experience.</p>
                    <h1>Erin Miller</h1>
                    <p style={{marginTop:'-20px'}}>Youthancer</p>
                    </section>
                </div>
                <div>
                    <div className="sl" >
                <img style={{borderRadius:'50%'}} src={three} className="sliderimg" alt></img>
                <section className="align">
                    {/* <p>"Its has been few years that we are associated with Youthance, towards
 the hiring of activity Guys, Promoters
 and other marketing activity. We hereby appreciate the way of your working with fully professionalism , punctuality, dedication and proper monitoring. Its a pleasure working with your team. Looking for a long term relationship with Youthance."</p> */}
                    <p>If I talk about the team youthance
they all are very good in nature and very helpful
people, really i appreciate as the whole team
always stand by youth. I am happy working
with Youthance.</p>
                    <h1>Shiv </h1>
                    <p style={{marginTop:'-20px'}}> Youthancer</p>
                    </section>
                </div>
                </div>
                
            </AliceCarousel>
        </div>
        </div>
    )
}

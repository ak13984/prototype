import React from 'react'
// import Heroi from './Heroi'
// import { AiOutlinePieChart } from 'react-icons/ai'
// import { AiFillTags } from 'react-icons/ai'
// import { BsGraphUp} from 'react-icons/bs'
// import { FaResearchgate } from 'react-icons/fa'
// import { MdPeopleOutline } from 'react-icons/md'
// import { HiSpeakerphone } from 'react-icons/hi'
import HoverImage from "react-hover-image";
import onee from '../images/onee.png'
import twoo from '../images/twoo.png'
import threee from '../images/threee.png'
import fourr from '../images/fourr.png'
import fivee from '../images/fivee.png'
import sixx from '../images/sixx.png'
import a from '../images/a.png'
import b from '../images/b.png'
import c from '../images/c.png'
import d from '../images/d.png'
import e from '../images/e.png'
import f from '../images/f.png'
import ra from '../images/ra.png'


export default function Buss() {
    return (
        <div className="bus-div">
            <>
                <hr class="new4"></hr>
                {/* <hr className="youth_button_line"></hr> */}

                <h2 className="bus">SCALE YOUR BUSINESS WITH YOUTHANCE</h2>
                <div className="card-holder">

                    {/* <img className="onee" src={onee}></img> */}


                    <HoverImage src={onee} hoverSrc={c} />
                    <HoverImage src={twoo} hoverSrc={b} />
                    <HoverImage src={threee} hoverSrc={a} />
                    <HoverImage src={fourr} hoverSrc={f} />
                    <HoverImage src={fivee} hoverSrc={e} />
                    <HoverImage src={sixx} hoverSrc={d} />



                    {/* <Heroi icon  = {<HiSpeakerphone style={{color: "rgb(204,204,0)"}}/>}
                   head="Marketing"
                   Descr="Leverage the network of our feet-on-street agents, micro macro influencers, content"
                   list="
                    Marketing : Merchant Onboarding | Feet On Street Activations | Influencer Marketing | Campus Marketing | Sample Marketing | Whatsapp Marketing | Instagram/Facebook Marketing
                    Operations : Retail Audits, Field Ops | Account Management | Data Entry | Event Management | Mystery Shopping | On-ground Execution Support
                    Product : Market Research | Data Collection | Digitisation | Geo Tagging
                    Sales : Tele-sales | Customer Support | Field Sales | Lead Generation
                    Research : Mystery Audit | In depth Interviews | Field Research | Online Survey
                    Recruiting : Candidate Sourcing | Screening Candidates | On boarding Candidates | Manage Funnel"
                   
                 
                   />
    

            <Heroi icon ={<AiFillTags style={{color: "green"}}/>}
                  head= "Product"
                  Descr="Empowering you all to work on your own terms, earn your hardwork and learn
                  to"

                />
            <Heroi icon ={<AiOutlinePieChart style={{color: "purple"}}/>}
                  head= "Sales"
                  Descr="Empowering you all to work on your own terms, earn your hardwork and learn to"/>
            <Heroi icon ={<BsGraphUp style={{color: "orange"}}/>}
                  head= "Operations "
                  Descr="Empowering you all to work on your own terms, earn for your hardwork and learn to upskill "/>
            <Heroi icon ={<FaResearchgate style={{color: "green"}}/>}
                  head= "Research"
                  Descr=" Empowering you all to work on your own terms, earn for your hardwork and learn to upskill "/>
                  
                  <Heroi icon ={<MdPeopleOutline style={{color: "blue"}}/>}
                  head  ={"Recruiting"}
                  Descr="Empowering you all to work on your own terms, earn for your hardwork and learn to upskill"/> */}


                </div>
            </>

        </div>
    )
}
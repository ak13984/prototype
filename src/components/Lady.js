import React from 'react'
import lady from '../images/lady.png'
import br from '../images/br.png'
export default function Lady() {
    return (
        <div>
        <div className="ladydiv">
            <img className="lady" src={lady}></img>
            <form className="ladyform">
             <h1>Hey Youthancer,<span><br></br></span>Welcome</h1>
            
             <p style={{color:'orangered', marginTop:'-10px',
                       marginBottom:'20px'}}><b>Fill this form below to get early app access.</b></p>
               <p class="input-names1">Name</p>
                
                <input className="fillings"
                 type="text"
                  placeholder="Enter your name">
                  </input>

                  <p></p>
                 <p className=" input-names1">Email</p>
                 <input className="fillings"
                 type="text" 
                 placeholder="Work Email"></input>


                  <p></p>
                  <p className= "input-names1">Phone Number</p>
                 <input className="fillings"
                 type="text" 
                 placeholder="Phone Number"></input>

                 <p className="input-names1">Location</p>
                 <input className="fillings"
                 type="text" 
                 placeholder="Where are you from"></input>
                 <br></br>
                 <button className="submiting" onClick="">Submit</button>   
            </form>
        </div>
        <div className="branding">
        <h2 style={{fontSize: '38px' ,
                color:'orangered',
                marginTop:'50px'}}>Brands you all helped scale, there are many more!</h2>
                <img className="br" src={br} ></img>
                </div>
        </div>
    )
}

import React from 'react'
import mile from '../images/Milestone.png'
export default function Formbuttons() {
    return (
        <div >
            <img className="milestone" src={mile}></img>
            <div className="pos">
                <h1>Finish Your requirement</h1>
                <p style={{color:'grey'}}>select the job role/roles</p>
              <div className="boxes">  
              <ul className="ks-cboxtags">
                <li><input type="checkbox" id="one" value="Marketing"/><label for="one">Marketing</label></li>
                <li><input type="checkbox" id="two" value="Operations"/><label for="two">Operations</label></li>
                <li><input type="checkbox" id="three" value="Products"/><label for="three">Products</label></li>
                <br></br>
                <li><input type="checkbox" id="four" value="Research"/><label for="four">Research</label></li>
                <li><input type="checkbox" id="five" value="Sales"/><label for="five">Sales</label></li>
                <li><input type="checkbox" id="six" value="Recruiting"/><label for="six">Recruiting</label></li>
              </ul>
              </div>

                <p className="t-area-p" style={{color:'grey'}}>Additional Information</p>
                <textarea className="t-area" type="text" placeholder="Describe the responsibilities of the job required Work experience Skills, or education"></textarea>
                <br></br>
                <button className="t-area-button">GET A QUOTE </button>
                </div>
    </div>
    )
}

import React from 'react'
import hn from '../images/hn.png'
export default function NewCards() {
    return (
        <div>

            <div className="new-card-h">
                {/* <hr className="new3"></hr> */}
                <hr style={{ border: '3px solid #6543B1', width: '8%', marginLeft: '0' }}></hr>

                <h2  >Why Youthance ?</h2>
            </div>
            <div className="newcard">

                <div className="newcards">
                    <h2 style={{}}>Work,Earn & Learn</h2>
                    <p>Work opportunities across varied industries make it easy to try & learn new things and get paid.
                </p>
                </div>
                <div className="newcards">
                    <h2 style={{}}>Flexible Shifts</h2>
                    <p>You’re in control of when and where you want to work. Choose daily or hourly jobs on your own terms with secured payouts.
                </p>
                </div>
                <div className="newcards">
                    <h2 style={{}}>Career Building </h2>
                    <p>You don’t have to have a resume to join Youthance, but every job is an opportunity to create one.
                </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <img src={hn} className="hn"></img>
        </div>
    )
}

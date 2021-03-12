import React from 'react'
import logo from '../images/work-man.png'
export default function How() {
    return (
        <div className="how-div">
            <hr class="new4h"></hr>
            <h1 className="how">How it works ?</h1>

            <img className="how-image" src={logo} />

            <ul className="how-list">
                <li className="howz"><h1 className="how-h">Post New Project</h1></li>
                <p className="how-p">Within no time let us know you requirement and
                we will get back
         </p>
                <li className="howz" ><h1 className="how-h">Match & Recruit</h1></li>
                <p className="how-p">Review the shortlisted candidates or
                let us do it for you and recruit
         </p>
                <li className="howz"><h1 className="how-h">Keep A Track</h1> </li>
                <p className="how-p">Now you can keep a track of workers
                assigned to your tasks
         </p>
                <li className="howz"><h1 className="how-h">Achieve Output</h1></li>
                <p className="how-p">Achieve your business goals via Youthance's
                distributed workforce
         </p>


            </ul>
        </div>

    )
}

import React from 'react'

import m from '../images/m.png'
import p from '../images/p.png'
import s from '../images/s.png'
import o from '../images/o.png'
import r from '../images/r.png'
import re from '../images/re.png'
export default function NewBuss() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className="newbussa">
                <hr className="new4"></hr>
                <h2 style={{}}>Try multiple gigs <br></br> and industries</h2>
            </div>
            <div className="newbuss">
                <img src={m}></img>
                <img src={p}></img>
                <img src={s}></img>
                <img src={o}></img>
                <img src={r}></img>
                <img src={re}></img>
            </div>
        </div>
    )
}

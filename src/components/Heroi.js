import React from 'react'

export default function Heroi(props) {

    return (
     
        <div className="card" data-hover={props.list}>
                                           
        
      <div className="topings">{props.icon}</div> 
 
    <h2 className="headings">{props.head}</h2> 
    <p className="footings">{props.Descr}</p> 

    <br></br>
    </div>
    )
}


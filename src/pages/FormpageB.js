import React, { Component } from 'react'
import Formbuttons from '../components/Formbuttons'
import Slider from '../components/Slider'
import Cards1 from '../components/Cards1'
export default class FormpageB extends Component {
    render() {
        return (
            <div>
              <Formbuttons/>  
              <br></br><br></br><br></br><br></br>
              
              <Slider/>
              <br></br><br></br><br></br><br></br>
              <Cards1/>
           
            </div>
            
        )
    }
}
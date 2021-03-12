import React, { Component } from 'react'
import Intro from '../components/Intro'
import Buss from '../components/Buss'
import Sol from '../components/Sol'
import How from '../components/How'
import Slider from '../components/Slider'
import Cards1 from '../components/Cards1'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <Buss/>
                <Sol/>
                {/* <br></br> */}
                <How/>
                <Slider/>
                <Cards1/>
              
            </div>
        )
    }
}

import React, { Component } from 'react'
import AboutIntro from '../components/AboutIntro'
import NewBuss from '../components/NewBuss'
import Findworkslider from '../components/Findworkslider'
import Working from '../components/Working'
import NewCards from '../components/NewCards'
import Gigslider from '../components/Gigslider'
import Various from '../components/Various'

export default class Findwork extends Component {
    render() {
        return (
            <div>
                <AboutIntro />
                <Various />
                <Findworkslider />

                <NewBuss />

                <Working />
                <Gigslider />
                <NewCards />

            </div>
        )
    }
}

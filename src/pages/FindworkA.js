import React from 'react'
import Lady from '../components/Lady'
import Findworkslider from '../components/Findworkslider'
import NewBuss from '../components/NewBuss'
import Working from '../components/Working'
import NewCards from '../components/NewCards'
import Gigslider from '../components/Gigslider'
import Last from '../components/Last'
import Patch from '../components/Patch'
export default function FindworkA() {
    return (
        <div>
            <Lady/>
            <Findworkslider/>
            <NewBuss/>
            <Working/>
                <Gigslider/>
                <NewCards/>
                <Patch/>
      <Last/>
        </div>
    )
}

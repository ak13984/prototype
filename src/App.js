import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './pages/Homepage'
import FormpageA from './pages/FormpageA'
import FormpageB from './pages/FormpageB'
import Findwork from './pages/Findwork'
import Covid from './pages/Covid'
import Aboutus from './pages/Aboutus'
import FindworkA from './pages/FindworkA'
import { Route, Switch } from 'react-router-dom'
import Last from './components/Last'
import Patch from './components/Patch'
import ContactUs from './pages/ContactUs'
import Faqs from './pages/Faq'

export default function App() {
    return (
        <div>
            <Navbar />
            <Switch >
                <Route exact path="/formpage-a" component={FormpageA} />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/formpage-b" component={FormpageB} />
                <Route exact path="/find-work" component={Findwork} />
                <Route exact path="/covid" component={Covid} />
                <Route exact path="/about" component={Aboutus} />
                <Route exact path="/find-work-A" component={FindworkA} />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route exact path="/faq" component={Faqs} />
            </Switch>
            <Patch />
            <Last />

        </div>
    )
}

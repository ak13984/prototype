import React, { useState } from 'react'
import './styles.css';

const YouthanceForm = (props) => {
    console.log("props", props);

    return (
        <>
            <form name="support-form">
                <div style={{ display: 'flex' }}>
                    <div className="input-container half-width">
                        <label htmlFor="name">Your Name</label>
                        <p style={{ paddingRight: '20px' }}><input placeholder="Your Name" type="text" name="name"></input></p>
                    </div>
                    <div className="input-container half-width">
                        <label htmlFor="contact">Contact Number</label>
                        <p><input placeholder="Contact Number" type="number" name="contact"></input></p>
                    </div>
                </div>

                <br></br>

                <div>
                    <div className="input-container">
                        <label htmlFor="email">Your Email</label>
                        <p><input className="full-width" placeholder="example@gmail.com" type="text" name="email"></input></p>
                    </div>
                </div>

                <br></br>

                <div>
                    <div className="input-container">
                        <label htmlFor="message">Message</label>
                        <p><textarea className="full-width" rows="5" placeholder="Your message here" type="text" name="message"></textarea></p>
                    </div>
                </div>

                <br>
                </br>
                <div>
                    <button type="button" className="youthButton" onClick={props.handleChange}>
                        Get In Touch
                        <hr className="youth_button_line"></hr>
                    </button>
                </div>


            </form>
        </>
    )
}

function ContactUs() {
    const [formToDisplay, setFormToDisplay] = useState('youthance');
    const { formData, setFormData } = useState({
        "name": '',
        "email": '',
        'contact': '',
        'message': ''
    })

    const handleChange = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
        console.log("changes", formData)
    }
    console.log("-- Form Selected --> ", formToDisplay)
    return (
        <div className="wrapper">

            {/* tabs */}
            <div className="tab-container">
                <div className="tab-buttons-container">
                    <div className="tab-buttons-items">
                        <button className={formToDisplay === 'youthance' ? 'tab-buttons-selected' : 'tab-buttons'} type="button" onClick={() => setFormToDisplay('youthance')}> Youthance Support</button>
                        <button className={formToDisplay === 'business' ? 'tab-buttons-selected' : 'tab-buttons'} type="button" onClick={() => setFormToDisplay('business')}> For Businesses</button>
                        <button className={formToDisplay === 'vendors' ? 'tab-buttons-selected' : 'tab-buttons'} type="button" onClick={() => setFormToDisplay('vendors')}> Vendor/Contractors</button>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="support-text">
                <div className="contents">
                    <h2 style={{ color: '#5d5d5d', fontWeight: '600' }}> YOUTHANCER SUPPORT </h2>
                    <p className="graytext"> Facing an issue? Don't worry, tell us here and <br></br>
                     we will get back to you </p>
                </div>
            </div>

            <div className="formContainer">
                {formToDisplay === 'youthance' ? <YouthanceForm formFor="youthance" handleChange={handleChange} /> :
                    formToDisplay === 'business' ? <YouthanceForm formFor="business" handleChange={() => handleChange} /> :
                        <YouthanceForm formFor="vendors" handleChange={() => handleChange} />
                }
            </div>
        </div>
    )
}

export default ContactUs

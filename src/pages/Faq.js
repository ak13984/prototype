import React from 'react'
import Faq from 'react-faq-component';
import './styles.css';


const data = {
    rows: [
        {
            title: "What is Youthance?",
            content: "An On - Demand Temporary Staffing Platform, where one can hire or work for one-time and short-term gigs. A platform that caters to the market demand by redefining part-time work culture in India."
        },
        {
            title: "How is Youthance different?",
            content: "Millennials are our focal point. In the age of what we call the microwave life, we bring projects, tasks and jobs that help youngsters find their passion and progress.  We provide opportunities to not just earn but also help them upscale and develop."
        },
        {
            title: "Why should you join Youthance?",
            content: "We aim to shift the mindset from working for others to collaborating with businesses by clubbing the right match between the hirer and the resource. Capitalising technology, demographics and urbanisation in India with focus on specific industries and temporary job roles i.e; Marketing, Operations, Sales, Product, Research, Creative Pool and much more. <br> <br> Job seekers today are more tech savvy and equipped, hence a tech driven approach to hire as opposed to a manual process of hiring one tap temporary hiring solutions."
        },
        {
            title: "What kind of opportunities does Youthance provide?",
            content: "Youthance brings one time, short term and part-time gigs for the youth. We want you to look forward to Mondays because we bring flexible hours that are hourly and daily, but always meaningful and challenging at the same time."
        },
        {
            title: "Where all I can get part time jobs in India?",
            content: "We are working Pan India. So wherever you are in India can look forward to work on one time gigs with youthance."
        },
        {
            title: "What are the benefits of joining youthance?",
            content: "<br><li><b>Sky’s the limit</b></li><br> Work with brands that excite you, gain practical experience, try new job roles and add value to your career and personal growth. <br><br><br> <li><b>Youthance Promise - Bharosa hai ! </b></li> <br> Fair & transparent pay-outs, quick payments within the completion of project, no middlemen & secured payments. <br><br><br> <li><b>Learn, Unlearn & Relearn With Youthance</b></li> <br>Interactive training/workshops for personal grooming and upskilling & travel opportunities through our various outstation projects.    <br><br><br> <li><b>Financial Aid</b></li> <br> We help our community of students to take loans on education or gadgets and pay back in flexible monthly EMIs with working on part time jobs through us.   <br><br><br> <li><b>Technologically Upgraded</b></li> <br> With our platform, we allow our youth to be adept to the latest skills and trends by experience the latest technology to be upbeat with competition.   <br><br><br> <li><b>Personal Development</b></li> <br>We strive to groom our youth socially to become smart and highly sociable by improving their personality and outlook towards life."
        },
        {
            title: "I joined youthance, what is the next step?",
            content: "Once you join Youthance, you are part of ‘The Youthance Army’ so prepare yourself for a journey of self discovery and growth. As you do that, wait for the job notifications or apply for the jobs from our job list to get started!"
        },
        {
            title: "How can I apply for a gig?",
            content: "Simply download the app explore ‘All gigs’ space. Read thoroughly about the brand and gig requirement you’d choose to work with, answer few questions related to that particular gig and woohoo, you will be able to apply successfully."
        },
        {
            title: "When and how I will be assigned to the job?",
            content: "You will receive a gig job notification followed by an short interview, if required.Note, all gigs doesn’t require interview, in that case we will skip the interview round and you’ll be directly be assigned to the job."
        },
        {
            title: "How do I get paid after my job?",
            content: "You will receive your payment either in your bank account or Paytm. Your account details are compulsory for you to fill in your ‘Youthance Wallet’ for a seamless transaction and prompt payment after 5 to 10 working days of your project completion. However, we advice you to opt for PayTm only if the sum total amounts to be within INR 5000/- "
        },
        {
            title: "Can I apply for multiple jobs?",
            content: "Yes, we would love for you to explore multiple opportunities. However, you cannot take up two events/activities coinciding together."
        },
        {
            title: "Whom do I contact in case of any emergency?",
            content: "In case of any emergency, you must contact the Youthance team. Visit the contact us/support option and tell us your query. We will get back you within few hours."
        },
        {
            title: "Are there any perks or certificates?",
            content: "Youthance reimburses it’s Youthancers with benefits of commutation. Perks & certificates vary from gig to gig and will be communicated to you through gigs description."
        },
        {
            title: "Can I edit my skills and job preferences any time?",
            content: "Yes, you can add and update your skills from time to time."
        },
        {
            title: "Do I have to pay any fee if I register myself with youthance?",
            content: "No, the registration is free of cost."
        },
        {
            title: "How can I be sure about the gig I am choosing?",
            content: "Youthance Supports you, write to us via contact us/support option given in the website and app and we will be happy to guide you in the right direction."
        },
        {
            title: "How will I benefit from part time jobs?",
            content: "Usually the skills acquired from gigs outweigh the paychecks. Youthance believes in bridging that gap and balancing personal growth with better income. The exposure and growth prospects are higher will help you upscale at every step. Work, earn & learn with Youthance."
        },
        {
            title: "I don’t want to go out for work, will I be able to find work from home jobs?",
            content: "We believe in getting you out there and experience the real world. However, we also provide ‘work-from-home’ gigs. Sign up to stay updated with the same."
        },
        {
            title: "Should I submit any CV or resume?",
            content: "All the imperative details will be taken from you as you sign up. We do not require your resume for the process."
        },
        {
            title: "I no longer wish to receive updates from future postings from youthance. How can I remove my information from the portal?",
            content: "You can notify us with an e-mail at info@youthance.com to stop receiving further alerts."
        },
        {
            title: "What is the basic qualification to start the work?",
            content: "Passion and intent to work, earn and learn is the only qualification we are assessing here."
        },
        {
            title: "How do I keep a check on the work done with youthance?",
            content: "The ‘Completed’ section and ‘Youthance Wallet’ displays and holds track of all the information, transactions and records of completed projects, history and on-going projects"
        }
    ]
}

function Faqs() {
    return (
        <div className="wrapper">
            <div className="faqs">
                <h1 style={{ color: '#042657' }}>FAQs</h1>

                <div className="faqdata">
                    <Faq data={data}
                        styles={{
                            bgColor: "white",
                            titleTextColor: "#6543B1",
                            rowTitleColor: "#6543B1",
                            rowTitleTextSize: 'large',
                            rowContentColor: "#48484a",
                            rowContentTextSize: '16px',
                            rowContentPaddingTop: '10px',
                            rowContentPaddingBottom: '10px',
                            rowContentPaddingLeft: '10px',
                            arrowColor: "#6543B1",
                        }}
                        config={{
                            arrowIcon: "+"
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default Faqs

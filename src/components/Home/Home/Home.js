import React from 'react'
import AppointmentSection from '../AppointmentSection/AppointmentSection'
import Blogs from '../Blogs/Blogs'
import ContactUs from '../ContactUs/ContactUs'
import Doctors from '../Doctors/Doctors'
import Fetured from '../Featured/Fetured'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

function Home() {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Fetured></Fetured>
            <AppointmentSection></AppointmentSection>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    )
}

export default Home

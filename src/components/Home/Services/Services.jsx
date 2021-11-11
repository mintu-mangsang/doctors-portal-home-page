import React from 'react';
import './Services.css';
import Fluride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import ServiceDetail from '../../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: "Fluoride Treatment",
        image: Fluride
    },
    {
        name: "Cavity Filling",
        image: Cavity
    },
    {
        name: "Teeth Whitening",
        image: Whitening
    }
]

function Services() {
    return (
        <section className="services">
            <div className="mb-5">
                <h6 style={{ color: "#1CC6C3", fontSize: "25px", fontWeight: "bold" }}>OUR SERVICES</h6>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-3 pt-3">
                {
                    servicesData.map( item => <ServiceDetail service={item}></ServiceDetail>)
                }
                </div>
            </div>
        </section>
    )
}

export default Services

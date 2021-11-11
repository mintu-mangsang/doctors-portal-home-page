import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: "Opening Hours",
        description: "We are opening 7 Days",
        icon: faClock,
        background: "primary"
    },
    {
        title: "Visit our location",
        description: "Broklyn NY2200, United State",
        icon: faMapMarker,
        background: "dark"
    },
    {
        title: "Contact Us Now",
        description: "++880 191000000",
        icon: faPhone,
        background: "primary"
    }
]

function BusinessInfo() {
    return (
        <section className="d-flex justify-content-center pt-5">
            <div className="w-75 row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    )
}

export default BusinessInfo

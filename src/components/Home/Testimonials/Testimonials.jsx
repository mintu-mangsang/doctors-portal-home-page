import React from 'react';
import Person1 from '../../../images/wilson.png'
import Person2 from '../../../images/ema.png'
import Person3 from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const testimonialData = [
    {
        title: "Lorem ipsum dollar income. if you learning Javascript and its any one framework- like as React",
        image: Person1,
        name: 'Winson Herry',
        city: "California"
    },
    {
        title: "Lorem ipsum dollar income. if you learning Javascript and its any one framework- like as React",
        image: Person2,
        name: 'Aliza Watson',
        city: "Flrodia"
    },
    {
        title: "Lorem ipsum dollar income. if you learning Javascript and its any one framework- like as React",
        image: Person3,
        name: 'Ema Henry',
        city: "North Carolina"
    }
]

function Testimonials() {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What our patients <br/> Says</h1>
                </div>
                <div className="card-group mt-5">
                    {
                        testimonialData.map( testimonial =><Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials

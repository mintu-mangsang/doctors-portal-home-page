import React from 'react';
import './Testimonial.css'

function Testimonial(props) {
    const {title, name, image, city} = props.testimonial;
    return (
        <div className="card shadow-sm custom-card">
            <div className="card-body">
                <p className="card-text text-center">{title}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={image} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{city}</p>
                </div>
            </div>
       </div>
    )
}

export default Testimonial

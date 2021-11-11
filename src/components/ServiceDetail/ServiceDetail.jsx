import React from 'react'

function ServiceDetail({service}) {
    return (
        <div className="col-md-4 text-center">
            <img src={service.image} alt="" className="img-fluid" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-seondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, recusandae.</p>
        </div>
    )
}

export default ServiceDetail

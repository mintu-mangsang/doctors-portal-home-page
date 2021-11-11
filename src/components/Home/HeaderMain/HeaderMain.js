import React from 'react'
import Chair from '../../../images/chair.png';
function HeaderMain() {
    return (
        <main style={{ paddingTop: "120px" }} className="row">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#475062" }}>Your New Smile <br/> Start Here </h1>
                <p className="text-secondary">Lorem, ipsam dollar income for as your skills. income for as your skills.income for as your skills.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={Chair} className="img-fluid"/>
            </div>
        </main>
    )
}
export default HeaderMain

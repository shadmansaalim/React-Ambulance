import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { id, name, image, description } = props.service;
    return (
        <section className="my-5 ">
            {
                // Checking if the index is odd or even to create a variation in styles
                id % 2 !== 0 ?
                    <section className="row d-flex mx-auto ">
                        <div className="col-lg-6 d-flex flex-column justify-content-center p-5" style={{ backgroundColor: '#ECEFF1' }}>
                            <div>
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <button className="btn btn-outline-dark rounded-pill">Book Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid service-img rounded-3" src={image} alt="" />
                        </div>
                    </section>
                    :
                    <section className="row d-flex mx-auto">
                        <div className="col-lg-6">
                            <img className="img-fluid service-img rounded-3" src={image} alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center p-5" style={{ backgroundColor: '#ECEFF1' }}>
                            <div>
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <button className="btn btn-outline-dark rounded-pill">Book Now</button>
                            </div>
                        </div>
                    </section>

            }
        </section>
    );
};

export default Service;
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, image, description } = props.service;
    const history = useHistory();

    const goToServiceDetails = () => {
        history.push(`/service/${id}`);
    }
    return (
        <section className="my-5 ">
            {
                // Checking if the index is odd or even to create a variation in styles
                id % 2 !== 0 ?
                    <section className="row d-flex mx-auto ">
                        <div className="col-11 col-lg-6 d-flex flex-column justify-content-center p-4 p-lg-5 mx-auto order-2 order-lg-1 mt-3 mt-lg-0" style={{ backgroundColor: '#ECEFF1' }}>
                            <div>
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <button onClick={goToServiceDetails} className="btn btn-outline-dark rounded-pill">Book Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 mx-auto order-1 order-lg-2">
                            <img className="img-fluid service-img rounded-3 " src={image} alt="" />
                        </div>
                    </section>
                    :
                    <section className="row d-flex mx-auto">
                        <div className="col-lg-6 mx-auto">
                            <img className="img-fluid service-img rounded-3" src={image} alt="" />
                        </div>
                        <div className="col-11 col-lg-6 d-flex flex-column justify-content-center p-4 p-lg-5 mx-auto mt-3 mt-lg-0" style={{ backgroundColor: '#ECEFF1' }}>
                            <div>
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <button onClick={goToServiceDetails} className="btn btn-outline-dark rounded-pill">Book Now</button>
                            </div>
                        </div>
                    </section>

            }
        </section>
    );
};

export default Service;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useServices();
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        setSelectedService(services.find(service => parseInt(service.id) === parseInt(serviceId)))
    }, [services]);

    console.log(selectedService);


    return (
        <div>
            {
                selectedService && <section className="container my-5">
                    <h2>Service Details</h2>
                    <div className="row d-flex mx-auto ">
                        <div className="col-11 col-lg-6 d-flex flex-column justify-content-center p-lg-5 mx-auto order-2 order-lg-1 mt-3 mt-lg-0" style={{ backgroundColor: '#ECEFF1' }}>
                            <div>
                                <h2>{selectedService.name}</h2>
                                <p>{selectedService.description}</p>
                                <button className="btn btn-outline-dark rounded-pill">Book Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 mx-auto order-1 order-lg-2">
                            <img className="img-fluid service-img rounded-3 " src={selectedService.image} alt="" />
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default ServiceDetails;
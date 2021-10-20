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
                    <div className="mb-4 text-center col-lg-8 mx-auto">
                        <h2>{selectedService.name}</h2>
                        <p>{selectedService.description}</p>
                    </div>


                    <section className="row d-flex mx-auto align-items-stretch mt-5">
                        <div className="col-11 col-lg-6 mx-auto p-4 order-2 order-lg-1  mt-3 mt-lg-0 d-flex flex-column justify-content-center" style={{ backgroundColor: '#ECEFF1' }}>

                            <p className="text-center mt-3">Provide Details and Confirm Booking</p>

                            <form className="mt-3 col-lg-10 mx-auto">
                                <div className="form-group input-group mb-3 ">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>

                                    <input name="" className="form-control" placeholder="Patient Name" type="text" required />
                                </div>
                                <div className="form-group input-group mb-3">

                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>

                                    <input name="" className="form-control" placeholder="Email Address" type="email" required />
                                </div>
                                <div className="form-group input-group mb-3">

                                    <span className="input-group-text"> <i className="fa fa-home"></i> </span>

                                    <input name="" className="form-control" placeholder="Home Address" type="text" required />
                                </div>
                                <div className="form-group input-group mb-3">

                                    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>

                                    <input name="" className="form-control" placeholder="Phone Number" type="number" required />
                                </div>


                                <div className="form-group my-4 text-center">
                                    <button type="submit" className="btn btn-outline-success btn-block">Confirm Booking</button>
                                </div>

                            </form>


                        </div>


                        <img className="col-lg-6 mx-auto img-fluid rounded-3 order-1 order-lg-2" src={selectedService.image} alt="" />

                    </section>




                </section >
            }
        </div >
    );
};

export default ServiceDetails;
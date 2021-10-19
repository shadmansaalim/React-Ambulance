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

                    <div className="d-flex justify-content-around mx-auto align-items-stretch my-5">

                        <div className="card p-4 " style={{ backgroundColor: 'rgb(236, 239, 241)' }}>
                            <article className="card-body mx-auto d-flex flex-column justify-content-center" style={{ maxWidth: '400px' }}>

                                <p className="text-center">Provide Details and Confirm Booking</p>

                                <form className="mt-4">
                                    <div className="form-group input-group mb-3">

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
                                        <button type="submit" className="btn btn-success btn-block">Confirm Booking</button>
                                    </div>

                                </form>
                            </article>

                        </div>
                        <div>
                            <h4>Why Choose {selectedService.name} ?</h4>
                            <ul>
                                {
                                    (selectedService.advantages).map(advantage => <li>{advantage}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </section >
            }
        </div >
    );
};

export default ServiceDetails;
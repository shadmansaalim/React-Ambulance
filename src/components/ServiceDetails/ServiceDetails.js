import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import swal from 'sweetalert';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory();

    const [services, setServices] = useServices();
    const [selectedService, setSelectedService] = useState(null);

    const [bookingName, setBookingName] = useState('');
    const [bookingEmail, setBookingEmail] = useState('');
    const [bookingAddress, setBookingAddress] = useState('');
    const [bookingPhone, setBookingPhone] = useState('');

    useEffect(() => {
        setSelectedService(services.find(service => parseInt(service.id) === parseInt(serviceId)))
    }, [services, serviceId]);

    const confirmBooking = (e) => {
        e.preventDefault();
        swal({
            title: "We are coming soon!",
            text: `${selectedService.name} Booked For Patient ${bookingName}`,
            icon: "success",
            buttons: true,
            successMode: true,
            buttons: ['Cancel', 'Track Ambulance']
        })
            .then((willTrack) => {
                if (willTrack) {
                    // history.push('/')
                }

            });
        e.target.reset();
    }

    const handleBookingName = e => {
        setBookingName(e.target.value);
    }
    const handleBookingEmail = e => {
        setBookingEmail(e.target.value);
    }
    const handleBookingAddress = e => {
        setBookingAddress(e.target.value);
    }
    const handleBookingPhone = e => {
        setBookingPhone(e.target.value);
    }

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

                            <form onSubmit={confirmBooking} className="mt-3 col-lg-10 mx-auto">
                                <div className="form-group input-group mb-3 ">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>

                                    <input onBlur={handleBookingName} name="" className="form-control" placeholder="Patient Name" type="text" required />
                                </div>
                                <div className="form-group input-group mb-3">

                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>

                                    <input onBlur={handleBookingEmail} name="" className="form-control" placeholder="Email Address" type="email" required />
                                </div>
                                <div className="form-group input-group mb-3">

                                    <span className="input-group-text"> <i className="fa fa-home"></i> </span>

                                    <input onBlur={handleBookingAddress} name="" className="form-control" placeholder="Home Address" type="text" required />
                                </div>
                                <div className="form-group input-group mb-3">

                                    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>

                                    <input onBlur={handleBookingPhone} name="" className="form-control" placeholder="Phone Number" type="number" required />
                                </div>

                                <div className="form-group input-group">
                                    <span className="input-group-text">Type</span>
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => {
                                        console.log(`/service/${e.target.value}`)
                                        history.push(`/service/${e.target.value}`)

                                    }}>


                                        {
                                            services.map(service => parseInt(service.id) === parseInt(serviceId) ?
                                                <option selected value={service.id}>{service.name}</option>
                                                :
                                                <option value={service.id}>{service.name}</option>)
                                        }

                                    </select>
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
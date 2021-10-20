import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <section className="my-5">
            <h1 id="services" className="fw-bold">Emergency Services</h1>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }

        </section>
    );
};

export default Services;
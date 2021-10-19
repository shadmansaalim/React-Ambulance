import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
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
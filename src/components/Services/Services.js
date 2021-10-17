import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="my-5">

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
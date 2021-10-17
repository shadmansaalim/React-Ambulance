import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-5">

        </div>
    );
};

export default Services;
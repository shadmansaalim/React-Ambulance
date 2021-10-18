import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Value from '../Value/Value';

const OurValues = () => {
    const [values, setValues] = useState([]);
    useEffect(() => {
        fetch('./values.json')
            .then(res => res.json())
            .then(data => setValues(data))
    }, [])
    return (
        <section style={{ marginTop: '120px' }} >
            <div className="mx-auto mb-5 col-lg-8">
                <h2 className="fw-bold">Our Core Values</h2>
                <p className="text-start">At Emergency Ambulance Service our sole focus is the lives we touch every day. The communities we serve are more than just people in need: they’re our friends, neighbors, and classmates. Our connection to the community is why we never forget that the people we serve are our number one priority.</p>
            </div>
            <div className="row row-cols-md-2 row-cols-lg-3 mx-auto my-5 g-4">
                {
                    values.map(value => <Value
                        key={value.id}
                        value={value}
                    >
                    </Value>)
                }
            </div>
        </section>
    );
};

export default OurValues;
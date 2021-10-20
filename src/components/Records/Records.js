import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faAmbulance, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Records = () => {
    return (

        <section style={{ marginTop: '60px' }}>
            <div className="mb-5 row row-cols-1 row-cols-lg-3 mx-auto">
                <div className="col">
                    <div className="bg-dark text-white p-5 rounded-3">
                        <h1 style={{ color: '	#42ba96' }}>
                            <FontAwesomeIcon className="me-2" icon={faUsers} />
                            <CountUp redraw={true} end={335828} duration={3} >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                        <p>PATIENTS TRANSPORTED</p>
                    </div>
                </div>
                <div className="col my-3 my-lg-0">
                    <div className="bg-dark text-white p-5 rounded-3">
                        <h1 style={{ color: '	#42ba96' }}>
                            <FontAwesomeIcon className="me-2" icon={faHandshake} />
                            <CountUp redraw={true} end={43} duration={2} >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                        <p>YEARS IN BUSINESS</p>
                    </div>
                </div>
                <div className="col">
                    <div className="bg-dark text-white p-5 rounded-3">
                        <h1 style={{ color: '	#42ba96' }}>
                            <FontAwesomeIcon className="me-2" icon={faAmbulance} />
                            <CountUp redraw={true} end={50} duration={3} >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                        <p>CITIES SERVED</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Records;
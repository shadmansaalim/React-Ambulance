import React from 'react';

const Footer = () => {
    return (


        <footer
            className="text-center text-lg-start text-dark"
            style={{ backgroundColor: '#ECEFF1' }}
        >
            <section className="bg-dark text-white p-5">
                <div className="container text-center text-md-start ">
                    <div className="row ">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold">Emergency Ambulance Service Australia</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>
                                A React Service Application Developed By Saalim Shadman to get a glimpse experience of Real World Projects.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold">Membership</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>
                                <a href="#!" className="text-white">Fees & Terms</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Patient Stories</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">AV Membership FAQ</a>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold">Paramedics</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>
                                <a href="#!" className="text-white">Become a Paramedic</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Types of Paramedics</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Clinical Practice Guidelines</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold">Community & Education
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>Community & Education</p>
                            <p>Community & Partnerships</p>
                            <p>Volunteers</p>
                            <p>Education</p>
                            <p>Register My AED</p>
                        </div>

                    </div>

                </div>
            </section>

            <div
                className="text-center text-white p-3"
                style={{ backgroundColor: '#42ba96' }}
            >
                <small>© 2021 Copyright Application Developed by Saalim Shadman, a Computer Science Student at RMIT, Australia</small>
            </div>

        </footer>
    );
};

export default Footer;
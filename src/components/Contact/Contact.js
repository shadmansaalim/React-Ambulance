import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container my-5">
            <h3 className="text-center">Contact Us</h3>
            <p className="text-muted mt-5 text-center">As your ambulance service, we welcome your thoughts, comments and feedback.</p>
            <div className="mt-4 d-flex align-items-center justify-content-center">
                <p className="text-muted me-3 mb-0">If you require an emergency ambulance</p>
                <button className="btn btn-outline-dark">Call Triple Zero (000)</button>
            </div>
            <section className="container row mx-auto d-flex align-items-start" style={{ marginTop: '100px' }}>
                <div className="col-lg-5 mx-auto text-start">
                    <h4>Our Departments</h4>
                    <p className="mt-5">Membership</p>
                    <h6 className="text-danger text-start">Please note: We are experiencing higher than normal wait times (currently under 10 minutes). We apologise for the inconvenience. Please be assured that you will be assisted if you stay on the line.</h6>
                    <p className="text-muted mt-5">To purchase a membership please call us on 1800 64 84 84 (Mon-Fri 8am - 8pm & Sat 9am - 5pm) or join online.</p>
                    <p className="mt-5"> If you have an enquiry regarding your membership please contact us below:</p>
                    <p className="mt-4"><b>Phone: </b>1300 366 141 (Mon-Fri 8am - 8pm & Sat 9am - 5pm)</p>
                    <p className="mt-3"><b>Email: </b>membership@ambulance.vic.gov.au</p>
                    <p style={{ marginTop: '50px' }}><small>Please note, you will be required to provide 3 points of ID such as full name, address and date of birth to make changes or obtain information about a membership.
                    </small></p>
                </div>
                <div className="col-lg-5 mx-auto">
                    <div className="card" style={{ backgroundColor: 'rgb(236, 239, 241)' }}>
                        <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                            <h4 className="card-title mt-3 text-center">Feedback Form</h4>
                            <p className="text-center">We are delighted to serve the Victorians and we respect every feedbacks.</p>
                            <form>
                                <div className="form-group input-group mb-3">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>

                                    <input name="" className="form-control" placeholder="Full name" type="text" required />
                                </div>
                                <div className="form-group input-group mb-3">

                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>

                                    <input name="" className="form-control" placeholder="Email address" type="email" required />
                                </div>
                                <div class="mb-3">
                                    <textarea placeholder="Write your feedback" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="form-group my-4">
                                    <button type="submit" className="btn btn-block text-white" style={{ backgroundColor: '#42ba96' }}>Submit</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
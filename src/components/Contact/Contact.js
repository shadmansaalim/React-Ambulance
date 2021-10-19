import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div class="container contact-form shadow my-5 col-lg-8 mx-auto">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <h3 className="mt-5">Drop Us a Message</h3>
            <form>
                <div class="row d-flex align-items-center">
                    <div class="col-md-6">
                        <div class="form-group mb-2">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group mb-2">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group mt-3 mt-md-0">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }}></textarea>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-outline-dark">Submit</button>
                    </div>
                </div>

            </form>
        </div >
    );
};

export default Contact;
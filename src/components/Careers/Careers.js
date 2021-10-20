import React from 'react';
import './Careers.css'
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
const Careers = () => {
    return (
        <section>
            <div className="text-start p-5 text-white career-banner mb-5">
                <div className="container">
                    <h1>Careers</h1>
                    <p>Ambulance is a unique working environment, where the actions of each employee contribute to the ultimate aim of caring for our patients. While the lifesaving work of our paramedics is the cornerstone of Ambulance Victoria, what goes on behind the scenes is just as important to helping us help the community. With more than 4000 employees, there are a variety of jobs out on the road and in our support functions including finance, people services, IT, payroll, operational projects and many others. A career at Ambulance Victoria is so much more than just a job, it is a real way to make a difference.</p>
                    <HashLink to="#jobs">
                        <button className="btn btn-outline-dark btn-lg">Apply Now <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
                    </HashLink>
                </div>
            </div>


            <Container className="my-5">
                <div className="text-start col-lg-9 mx-auto" style={{ marginTop: '120px', marginBottom: '120px' }}>
                    <h2>Make a Difference as a Member of the AV Team</h2>
                    <p className="mt-4 text-muted">Welcome!  We are pleased that a job opportunity with Emergency Ambulance Service (“EAS”) may be aligned with your career goals. Thank you for your interest in our company!</p>

                    <h5 className="fw-bold mt-5">OUR PHILOSOPHY</h5>
                    <p className="mt-3 text-muted">We believe our company is only as good as the people who deliver our services. We are always seeking highly skilled, talented, and motivated individuals who want to contribute to the growth and success of our dynamic organization.</p>

                    <h5 className="fw-bold mt-5">EQUAL OPPORTUNITY EMPLOYER</h5>
                    <p className="mt-3 text-muted">Emergency Ambulance Service is committed to the principle of <strong>equal employment opportunity</strong> and it is our policy to ensure equal employment opportunities for all, without regard to race, color, religion, sex, national origin, age, disability, veteran status or any other non job-related characteristic protected by law.</p>

                    <h5 className="fw-bold mt-5 mb-3">HIRING REQUIREMENTS</h5>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">Receipt of a fully completed, signed  and dated Employment Application</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">The applicant must be at least 18 years of age or older (20 ½ years of age or older for positions that involve driving)</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">The applicant must possess at a minimum a High School Diploma or GED</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            The applicant must hold all required licenses, certifications, and/or permits, including proper identification</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Receipt of a current DMV Printout, showing responsible driving history and indicating acceptable status for driving Company vehicles, (no more than 30 days old, if applying for any job requiring driving, e.g. Emergency Medical Technician)</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Successful completion of a comprehensive job-specific written examination, which tests base knowledge, and decision-making skills; (if applicable)</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Social Security Number Verification – An individual’s social security number is checked against a national database to determine the validity of the number</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Successful completion of an investigative consumer report (background check) and reference check</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Successful completion of a Criminal Background Search (for all positions involving patient care and other safety-sensitive positions) through a Nationwide Criminal Database to  determine if a candidate’s criminal background is related to the potential job.  The search must indicate that the applicant is not precluded from certification or licensure for reasons defined in the Health and Safety Code or elsewhere</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Successful completion of a search of the Fraud and Abuse Control Information Systems (FACIS®) database to ensure the applicant is not excluded from any government or healthcare contracts. FACIS® identifies sanctioned individuals with OIG, GSA and other federal agencies, as well as disciplinary actions by federal agencies and licensing and certification agencies in all 50 states.</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Acceptable documentation for compliance with the Immigration and Naturalization Act of 1986, as amended</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Successful passing of a  Post Offer Medical Examination (if indicated) and/or a drug screen without any limitations</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Successfully passing a post offer job specific physical fitness test (if indicated)</small>
                    </p>
                    <p className="d-flex align-items-start mt-2">
                        <FontAwesomeIcon className="text-success me-2" icon={faCheck} />
                        <small className="text-muted">
                            Successfully passing an Oral Interview</small>
                    </p>
                </div>

                <h2 className="text-start mb-3">Recent Job Openings</h2>
                <Row id="jobs" xs={1} md={4} className="g-4">

                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://www.sbsheriff.org/wp-content/uploads/2019/04/Dispatcher-Recruitment.jpg" />
                            <Card.Body>
                                <Card.Title>Dispatcher (Full Time)</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a Full Time Dispatcher having 2 years of work experience in relevant field</p>
                                    <p>Location : Victoria</p>
                                    <button className="btn btn-outline-dark">Apply Now</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://www.njc.edu/sites/default/files/areaofstudy/banner/banner-emt-073119.jpg" />
                            <Card.Body>
                                <Card.Title>EMT Basic (Part Time)</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a part time EMT to join our group for the next 4 months. No experience required.</p>
                                    <p>Location : Victoria</p>
                                    <button className="btn btn-outline-dark">Apply Now</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src="data:image/jpeg;base64,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" />
                            <Card.Body>
                                <Card.Title>Paramedic (Full Time)</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a Full Time Paramedic to join AV Team with 4 years of work experience.</p>
                                    <p>Location : Victoria</p>
                                    <button className="btn btn-outline-dark">Apply Now</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://www.ziprecruiter.com/blog/static/wp-content/uploads/2017/06/28163306/web-design-794x529.jpg" />
                            <Card.Body>
                                <Card.Title>Social Media and Public Relations Specialist</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a Social Media Manager to enhance our service all over Australia.</p>
                                    <p>Location : Victoria</p>
                                    <button className="btn btn-outline-dark">Apply Now</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Careers;
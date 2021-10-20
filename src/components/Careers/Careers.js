import React from 'react';
import './Careers.css'
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import img1 from '../../images/dispatcher.svg'
import img2 from '../../images/EMTs.svg'
import img3 from '../../images/paramedics.svg'
import img4 from '../../images/social-manager.svg'
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
                <div className="text-start col-lg-9 mx-auto" style={{ marginTop: '120px', marginBottom: '90px' }}>
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

                <h2 id="jobs" className="text-center mb-5">Recent Job Openings</h2>
                <Row xs={1} md={2} lg={4} className="g-4 mx-auto">

                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Dispatcher (Full Time)</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a Full Time Dispatcher having 2 years of work experience in relevant field</p>
                                    <p>Location : Victoria</p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-outline-dark">Apply Now</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>EMT Basic (Part Time)</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a part time EMT to join our group for the next 4 months. No experience required.</p>
                                    <p>Location : Victoria</p>

                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-outline-dark">Apply Now</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Paramedic (Full Time)</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a Full Time Paramedic to join AV Team with 4 years of work experience.</p>
                                    <p>Location : Victoria</p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-outline-dark">Apply Now</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img style={{ height: '250px' }} variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Social Media and Public Relations Specialist</Card.Title>
                                <Card.Text>
                                    <p className="text-muted">We are looking for a Social Media Manager to enhance our service all over Australia.</p>
                                    <p>Location : Victoria</p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-outline-dark">Apply Now</button>
                            </Card.Footer>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Careers;
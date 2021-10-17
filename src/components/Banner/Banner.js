import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import bgVideo from '../../video/videoplayback.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
    return (
        <div className="position-relative">
            <div>
                <video autoPlay muted loop>
                    <source src={bgVideo} type="video/mp4"></source>
                </video>
            </div>
            <button className="btn btn-outline-light btn-lg book-btn">Book Ambulance <FontAwesomeIcon icon={faArrowRight} /></button>
        </div >


    );
};

export default Banner;
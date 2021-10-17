import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, image, description } = props.service;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img className="h-50 card-img" variant="top" src={image} />
                <Card.Body className="text-start">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
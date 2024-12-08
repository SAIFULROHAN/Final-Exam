import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Card, Container, Row, Col,} from "react-bootstrap";
import axios from "axios";

const Service = () => {
    const [services, setServices] = useState([]);

    const baseUrl = "http://localhost:2000/api";

    // Fetch Services
    const fetchServices = async () => {
        try {
            const response = await axios.get(`${baseUrl}/getAllService`);
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);


    return (
        <>
            <div className="container-fluid bg-black blog overlay">
                <div className="container justify-items-center align-items-center">
                    <div className="col-12">
                        <h1 className="about">Service</h1>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-6">

                        </div>
                        <div className="col-6">
                            <h3 className="text-white fw-bold headline-3 sty">Since Our Earliest Days lorem ipsum dolor
                                sit amet, elit. Ut elit tellus, luctus, erat sed fermentum feugiat.</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*Service Start*/}

            <div className="container-fluid bg-dark p">
                <div className="container">

                    <h3 className="text-white d-flex justify-content-center p-5 sty fw-bold headline-3">Our Blog</h3>
                    <Row className="mt-4">
                        {services.map((services) => (
                            <Col md={3} className="mb-4" key={services._id}>
                                <Card>
                                    <Card.Body>
                                        <Card.Img
                                            src={services.image}
                                            alt={services.name}
                                            width="10px"
                                            height="10px"
                                            className="mb-3 img-fluid"
                                        />
                                        <Card.Title className="text-center">{services.name}</Card.Title>
                                        <Card.Text>{services.description}</Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Service;
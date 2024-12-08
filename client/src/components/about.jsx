import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/bg-14-free-img.jpg';
import {Button, Card, Col, Row} from "react-bootstrap";
import axios from "axios";

const About = () => {
    const [teams, setTeams] = useState([]);

    const baseUrl = "http://localhost:2000/api";

    // Fetch Team
    const fetchTeams = async () => {
        try {
            const response = await axios.get(`${baseUrl}/getTeam`);
            setTeams(response.data);
        } catch (error) {
            console.error("Error fetching Team:", error);
        }
    };
    useEffect(() => {
        fetchTeams();
    }, []);


    return (
        <>
            {/*Hero*/}
            <div className="container-fluid about-bg overlay">
                <div className="container justify-items-center align-items-center" >
                    <div className="col-8">
                        <h1 className="about">About</h1>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-6">

                        </div>
                        <div className="col-6">
                          <h3 className="text-white fw-bold headline-3 sty">Since Our Earliest Days lorem ipsum dolor sit amet, elit. Ut elit tellus, luctus, erat sed fermentum feugiat.</h3>
                        </div>

                    </div>
                </div>
            </div>

            {/*Team Info*/}

            <div className="container-fluid bg-dark p">
                <div className="container">
                    <h3 className="text-white d-flex justify-content-center p-5 sty fw-bold headline-3">Our Team</h3>

                    <Row className="mt-4">
                        {teams?.length > 0 ? (
                            teams.map((teams) => (
                                <Col md={3} className="mb-4" key={teams._id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img
                                                src={teams.image}
                                                alt={teams.name}
                                                className="mb-3 img-fluid"
                                            />
                                            <Card.Title className="text-center">{teams.name}</Card.Title>
                                            <Card.Subtitle className="text-center text-muted">
                                                {teams.role}
                                            </Card.Subtitle>
                                            <Card.Text>{teams.description}</Card.Text>
                                            <div className="text-center">
                                                <Button
                                                    variant="warning"
                                                    onClick=""
                                                >
                                                    Edit
                                                </Button>{" "}
                                                <Button
                                                    variant="danger"
                                                    onClick=""
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p className="text-center">No Teams found.</p>
                        )
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};

export default About;
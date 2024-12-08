import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/about-001-free-img.jpg';
import {Button, Card, Col, Row} from "react-bootstrap";
import axios from "axios";



const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [teams, setTeams] = useState([]);

    const baseUrl = "http://localhost:2000/api";

    // Fetch all blogs
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`${baseUrl}/getAllBlog`);
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

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
        fetchBlogs();
        fetchTeams();
    }, []);



    return (
        <>
            {/*Hero*/}
        <div className="container-fluid hero-bg overlay">
            <div className="container justify-items-center align-items-center " >
                <div className=" col-md-12 col-lg-12">
                    <h4 className="text-white fw-light sty bodyMedium letter-spacing-2">Advertising & Marketing Agency</h4>
                    <h1 className="headline-1 fw-bold text-white">We help <br/>brands Grow Beautifully</h1>
                    <button className=" btn btn-outline-light p-3 w-25">Get Started Now</button>

                </div>
            </div>
        </div>

            {/*Blog*/ }


    <div className="container-fluid bg-dark p">
        <div className="container">

            <h3 className="text-white d-flex justify-content-center p-5 sty fw-bold headline-3">Our Blog</h3>
            <Row>
                {blogs?.length > 0 ? (
                    blogs?.slice(0, 6).map((blogs) => (
                        <Col md={4} className="mb-4" key={blogs._id}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={blogs.image}
                                    alt={blogs.title}
                                    style={{height: "200px", objectFit: "cover"}}
                                />
                                <Card.Body>
                                    <Card.Title>{blogs.title}</Card.Title>
                                    <Card.Text>

                                        {blogs.description}

                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-center">No blogs found.</p>
                )}
            </Row>
        </div>
    </div>


            {/*About*/}
            <div className="container-fluid bg-dark p">
                <div className="container">
                    <h3 className="text-white d-flex justify-content-center p-5 sty fw-bold headline-3">About US</h3>
                    <div className="row align-items-center">

                    <div className="row col-6">
                        <p className="text-white headline-2 fw-bold">We are an Advertising & Marketing firm erat sed fermentum.</p>
                        <p className="text-light-emphasis">Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>

                    <div className="col-6 row">
                        <img className="w-100" src={logo} />
                    </div>

                    </div>

                </div>
            </div>

            {/*Team*/}

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
                   ):(
                       <p className="text-center">No Teams found.</p>
                   )
                   }
               </Row>
           </div>
       </div>


        </>


    )
        ;
};

export default Home;
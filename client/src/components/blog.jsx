import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Row} from "react-bootstrap";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);


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

    useEffect(() => {
        fetchBlogs();
    }, []);


    return (
        <>
            <div className="container-fluid bg-black blog overlay">
                <div className="container text-center justify-items-center align-items-center">
                    <div className="col-12">
                        <h1 className="about">OUR BLOG</h1>
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

        </>
    );
};

export default Blog;
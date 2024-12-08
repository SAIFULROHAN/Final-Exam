import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo-regular-free-img (1).png"

const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-sm bg-black sty">
                <div className="container py-5 text-light">
                    <div className="row">
                        <div className="col-md-3 ">
                            <img className="img-fluid my-2" src={logo} alt="logo" width="110px"/>

                            <p className="my-2">
                                <Link className="nav-link" to="/about">Home</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/refund">About</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/privacy">Blog</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Service</Link>
                            </p>

                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Contact</Link>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="bodyMedium">Information</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/how-to-buy">How to buy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/complain">Complain</Link>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="bodyMedium">About</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                            <img className="w-100" src="" />
                        </div>

                        <div className="col-md-3 ps-4-5">
                            <h1 className="bodyMedium">Contact Us</h1>
                            <h3 className="bodyLarge">New York</h3>
                            <h4 className="fw-bold bodySmal text-secondary">MBDA Business Center</h4>
                            <p className="text-secondary bodySmal p-0">13 Fifth Avenue, New York, NY 10160</p>
                            <p className="text-secondary bodySmal p-0">929-242-6868</p>
                            <p className="text-secondary bodySmal m-0">contact@example.com</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-3 text-center">
                <hr className="text-white fw-bold"/>
                <p className="text-white bodySmal">All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;
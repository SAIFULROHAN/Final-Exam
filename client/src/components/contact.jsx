import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container-fluid con overlay">

                <div className="container justify-items-center align-items-center ">
                    <div className="col-12">
                        <h1 className="about">Contact</h1>
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

            {/*Contact US */}

            <div className="container-fluid bg-dark p">
                <div className="container justify-items-center align-items-center ">
                    <h3 className="text-white d-flex justify-content-center p-5 sty fw-bold headline-3">Contact Us</h3>
                </div>

                <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h3 className="bodyLarge text-white">New York</h3>
                        <h4 className="fw-bold bodySmal text-secondary">MBDA Business Center</h4>
                        <p className="text-secondary bodySmal p-0">13 Fifth Avenue, New York, NY 10160</p>
                        <p className="text-secondary bodySmal p-0">929-242-6868</p>
                        <p className="text-secondary bodySmal m-0">contact@example.com</p>
                        <div className="py-5">
                            <h3 className="bodyLarge text-white">Paris</h3>
                            <h4 className="fw-bold bodySmal text-secondary">La Défense Business Center</h4>
                            <p className="text-secondary bodySmal p-0">13 Fifth Avenue, New York, NY 10160</p>
                            <p className="text-secondary bodySmal p-0">929-242-6868</p>
                            <p className="text-secondary bodySmal m-0">contact@example.com</p>
                        </div>

                    </div>

                    <div className="col-6 card p-5">
                        <form className="row g-3">
                            <div className="col-6">
                                <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name"
                                       aria-label="First name"/>
                            </div>
                            <div className="col">
                            <label htmlFor="inputEmail4" className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name"
                                       aria-label="Last name"/>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>

                            <div className="col-6">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress"
                                       placeholder="1234 Main St"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>


                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-25">Send</button>
                            </div>
                        </form>


                    </div>

                </div>
                </div>
            </div>

            {/*
            <div className="section bg-danger">
                <div className="container ">
                    <div className="row justify-content-center d-flex">
                        <div className="col-md-6 col-lg-4 card align-items-center">
                            <h3 className="">My name IS </h3>
                        </div>

                        <div className="col-md-6 col-lg-4 card align-items-center">
                            <h3 className="">My name IS </h3>
                        </div>

                        <div className="col-md-6 col-lg-4 card align-items-center justify-content-center">
                            <h3 className="">My name IS </h3>
                        </div>


                    </div>
                </div>
            </div>
            */}

        </>
    );
};

export default Contact;
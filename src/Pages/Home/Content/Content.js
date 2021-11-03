import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

const Content = () => {
    return (
        <div className="text-start">
           
            
            {/* About */}
            <section className="my-4 py-4 contaner_bg">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-posts-img-1.jpg" alt="" className="img-fluid" />

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ps-4 mt-4 mt-lg-0">
                                <h1 className="fs-1">Company Profile</h1>
                                <h5 className="mt-4 mb-5">TravelStore is the largest independently owned travel agency headquartered in California, and consistently ranked among the top 50 largest in the United States.</h5>

                                <Link to="/about" className="text-decoration-none">
                                        <button className="btn btn-primary d-flex justify-content-between align-items-center">
                                            About Us
                                           
                                        </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Appoinment */}
                <div className="container py-4 my-4">
                    <div className="row align-items-center bg-info p-4">


                        <div className="col-lg-6 col-md-10 ">
                            <div className="appoinment-wrap mt-5 mt-lg-0 text-white">
                                <h2 className="mb-2 title-color">Making Adventure tours, activities affordable.</h2>
                                <h5 className="mb-4">Find an adventure, create a hobby that is related to nature in its vert pristiene shape for your goodness. Tempor incididunt ut labore. Et dolore magna aliqua. Quitts ipsum suspendisse ultrices gravida.</h5>
                                <Link to="/service">
                                    <button className=" btn btn-primary d-flex justify-content-between align-items-center">
                                        <span>Book Now</span> 
                                        <i className="ps-2 fas fa-chevron-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-10 ">
                        <div className="about-img">
                                <img src="http://swlabs.co/exploore/html/assets/images/homepage/about-us-1.jpg" alt="" className="img-fluid" />

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Content;
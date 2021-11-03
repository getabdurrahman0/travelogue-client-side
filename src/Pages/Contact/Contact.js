import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


import './Contact.css';

const Contact = () => {
    const {user}=useAuth();
    return (
        <div>
            <Header/>

            {/* Form */}
<div className="container">
            <section className="contact-form-wrap section">
                <div className="container contactus">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="text-md mb-2 contactus_title">CONTACT US</h2>
                                <div className="divider-top mx-auto my-4"></div>
                                <h5 className="mb-5">In our veritable endeavours to provide you the best travel experiences.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact form */}
            <div className="container contactustwo">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <form id="" className="py-4" method="" action="">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="name" value={user.name||user.displayName} id="name" type="text" className="form-control" placeholder="Your Full Name" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="email" value={user.email} id="email" type="email" className="form-control" placeholder="Your Email Address"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Purpose or Query Topic"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="phone" id="phone" type="text" className="form-control" placeholder="Your Phone Number"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group-2 mb-4">
                            <textarea name="message" id="message" className="form-control" rows="8" placeholder="Your Message"></textarea>
                        </div>

                        <div className="text-center">
                            <input className="btn btn-primary btn-round-full" name="submit" type="submit" value="Send Messege"></input>
                        </div>
                    </form>
                </div>
            </div>


            </div>
            
            <Footer/>
        </div>
    );
};

export default Contact;
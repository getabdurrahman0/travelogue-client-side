import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './About.css';

const About = () => {

    return (
        <div className="text-start">
            <Header/>
            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h2>ABOUT US</h2>
                    <div className="divider-top"></div>
                    <h5>Travel Center immensely values the happy smiles from satisfied travel experiences from its customers</h5>
                </div>
            </div>

            <div className="container p-4 my-4 aboutus">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="title-color text-right text-center">Hello. Our agency has been present for over 20 years in the market. We make the most of all our customers.</h2>
                    </div>
                    <div className="col-lg-8">
                        <p>We pride ourselves on the stringent measures we take in providing the safest and highly trusted travel products at the best price to our customers. Each and every Travel Expert at Travel Center is well aware about the measures taken in-house to ensure a safe and delightful travel experience for our customers. We at Travel Center work towards delivering well planned worldwide travel products that are unique, high in quality and assembled according to the desires of the customers, at incredible rates. Travel Center, being a leading Pan-European travel brand from the highly reputed Moresand Ltd with a cumulative travel experience of over three decades, is renowned for its most affordable and all-inclusive travel solutions.</p>
                       
                    </div>
                </div>
            </div>

            
            <Footer/>
        </div>
    );
};

export default About;
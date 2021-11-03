import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer p-4">
            <Container>
                <Row className="d-flex align-items-center">
                    <div className="col-md-6 text-start">
                        <div>
                            <div>
                            <h1 className='title'>Travelogue</h1>
                            </div>
                            
                            <p>A tourist attraction is a place of interest where tourists visit, typically for its inherent or an exhibited natural or cultural value, historical significance, natural or built beauty, offering leisure and amusement.</p>

                        </div>
                    </div>
                    <div className="col-md-6 align-items-start">
                    <div className="row ">
            <p className="text-light">Subscribe now for latest Update</p>
            <button class="btn btn-secondary btn-sm">Subscribe</button>
          
        </div>
                    </div>
                </Row>
                <Row>
                    <div className="copyright">
                        <span>&copy;All rights reserved by Abdur Rahman | 2021 </span>
  
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
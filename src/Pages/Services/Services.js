import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Services.css';

const Services = () => {
    // const {packages}=useAuth();
    const [pakages,setPakages] = useState([])
    useEffect(()=>{
        axios.get("https://limitless-meadow-45765.herokuapp.com/allpakages")
        .then(data=>{
            setPakages(data.data);
        })
    },[])
    console.log(pakages);
    
    return (
        <div>

        <Header/>

            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h2>OUR PACKAGES</h2>
                    <div className="divider-top"></div>
                    <h1>Search your Holiday..</h1>
                </div>
            </div>

            <Container>
                <Row xs={1} md={2} className="g-4 my-4 py-4">
                    {pakages.map( pkg => 
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={pkg.img_1} height="350px" />
                            <Card.Body>
                            <Card.Title>{pkg.title}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to={`/service/${pkg._id}`}>
                                    <button className="btn btn-primary btn-sm"> View Details </button>
                                </Link>
                            </Card.Body>
                        </Card>
                        </Col>
                    )}
                </Row>
            </Container>

            <Footer/>
        </div>
    );
};

export default Services;
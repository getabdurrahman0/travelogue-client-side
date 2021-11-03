import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Content from '../Content/Content';
import Slider from '../Slider/Slider';


const Home = () => {
    const [packages,setPackages]=useState([]);
    const [search, setSearch] = useState("");
    const [results,setResults] = useState([]);
    const handleInput = (e) => {
        setSearch(e.target.value);
      };
      const handleSearch = () => {
          axios.get(`https://limitless-meadow-45765.herokuapp.com/searchPakage?search=${search}`)
          .then(res=>setResults(res.data))
        console.log("hello bro");
      };

    // Load Services
    useEffect(()=>{
        axios.get('https://limitless-meadow-45765.herokuapp.com/allpakages')
        .then(res=>{
            setPackages(res.data)
        })
    },[])

    return (
        <div>
            <Header/>

            {/* slider */}
           
            <Slider/>

            
            {/* slider End */}

            {/* Packages */}

            {/* Services */}
                <Container>
                    <Row xs={1} md={3} className="g-4 my-4 py-4">
                        {packages.slice(0,6).map(service => (
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={service.img_1} width="250px" height="200px"/>
                                <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>
                                        {/* {`${service.description.slice(0,150)}...`} */}
                                    </Card.Text>
                                    <Link to={`/service/${service._id}`}>
                                        <button className="btn btn-primary btn-sm"> View Details </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            </Col>)
                        )}
                    </Row>
                </Container>
            {/* Packages */}
            <Content/>
            <Footer/>
        </div>
    );
};

export default Home;
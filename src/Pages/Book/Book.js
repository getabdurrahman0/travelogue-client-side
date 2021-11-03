import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Book.css';
import Accordion from 'react-bootstrap/Accordion'


const Book = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [item, setitem] = useState({})
    useEffect(() => {
        axios.get(`https://limitless-meadow-45765.herokuapp.com/package/${id}`)
        .then(res=>{
            setitem(res.data)
        })
    }, [id])
    
    
    const {register,handleSubmit, formState: { errors },reset} = useForm();
      const onSubmit = (data) => {
          console.log(data);
          data.status = "Pending";
          data.img = item?.img_1;

          axios.post(`https://limitless-meadow-45765.herokuapp.com/myBooking`,data)
          .then(res=>{
              if(res.data.acknowledged){
                alert(`Thank you ${user.displayName}. Your Booking Number ${res.data.insertedId} `)
                reset()
              }
          });
          
      };

    return (
        <>
        <Header/>

        <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    
                    <h1>BOOK NOW</h1>
                    <div className="divider-top"></div>
                    <h3>Book</h3>
                </div>
            </div>


            <Container className="my-4 pb-4">
                <Row className="d-flex align-items-center">
                    <div className="col-md-6 bookHone">

                        <h1>DAY BY DAY</h1>

                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>DAY #1 </Accordion.Header>
                            <Accordion.Body>
                            Departure at the airport and arrival at the hotel
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>DAY #2 </Accordion.Header>
                            <Accordion.Body>
                            Visit the main museums and lunch included
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>DAY #3 </Accordion.Header>
                            <Accordion.Body>
                            Excursion in the natural oasis and picnic
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>DAY #4 </Accordion.Header>
                            <Accordion.Body>
                             Transfer to the airport and return to the agency
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-info my-2 p-4 w-80 rounded mx-auto" >
                            <h2 className="text-light">Book Now</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">

                                    <div className="col-md-6">
                                        <input
                                            {...register("name")}
                                            value={user.displayName}
                                            placeholder="Name"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            {...register("email")}
                                            value={user.email}
                                            placeholder="Email"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            {...register("phone")}
                                            placeholder="Phone"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            {...register("address")}
                                            placeholder="Address"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-12">
                                    <input
                                            {...register("package")}
                                            value={item?.title}
                                            placeholder="Package"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            {...register("type")}
                                            value={item?.type}
                                            placeholder="Type"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>


                                    <div className="col-md-6">
                                        <input
                                            type="date"
                                            {...register("date")}
                                            placeholder="Date"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>
                            </div>
                            
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Book Now" className="btn btn-primary w-25" />
                            </form>
                                

                            </div>
                           
                    </div>
                </Row>
            </Container>
        <Footer/>
        </>
    );
};

export default Book;
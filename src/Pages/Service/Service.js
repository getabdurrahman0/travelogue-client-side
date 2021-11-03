import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Service.css';

const Service = () => {
    const {id}=useParams();
    const [item,setItem] = useState({})
    useEffect(()=>{
        axios.get(`https://limitless-meadow-45765.herokuapp.com/package/${id}`)
        .then(res=>{
            setItem(res.data);
        })
    },[id])
    return (
        <>
        <Header/>
        <div className="section-header">
            <div className="d-flex justify-content-center align-items-center flex-column"> 
                <h3>Package Details</h3>
                <div className="divider-top"></div>
                <h1>{item.title}</h1>
            </div>
        </div>

        
        <section className="my-4 py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="department-img">
                            <img src={item.img_1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="text-start mt-5">
                            <h3 className="text-md">{item.title}</h3>
                            
                            <p className="lead">{item.description}</p>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10"></div>
                        <div className="my-4">
                            <Link to={`/book/${item._id}`}>
                                <button className="btn btn-primary"> Book Now 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
        <Footer/>
        </>
    );
};

export default Service;
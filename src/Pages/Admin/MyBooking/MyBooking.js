import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import'./MyBooking.css';

const MyBooking = () => {
    const {user} = useAuth();
    const [myBookings,setmyBookings] = useState([])
    useEffect(()=>{
        axios.get(`https://limitless-meadow-45765.herokuapp.com/myBooking/${user?.email}`)
        .then(res=>{
            setmyBookings(res.data);
            
        })
    },[user?.email])

    const handleDelete=id=>{
        const proceed = window.confirm("Are you sure ? you want to delete ?")
        if(proceed){
            axios.delete(`https://limitless-meadow-45765.herokuapp.com/myBooking/${id}`)
            .then(res=>{
                if(res.data.acknowledged){
                alert("Delete Done")
                }
                const remain = myBookings.filter(book=>book._id !== id)
                setmyBookings(remain)
            })
        }
        
    }
    console.log(myBookings);
    return (
        <div>
            <h1 className="myBooking_title">My Bookings </h1>

            <div className="row">
                    {
                        myBookings.map(book=> <div className="col-md-5 m-2 rounded booking-bg">
                            <div className="row d-flex align-items-center p-2">
                                <div className="col-md-4">
                                    <img src={book.img} alt="" width="150px" className="rounded" />
                                </div>
                                <div className="col-md-8">
                                    <h5>{book.package}</h5>
                                    <p>{book.email}</p>
                                    <h5 className="status_title">Status: {book.status}</h5>
                                    <button
                                    onClick={()=>handleDelete(book._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default MyBooking;
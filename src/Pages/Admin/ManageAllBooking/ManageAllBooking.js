import axios from 'axios';
import React, { useEffect, useState } from 'react';
import'./ManageAllBooking.css'

const ManageAllBooking = () => {
    const [allBookings,setAllBookings] = useState([])
    useEffect(()=>{
        axios.get(`https://limitless-meadow-45765.herokuapp.com/allBookings`)
        .then(res=>{
            setAllBookings(res.data);
        })
    },[])
    
    // Approve
    const handleApprove = id =>{
        axios.put(`https://limitless-meadow-45765.herokuapp.com/bookingUpdate/${id}`,{})
        .then(res=>{
            console.log(res);
        })
    }

    // Delete
    const handleDelete=id=>{
        const proceed = window.confirm("Are you sure ? you want to delete ?")
        if(proceed){
            axios.delete(`https://limitless-meadow-45765.herokuapp.com/myBooking/${id}`)
            .then(res=>{
                if(res.data.acknowledged){
                alert("Delete Done")
                }
                const remain = allBookings.filter(book=>book._id !== id)
                allBookings(remain)
            })
        }
    }
    return (
        <div>
            <h2 className="myBooking_title">Manage All Bookings</h2>

            <div className="row">
                    {
                        allBookings.map(book=> <div className="col-md-5 m-2 booking-bg rounded">
                            <div className="row d-flex align-items-center p-2">
                                <div className="col-md-4">
                                    <img src={book.img} alt="" width="150px" className="rounded" />
                                </div>
                                <div className="col-md-8">
                                    <h5>{book.package}</h5>
                                    <p>{book.email}</p>
                                    <button className="btn btn-success" id="fixbtn" onClick={()=>{handleApprove(book._id)}}>Make Approved</button>
                                    <button onClick={()=>handleDelete(book._id)} className="btn btn-danger">cancel</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

        </div>
    );
};

export default ManageAllBooking;
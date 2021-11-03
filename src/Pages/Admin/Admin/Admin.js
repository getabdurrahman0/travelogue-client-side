import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AddPackage from '../AddPakage/AddPackage';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';
import './Admin.css';

const Admin = () => {
    const {user} = useAuth()
    const [control, setControl] = useState("myBookings");
    return (
        <div>
            <Header/>
                <div className="admin-container">
                    <div className="dashboard">
                        <div className="admin-box">
                        <div className="row admin-container">
                            <div className="col-md-3 ">
                            <div className="admin-area py-3">
                                <h6>Dashboard</h6>
                                <div>
                                    <p>{user.displayName}</p>
                                </div>
                                <div className="all-menu mt-5">
                                    <ul>
                                        <li
                                            onClick={() => setControl("myBookings")}
                                            className="admin-menu p-2"
                                        >
                                            My Bookings
                                        </li>
                                        <li
                                            onClick={() => setControl("allBooking")}
                                            className="admin-menu p-2"
                                        >
                                            Manage All Bookings
                                        </li>
                                        <li
                                            onClick={() => setControl("addpackage")}
                                            className="admin-menu p-2"
                                        >
                                            Add A New Package
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-9 text-center  text-center">
                            {control === "myBookings" && <MyBooking></MyBooking>}
                            {control === "allBooking" && <ManageAllBooking></ManageAllBooking>}
                            {control === "addpackage" && <AddPackage></AddPackage>}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Admin;
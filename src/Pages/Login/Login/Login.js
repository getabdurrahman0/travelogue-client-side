import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';

const Login = () => {
    const {handleGoogleSIgnIn}=useAuth()
    const location = useLocation();
    const histry = useHistory();
    const reDirect_uri = location.state?.from || '/home';
    const [error,setError] = useState('');
    
    
    // Google
    const handleGoogle=()=>{
        handleGoogleSIgnIn()
        .then(result=>{
              histry.push(reDirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }


    return (
        <>
        <Header/>
            <div className="bg-img my-4 p-4 w-50 rounded mx-auto d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
                <button 
                    onClick={handleGoogle} 
                    className="btn btn-light">
                    <span className="d-flex align-items-center">
                        <span>Login with Google</span>
                        <i className="fab fa-google px-2"></i>
                    </span>
                </button>

            </div>
            {
                error && <h3 className="text-danger">Error: {error}</h3>
            }
            
        <Footer/>
        </>
    );
};

export default Login;
import React from 'react';
import { UserAuth } from '../context/GoogleAuth';
import { useNavigate } from 'react-router-dom';
import Form from "../components/Form"

const VideoTest = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = async () => {
    try {
      navigate('/Main')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='body1'>
      <div className="area" >
                        <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                        
            
        <div className="login-card">
            
            <div>
              <button onClick={handleSignOut} className="logoutBtn">
                Logout
              </button>
              <button onClick={handleBack} className="logoutBtn">
                Back
              </button>
            </div>
            
            
        </div>
        
        
      </div >
    </div>
  );
};

export default VideoTest;
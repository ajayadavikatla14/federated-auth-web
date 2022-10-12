import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const navigate = useNavigate();

  const ContinueClicked = () => {
    window.close();
    navigate('/welcome');
  };
  return (
    <>
      <div>Logged In</div>
      <div className="continue">
        <button 
        onClick={ContinueClicked}>
          Continue
        </button>
      </div>
    </>
  )
}

export default Signin;
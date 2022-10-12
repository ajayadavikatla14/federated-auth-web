import React from 'react';
import { Link  } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
        <div style={{'textAlign':'center'}}>Welcome User..!!!</div>
        <Link to='/'>Go Back</Link>
    </>
  )
}

export default Welcome
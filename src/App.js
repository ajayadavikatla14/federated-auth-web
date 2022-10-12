import React from 'react';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Signup /> } />
            <Route path='/logged' element={ <Signin /> } />
            <Route path='/welcome' element={ <Welcome /> } />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
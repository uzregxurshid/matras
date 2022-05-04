import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home';
const Rut = () => {
  return (
    <>
    
    <Routes>
       <Route index element={<Home/>}/>
    </Routes>

    </>
    )
}

export default Rut
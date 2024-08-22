import React, { useState } from 'react'
import {Routes,Route } from 'react-router-dom'
import Frontend from './Frontend'
// import Dashboard from './Dashboard'
import Auth from './Auth'

import Header from '../Components/Header'
import Footer from '../Components/footer'
export default function Routers() {
  const[isAuth,setisAuth]=useState(false);
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/*' element={<Frontend/>}/>
        <Route path='/Auth/*' element={<Auth/>}/>
        <Route path='*' element={<h1>page is not founding</h1>}/>
    </Routes>
    <Footer/>
    </>
  )
}

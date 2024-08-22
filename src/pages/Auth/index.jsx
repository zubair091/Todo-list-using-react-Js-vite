import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'


export default function Auth() {
  return (
    <Routes>
      <Route path='/*' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
  )
}

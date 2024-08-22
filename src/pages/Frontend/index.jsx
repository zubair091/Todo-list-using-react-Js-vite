import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
// import Contact from './Contact'
import About from './About'
import Todo from './Todo'

export default function Frontend() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Todo' element={<Todo/>}/>
        
    </Routes>
  )
}

import React from 'react'
import { Router ,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Tapbar from './Tapbar'

export default function Header() {
  return (
    <>
    <Tapbar/>
    <Navbar/>
    </>
  )
}

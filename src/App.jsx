// import './App.scss'
import Routers from './pages/Routes'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 

  return (
    <>
    <DndProvider backend={HTML5Backend}>
      <Routers/>
      <ToastContainer
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      ></ToastContainer>
      </DndProvider>
    </>
  )
}

export default App

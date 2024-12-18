import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'

//PAGES
import Login from "./pages/Login"; 

import Menu from "./components/Menu"

// import Navbar from './components/Navbar'

function App() {
    const user = false; 

  return (
    <>
      <Menu />
      <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      
     </Routes>
      {/* NAVBAR */}
      {/* SEARCHBAR */}
      {/* PRODUCTS LIST */}
    </>
  )
}

export default App

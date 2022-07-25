import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Mapcard from './components/Mapcard'
import Login from './pages/login'
import Register from './pages/register'
import Locations from './Locations'
import Location from './Location'
import Home from './pages/Home'

export default function App() {
  return(
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} /> {/* element e path sono prop --> metodo per passare dei dati ai componenti */}
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/mapcard" element={<Mapcard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  )
}
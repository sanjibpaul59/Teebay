import React from 'react'
import HomePage from './components/HomePage'
import SignIn from './components/User/SignIn'
import SignUp from './components/User/SignUp'
import About from './components/About'
import Products from './components/Products/AllProducts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeebayNavbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TeebayNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

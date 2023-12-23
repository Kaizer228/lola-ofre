import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../src/Components/Header'
import Hero from '../src/Components/Hero'
import About from '../src/Components/About'
import Product from '../src/Components/Product'
import Feedback from './Components/Feedback'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero/>
    <About/>
    <Product/>
    <Feedback/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)

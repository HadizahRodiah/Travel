import './App.css'
import React from 'react'
import  Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Review from './Review.jsx'
import Home from './Home.jsx'
import Reserve from './Reserve.jsx'
import Service from './Service.jsx'
import Iml from './assets/Iml.jpg'

function App() {
  return (
   < div className='overflow-x-hidden'>
   <div>
    <img src={Iml} className='w-screen h-screen absolute opacity-50 mb-20'/>
    <Nav/>
    <Home/>
    <Service/>
   </div>
<Reserve/>
<Review/>
<Footer/>
    </div>
  )
}

export default App

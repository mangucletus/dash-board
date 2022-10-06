import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import GetHelp from './pages/GetHelp';


// Navar and sidebar are excluded from the router
const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Sidebar/>

          <div className='mainContent'>
            <Routes>
              <Route path='/' element={<Home title ='Home Page'/>} />
              <Route path='/contact' element = {<Contact title='Contact Page' date='10-07-2022'/>}/>
              <Route path='/get-help' element = {<GetHelp title ='Get help'/>}/>
            </Routes>
          </div>
    </div>
    
    </>

  )
   
}

export default App



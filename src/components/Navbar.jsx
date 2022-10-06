import React from 'react'
import brm from './brm.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={brm} alt='brm' className='brm-logo'/>
        <div className='links'>
            <Link  to='/' className='navigationLink'> Home</Link>
            <Link to='/contact' className='navigationLink'>Contact</Link>
            <Link to='/get-help' className='navigationLink'>Get Help</Link>
        </div>
    </div>
  )
}

export default Navbar
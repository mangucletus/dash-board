
import React from 'react'
import './Sidebar.css';
import amazon from './amazon.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <button>
        <img src={amazon} alt='amazon' className='amazon-logo' /><span>Amazon</span>

      </button>
      <button>
      <img src={amazon} alt='amazon' className='amazon-logo' /><span>Amazon</span>

      </button>
      <button>
      <img src={amazon} alt='amazon' className='amazon-logo' /><span>Amazon</span>

      </button>
      
    </div>
    
  )
}

export default Sidebar

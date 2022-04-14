import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className='head_container'>
        <ul>
          
          <li><a href="#"className='links'>Home</a></li>
          <li><a href="#" className='links'>Contact</a></li>
          <li><a href="#" className='links'>News</a></li>
          <li><a href="#" className='links'>About</a></li>
          <li className='active'>Portfolio</li>
        </ul>
      
        
    </div>
  )
}

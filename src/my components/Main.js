import React from 'react'
import './Main.css';
import resume from './Affan cv.pdf'


export const Main = () => {
  return (
    <div className='main_container'>
      <div className="img_div">
      <img src={require('./affan.jpg')} height={350} width = {350} className = 'main_img'/>
      </div>
      <p className='main_para'>My Name Is Shaikh Mohammad Affan <br />
      I Am From Mumbai. Currently Joined As A Trainee Engineer <br />
      At MindBowser </p>
      <button  className='main_btn'> <a href={resume} download= "Affan Resume.pdf"> Download CV </a></button>

    </div>
  )
}

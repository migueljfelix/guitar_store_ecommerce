import React from 'react'
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>This project was done in a learning environment</p>
      <p className='icons'>
        <a href='https://github.com/migueljfelix/' target="_blank"><AiOutlineGithub/></a>
        <a href='https://linkedin.com/in/migueljfelix' target="_blank"><AiFillLinkedin/></a>
      </p>
      
    </div>
  )
}

export default Footer
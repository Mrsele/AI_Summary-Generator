import React from 'react';
import {logo } from '../assets';
const Hero = () => {
  return (
  <header className='w-full flex justify-center items-center flex-col'>
  <nav className='flex justify-between items-center w-full mb-10 pt-3'>
  <img src={logo} alt='logo' className='w-28 object-contain'/>
  <button 
   type="button" 
   onClick={()=>windows.open('https://github.com')} className="black_btn">
   Github
   </button>
  </nav>
  <h1 className='head_text'>
  Summerize Articles With <br className='max-md:hidden'/>
  
  <span className='orange_gradient'>OPen AI GPT</span>
  </h1>
  <h2 className='desc'>Simplify thing s kslnfskdn</h2>
  </header>
  )
}

export default Hero
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

    function Buttonclick(){
        const element = document.querySelector('.waitlist-container');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
         
    }
   

  return (
    <div className='Hero-container'>
        <h1 className='heading'>The First Mailing Server Built for AI Agents.</h1>
        <h6 className='line'>Not another tool. A new layer of infrastructure.</h6>
        <p>Nevelire powers mailing, CRM, sales, and automation — natively for AI.
Your agents can now send, respond, generate leads, and close — all without you lifting a finger.</p>
        <button onClick={Buttonclick}>Reserve your @nevalire.com identity</button>

        <div className='Cards'>
            
        </div>
    </div>
  )
}

export default Hero
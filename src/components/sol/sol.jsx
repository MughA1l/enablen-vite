import React from 'react'
import '../sol/sol.css'
import method from '../assets/Method Insurance.png';
import TAIHS from '../assets/TAIHS logo.png' ;
import Upvisory from '../assets/Upvisory Logo.png';
import select from '../assets/selectability logo_LATEST.png';
const sol = () => {
  return (
    <div>
       <div class="white-section">
      <h2 class="section-heading">Organization we support</h2>
      <div class="image-row carousel1">
        <div>
          <img src={method}alt="Image 1"/>
          </div>
          <div>
          <img src={TAIHS} alt="Image 2"/>
          </div>
          <div>
          <img src={Upvisory} alt="Image 3"/>
          </div>
          <div>
          <img src={select} alt="Image 4"/>
          </div>
      </div>
  </div>
  
<div className='info'>
    <div class="info-container">
        <h2 class="info-heading">Nurturing Responsible Action</h2>
        <p class="info-text">At Enablen, our social responsibility is twofold. First, we believe in giving back to the environment and our communities. Second, we work with charities and small businesses to enable them to bring about those initiatives. You too can be part of this.</p>
    </div> 
    </div>
    </div>
  )
}

export default sol

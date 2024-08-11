import React from 'react'
import '../infosection/info.css'
import group100 from '../assets/Group 1000003568.png'
const info = () => {
  return (
    <div>
      <div class="info-section">
        <img src={group100} alt="Your Image" class="info-image"/>
        <div class="info-content">
            <h2 class="info-heading1">Our Impect</h2>
            <p class="info-text1">Enablen is committed to building a better, more inclusive world by helping those in need and supporting local communities. Since January 2021, we have supported local charities to secure over $6.5 million in funding since January 2021, played our role in securing valuable health infrastructure for our regional communities, supported local youth, and created awareness around sexual harassment in the workplace..</p>

            <p>When we work together, there's nothing that can stop us from achieving our goals.
            </p>
            <button class="info-more-btn"><a href="">Learn More</a></button>
        </div>
    </div> 
    

     <div class="info-container">
        <h2 class="info-heading1">Our Solutions</h2>
        <p class="info-text1">Our goal is to enable you with any funding, technological, or creative solutions you require so you can focus on what's important: getting your products and services out there!</p>
    </div>

     <div class="button-container1">
        <button class="nav-button1">Website Development</button>
        <button class="nav-button1">E-Learning</button>
        <button class="nav-button1">Grant Writing</button>
    </div> 
    </div>
  )
}

export default info

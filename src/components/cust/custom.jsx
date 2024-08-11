import React from 'react'
import '../cust/custom.css'
import vector190 from '../assets/Vector 190.png';
import ractangle305 from '../assets/Rectangle 305.png'
import ractangle44 from '../assets/Rectangle 4454.png'
const custom = () => {
  return (
    <div>
         <div class="custom-section">
        <div class="custom-content">
            <h2 class="custom-heading">Need help to secure funding?</h2>
            <p class="custom-text">We are here to help. Our end-to-end grant writing solutions are backed by a proven track record, with over $6.5 million secured for our clients since January 2021, and counting. Contact us today to learn more about our grant writing services..</p>
            <ul class="custom-points">
                <li><img src={vector190} alt="Point 1 Icon" class="point-icon"/>Understand and fully comply with guidelines</li>
                <li><img src={vector190} alt="Point 2 Icon" class="point-icon"/>Develop a compelling approach</li>
                <li><img src={vector190} alt="Point 3 Icon" class="point-icon"/>Draft high-quality responses and documentation</li>
                <li><img src={vector190} alt="Point 4 Icon" class="point-icon"/>End-to-end submission management</li>
               
            </ul>
            <button class="learn-more-btn">Learn More</button>
        </div>
        <img src={ractangle305} alt="Your Image" class="custom-image"/>
    </div> 


     <div class="product-display-section">
        <h2 class="product-display-heading">Product Display</h2>
        
        <div class="product-cards">
          <div class="product-card">
            <img src={ractangle44} alt="Product 1" class="product-image"/>
            <h3 class="product-name">Lorem ipsum dolor sconsec it</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitor sit ameor sit ame...</p>
           <hr/>
           <p>Category: Grant Writing</p>
          </div>
        
          <div class="product-card">
            <img src={ractangle44} alt="Product 2" class="product-image"/>
            <h3 class="product-name">Lorem ipsum dolor sconsec it</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitor sit ameor sit ame...</p>
           <hr/>
           <p>Category: Grant Writing</p>
          </div>
          <div class="product-card">
            <img src={ractangle44} alt="Product 3" class="product-image"/>
            <h3 class="product-name">Lorem ipsum dolor sconsec it</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitor sit ameor sit ame...</p>
           <hr/>
           <p>Category: Grant Writing</p>
          </div>
        </div>
       <button class="btn"> 
        <a href="/">View All</a></button>
  
      </div> 
    </div>
  )
}

export default custom

import React from 'react'

import '../arti/article.css'
import card1 from '../assets/card.png'
import copy1 from '../assets/copy1.png'
import copy2 from '../assets/copy2.png'
import copy3 from '../assets/copy3.png'

const article = () => {
  return (
    <div>
      <div class="what-our-clients-say-about-us">
        What Our Clients Say About Us
        </div>
        <div class="container-1">
          <div class="rectangle-310">
          </div>
          <div class="container-18">
            <div class="enablens-engineering-contributions-have-allowed-us-to-significantly-scale-and-simplify-our-training-and-workforce-development-initiatives-through-our-fully-customised-lms-solution-the-technology-responds-to-our-needs-as-opposed-to-implementing-something-off-the-shelf-that-we-would-be-forced-to-mould-our-operations-into-it-is-great-to-have-enablen-in-our-corner">
            Enablen's engineering contributions have allowed us to significantly scale and simplify our training and workforce development initiatives through our fully customised LMS solution. The technology responds to our needs, as opposed to implementing something off-the-shelf that we would be forced to mould our operations into. It is great to have Enablen in our corner.
            </div>
            <div class="container-20">
              <div class="image-1">
              </div>
              <div class="container-13">
                <div class="debra-burden">
                Debra Burden
                </div>
                <span class="chief-executive-officer-selectability-ltd">
                Chief Executive Officer, selectability Ltd
                </span>
              </div>
            </div>
          </div>
          <div class="rectangle-309">
          </div>
        </div> 
        


         <div class="articles-news">
            <h1>Articles and News</h1>
            <div class="content">
                
                 <div class="big-card">
                    <img src={card1} alt="Big Card Image"/>
                    <div class="big-card-content">
                        <span class="date">July 28, 2024</span>
                        
                        <p>Sed ut perspiciatis unde omnis iste tis unde om nis iste errorsit voluptatem accus..</p>
      
                        <div class="text-with-dots">
                          <span>Grant Writing</span>
                          <span class="dot"></span>
                          <span>Health Industry</span>
                        
                      </div>
                    </div>
                </div> 
      
               
                <div class="small-cards">
                    <div class="small-card">
                        <img src={copy1} alt="Small Card Image 1"/>
                        <div class="small-card-content">
                            <span class="date">July 28, 2024</span>
                            
                            <p>Sed ut perspiatie tis undis istes und.</p>
                            <div class="text-with-dots">
                              <span>Grant Writing</span>
                              <span class="dot"></span>
                              <span>Health Industry</span>
                            
                          </div>
                        </div>
                    </div>
                    <div class="small-card">
                        <img src={copy2} alt="Small Card Image 2"/>
                        <div class="small-card-content">
                            <span class="date">July 28, 2024</span>
                            
                            <p>Sed ut perspiatie tis undis istes und.</p>
                            <div class="text-with-dots">
                              <span>Grant Writing</span>
                              <span class="dot"></span>
                              <span>Health Industry</span>
                            
                          </div>
                        </div>
                    </div>
                    <div class="small-card">
                        <img src={copy3} alt="Small Card Image 3"/>
                        <div class="small-card-content">
                            <span class="date">July 28, 2024</span>
                           
                            <p>Sed ut perspiatie tis undis istes und.</p>
                            <div class="text-with-dots">
                              <span>Grant Writing</span>
                              <span class="dot"></span>
                              <span>Health Industry</span>
                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="main-button"><a href="/article">View Articles</a></button>
        </div>
    </div>
  )
}

export default article

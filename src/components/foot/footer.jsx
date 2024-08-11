import React from 'react'
import '../foot/footer.css';
import img1 from '../assets/phphonethin.png';
import img2 from '../assets/phenvelopesimplethin.png';
import img3 from '../assets/phmappinthin.png';
import insta from '../assets/instagram icon.png';
import group11 from '../assets/Vector.png';
import group100 from '../assets/Group 1000003464.png';
import group from '../assets/Group.svg';
const footer = () => {
  return (
    <div>
      <div className="group-1000003466">
        <div className="mask-group"></div>
        <div className="group-1000003458">
          <div className="container-15">
            <div className="supporting-our-charities-nfps-small-businesses">
              Supporting our charities, NFPs &amp; small businesses
            </div>
            <span className="our-number-one-goal-is-to-help-our-clients-succeed-in-community-building-and-environmental-preservation-it-all-starts-here-with-us-working-together-to-give-back-to-the-world-with-every-project-we-work-on">
              Our number one goal is to help our clients succeed in community-building and environmental preservation. It all starts here with us working together to give back to the world with every project we work on.
            </span>
          </div>
          <div className="frame-9">
            <span className="book-acall-2">
              <a href="/">Book a call</a>
            </span>
          </div>
        </div>
      </div> 

      <div className="container-12">
        <div className="container-16">
          <div className="group-3">
            <img className="group-4" src={group} alt="Group" />
            <p>your-vision-our-solutions-abetter-future</p>
          </div>
          <div className="container">
            <div className="phphone-thin">
              <img className="vector-20" src={img1} alt="Phone" />
            </div>
            <span className="container">
              (07) 4766 3626
            </span>
          </div>
        </div>
        <div className="container-26">
          <div className="links">
            Links
          </div>
          <div className="home-1">
            <a href="">Home</a>
          </div>
          <div className="blogs">
            <a href="">Blogs</a>
          </div>
          <span className="about-us-1">
            <a href="">About us</a> 
          </span>
          <span className="contect">
            <a href="/"> contact</a>
          </span>
        </div>
        <div className="container-2">
          <div className="group-1000003460">
            <div className="our-solutions-1">
              Our SOLUTIONS
            </div>
            <div className="grant-writing-1">
              Grant Writing
            </div>
            <div className="website-developemnt">
              Website Development
            </div>
            <span className="elearning-1">
              E-learning
            </span>
          </div>
          <div className="group-1000003461">
            <div className="resources">
              Resources
            </div>
            <div className="our-imapact">
              Our Impact
            </div>
            <div className="privacy-policy">
              Privacy Policy
            </div>
            <span className="terms-of-use">
              Terms of Use
            </span>
          </div>
        </div>
      </div> 
      <div className="container-23">
        <div className="container-27">
          <div className="container-5">
            <div className="phenvelope-simple-thin">
              <img className="vector-18" src={img2} alt="Envelope" />
            </div>
            <div className="phmap-pin-thin">
              <img className="vector-19" src={img3} alt="Map Pin" />
            </div>
          </div>
          <div className="container-14">
            <div className="adminenablen-com-au">
              admin@enablen.com.au
            </div>
            <span className="charters-towers-rd-mysterton-qld-4812">
              255 Charters Towers Rd, Mysterton QLD 4812
            </span>
          </div>
        </div>
      </div> 
      <div className="container-7">
        <div className="copyright-2022-enablen-pty-ltd-all-rights-reserved">
          Copyright © 2022 Enablen Pty Ltd. All Rights Reserved
        </div>
        <div className="social-icon">
          <div className="goggle">
            <img className="vector-14" src={insta} alt="Instagram" />
          </div>
          <div className="goggle">
            <img className="vector-14" src={group11} alt="Group 11" />
          </div>
          <div className="goggle">
            <img className="vector-14" src={group100} alt="Group 100" />
          </div>
        </div>
        <div className="qassure-no-23444">
          QAssure No. 23444
        </div>
        <div className="abn-72647388636">
          ABN 72 647 388 636
        </div>
      </div>  
    </div>
  )
}

export default footer

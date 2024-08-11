import React from 'react'
import '../nav/navbar.css'
import group from '../assets/Group.svg';
import carouselimg from '../assets/Rectangle 326.png';
const navbar = () => {
  return (
    <div>
       <header>
        
        <nav class="navbar">
            <div class="logo">
                <img src={group} alt="Logo"/>
            </div>
            
            <ul class="nav-links">
                
                <li class="dropdown">
                    <a href="#">Services</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">App Development</a></li>
                        <li><a href="#">SEO</a></li>
                    </ul>
                </li>
                <li><a href="#">Our Impect</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Articles</a></li>
            </ul>
            <button class="nav-button">Book a call</button>
        </nav>
        
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={carouselimg} class=" d-block w-100" alt="Slide 1"/>
                <div class="carousel-caption">
                  <h1>Queensland based</h1>
                  <h2>profit-for-purpose business consultants</h2>
                  <p>Building futures by supporting Australian charities and small businesses with funding solutions and technology consultancy</p>
                  <button class="btn "><a href="/">Book a call</a></button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={carouselimg} class="d-block w-100" alt="Slide 2"/>
                <div class="carousel-caption">
                  <h1>Queensland based</h1>
                  <h2>profit-for-purpose business consultants</h2>
                  <p>Building futures by supporting Australian charities and small businesses with funding solutions and technology consultancy</p>
                  <button class="btn"><a href="/">Book a call</a></button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={carouselimg} class="d-block w-100" alt="Slide 3"/>
                <div class="carousel-caption">
                  <h1>Queensland based</h1>
                  <h2>profit-for-purpose business consultants</h2>
                  <p>Building futures by supporting Australian charities and small businesses with funding solutions and technology consultancy</p>
                  <button class="btn "><a href="/">Book a call</a></button>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </header>
    </div>
  )
}

export default navbar

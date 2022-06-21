import React from "react";
import "../pages/home.css"


export default function Home(){

    return (
      <>
      <div class="full-page">
      <div class="navbar">
          <div>
              <a href='website.html'>Weathering WithYou</a>
          </div>
          <nav>
              <ul id='MenuItems'>
                  <li><a href='/'>Home</a></li>
                  <li><a href='#'>About Us</a></li>
                  <li><a href='#'>Services</a></li>
                  <li><a href='/registration'>Registration</a></li>
              </ul>
          </nav>
      </div>
      </div>
      </>
    )
} 


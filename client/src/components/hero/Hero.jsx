import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
 
  return (
    <div className="hero">
      <div className="hero-first">
        <div className="left-section">
          <h1>Welcome to Eldercare Kolkata</h1>
          <p>
            Providing compassionate and comprehensive eldercare services to ensure the well-being and happiness of your loved ones in Kolkata. Our dedicated team is here to support your family's needs with the utmost care and professionalism.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right-section">
          <img src="https://via.placeholder.com/300" alt="Eldercare Services" />
        </div>
      </div>
      <div className="hero-sec">
        <div className="card-grid">
          <div className="card">
            <img src="https://via.placeholder.com/60" alt="Health Care" />
            <h3>Health Care</h3>
            <p>
              Our health care services include regular check-ups, medication management, and emergency support to keep your loved ones healthy and safe.
            </p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/60" alt="Home Assistance" />
            <h3>Home Assistance</h3>
            <p>
              We offer home assistance services to help with daily activities, ensuring a comfortable and stress-free environment for your elders.
            </p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/60" alt="Social Engagement" />
            <h3>Social Engagement</h3>
            <p>
              Our programs focus on social engagement and recreational activities to keep your elders mentally active and socially connected.
            </p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/60" alt="24/7 Support" />
            <h3>24/7 Support</h3>
            <p>
              We provide 24/7 support to address any immediate needs and ensure peace of mind for both the elders and their families.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;

import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="choose-us">
        <div className='top'>
            <h1>Why Choose us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae ipsam aliquid aliquam reprehenderit dolore nemo quaerat veniam. Nihil, blanditiis.</p>
        </div>
      <div className="content">
      <div className="choose-left">
        <h2>Section Title</h2>
        <p>This is a paragraph with some example text for the first section.</p>

        <div className="description">
            <p>This is the description of the video. Below are some features:</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
            <button>Read More</button>
          </div>
      </div>
      <div className="choose-right">
        <div className="video-description">
          <div className="video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

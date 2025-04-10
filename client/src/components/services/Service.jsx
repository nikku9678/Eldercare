import React from 'react';
import './Service.css';

const services = [
  { id: 1, title: 'Health Care', description: 'Regular check-ups, medication management, and emergency support to keep your loved ones healthy and safe.', img: 'https://via.placeholder.com/60' },
  { id: 2, title: 'Home Assistance', description: 'Help with daily activities, ensuring a comfortable and stress-free environment for your elders.', img: 'https://via.placeholder.com/60' },
  { id: 3, title: 'Social Engagement', description: 'Programs focused on social engagement and recreational activities to keep your elders mentally active and socially connected.', img: 'https://via.placeholder.com/60' },
  { id: 4, title: '24/7 Support', description: 'Round-the-clock support to address any immediate needs and ensure peace of mind for both elders and their families.', img: 'https://via.placeholder.com/60' },
  { id: 5, title: 'Nutritional Guidance', description: 'Personalized dietary plans to ensure your elders receive the nutrition they need for a healthy lifestyle.', img: 'https://via.placeholder.com/60' },
  { id: 6, title: 'Physical Therapy', description: 'Professional physical therapy sessions to maintain and improve mobility and overall physical health.', img: 'https://via.placeholder.com/60' },
  { id: 7, title: 'Mental Health Support', description: 'Counseling and mental health services to support the emotional well-being of your elders.', img: 'https://via.placeholder.com/60' },
  { id: 8, title: 'Transportation Services', description: 'Safe and reliable transportation services for medical appointments, social outings, and daily errands.', img: 'https://via.placeholder.com/60' },
];

const Service = () => {
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <div className="s-card-container">
        {services.map(service => (
          <div key={service.id} className="s-card">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

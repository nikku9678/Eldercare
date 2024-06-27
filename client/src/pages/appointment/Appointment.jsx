import React, { useState } from 'react';
import './Appointment.css';
import axios from 'axios';
import { Base_url } from '../../config';
import toast from 'react-hot-toast';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${Base_url}/appointment/get-appointment`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(data);
      if (data.success) {
        toast.success('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setSuccessMessage('Message sent successfully');
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment">
      <div className="left-section">
        <img src="https://via.placeholder.com/600" alt="Appointment" />
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit} className="appointment-form">
          <h2>Get an Appointment</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Phone No:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Get Appointment'}
          </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Appointment;

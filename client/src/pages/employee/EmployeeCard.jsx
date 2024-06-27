import React from 'react';
import './Employee.css';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <img src={employee.image} alt={employee.name} className="employee-image" />
      <h3 className="employee-name">{employee.name}</h3>
      <p className="employee-role">{employee.role}</p>
      <p className="employee-address">{employee.address}</p>
      <p className="employee-contact">{employee.contact}</p>
    </div>
  );
};

export default EmployeeCard;

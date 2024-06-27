import React from 'react';
import EmployeeCard from './EmployeeCard';
import './Employee.css';

const employees = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    role: 'Manager',
    address: '123 Main St, Kolkata',
    contact: '123-456-7890',
  },
  // Add more employee objects here
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    role: 'Nurse',
    address: '456 Maple Ave, Kolkata',
    contact: '987-654-3210',
  },
  // Repeat this structure for a total of 10 employees
  {
    image: 'https://via.placeholder.com/150',
    name: 'Alice Brown',
    role: 'Caregiver',
    address: '789 Oak Dr, Kolkata',
    contact: '555-123-4567',
  },
  // more employees...
];

const Employee = () => {
  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
    </div>
  );
};

export default Employee;

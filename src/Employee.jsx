// src/Student.js
import React from 'react';

const Employee = ({ employee, index }) => {
    const { name, position, salary, status } = employee;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{position}</td>
            <td>{status === 'Active' ? salary : '-'}</td>
            <td>{status}</td>
        </tr>
    );
};

export default Employee;


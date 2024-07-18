
import React from 'react';
import Employee from './Employee';  
import './App.css';

const Employees = ({ employees }) => {
    return (
        <div>
            <hr/>
            <h1>EMPLOYEES</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Employee Names</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <Employee key={index} index={index + 1} employee={employee} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employees;

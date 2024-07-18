import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Employees from './Employees/';

const App = () => {
  const [count, setCount] = useState(0);

  const employees = [
    { name: 'Marc Kasayan', position: 'Manager', salary: 85000, status: 'Active' },
    { name: 'Mark Aniñon', position: 'Developer', salary: 76000, status: 'Active' },
    { name: 'Mark Lawas', position: 'Designer', salary: 92000, status: 'Active' },
    { name: 'Rodel Celis', position: 'Developer', status: 'Not Active' },
    { name: 'Jei Navarro', position: 'Manager', status: 'Not Active'  },
    { name: 'Mike Bustamante', position: 'Manager', salary: 79000, status: 'Active' },
    { name: 'Rexy Yangyang', position: 'Developer', salary: 88000, status: 'Active' },
    { name: 'Lebron James', position: 'Manager', salary: 71000, status: 'Active' },
    { name: 'Michael Jordan', position: 'Designer',  salary: 60000, status: 'Active' },
    { name: 'Jack Frost', position: 'Developer', salary: 79000, status: 'Active' }
  ];

  return (
    <div className="App">
      <h1>Mark Eliezon Aniñon</h1>
      <h2>Marc Aldwin B. Kasayan</h2>
      <Employees employees={employees} />
    </div>
  );
};

export default App;

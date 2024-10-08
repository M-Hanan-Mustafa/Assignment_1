// src/App.js
import React from 'react';
import Expenses from './components/Expenses';
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e3',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;

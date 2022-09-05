import React from 'react';
import './App.css';
import Customer from './components/Customer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ToDoList from './Components/ToDoList';
import Footer from './Components/Footer';
import './App.css';  

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
        <ToDoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;

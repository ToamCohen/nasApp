import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { useState } from 'react';
import { Container } from './components/Container';


function App() {
  // const [Home , setHome] = useState(true)
  // const [Search , setSearch] = useState(false)
  // const [Favorites , setFavorites] = useState(false)


  return (
    <Router>
      <NavBar />
      <Container />
    </Router>
    
  );
}

export default App;

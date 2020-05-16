import React from 'react';
import './App.css';
import Movies from './components/Movies/Movies';
import Header from './components/Header/Header';
import { MovieProvider } from './MovieContext';
import AddMovie from './components/AddMovie/AddMovie';

function App() {
  return (
    
    <div>
      <MovieProvider>
        <Header></Header>
        <AddMovie></AddMovie>
        <Movies></Movies>
      </MovieProvider>
    </div>
    
  );
}

export default App;

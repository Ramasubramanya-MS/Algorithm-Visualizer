import React from 'react';
import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
}from 'react-router-dom';
import logo from './logo.svg';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp'

const App = () => {
  return (
    <div className="App">
    <title>Sorting Visualizer</title>
      <h1><u>Sorting Algorithm Visualiser</u></h1>
      <SortingVisualizer></SortingVisualizer>
      <NavbarComp/>
      
    </div>

  );
}

export default App;

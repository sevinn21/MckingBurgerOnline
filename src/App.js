import React from 'react';
import './Burger.css'
import { Route, Router, Switch } from 'react-router-dom';
import Header from './Screen/Header';
import Counter from './Component/Counter';

const App = () => {
  return  (
    <>
    <div className="demo-header">
    <Header/>
    </div>
    <Counter />
     </>
  ) 
 
};

export default App;

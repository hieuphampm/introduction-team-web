import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Teaminfo from './components/Teaminfo'

export class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="Tea minfo" element={<Teaminfo />} />
        </Routes> 
      </BrowserRouter>
    );
  }
}

export default App

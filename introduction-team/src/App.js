import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Teaminfo from './components/Teaminfo'
import HieuInfo from './components/teaminfo/HieuInfo'

export class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="Teaminfo" element={<Teaminfo />} />
           <Route exact path='HieuInfo' element={<HieuInfo />} />
        </Routes> 
      </BrowserRouter>
    );
  }
}

export default App

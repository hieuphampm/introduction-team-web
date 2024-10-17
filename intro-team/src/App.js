import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Teamrule from './components/Teamrule'
import Teaminfo from './components/Teaminfo'
import HieuInfo from './components/teaminfo/HieuInfo'
import BaoInfo from './components/teaminfo/BaoInfo'
import KhoaInfo from './components/teaminfo/KhoaInfo'

export class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="Teaminfo" element={<Teaminfo />} />
           <Route exact path='Teamrule' element={<Teamrule />} />
           <Route exact path='HieuInfo' element={<HieuInfo />} />
           <Route exact path='BaoInfo' element={<BaoInfo />} />
           <Route exact path='KhoaInfo' element={<KhoaInfo />} />
        </Routes> 
      </BrowserRouter>
    );
  }
}

export default App

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Boolean from './components/Boolean';
import Videos from './components/Videos';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Video from './components/Video';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      {/* <Counter /> */}
      {/* <Boolean /> */}
      <Videos />

    </div>
    </BrowserRouter>
  );
}

export default App;

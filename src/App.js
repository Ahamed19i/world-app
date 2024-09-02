import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
        /> 
        <Route 
          path='/about'
          element={<About/>}
        />  
        <Route 
          path='*'
          element={<Home/>}
        /> 
      </Routes> 
    </HashRouter>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/maincontent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/maincontent" element={<MainContent/>}/>
        <Route path="/footer" element={<Footer/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import './index.css';
import Home from './pages/Home';
import About from './pages/About'
import Erreur from './pages/Erreur'
import Detail from './pages/Detail'
import Footer from './components/footer/footer';
import Header from './components/header/header';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
      root.render(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<div><Header /><Home /> <Footer /></div>} />
          <Route path='/about' element={<div><Header /><About /> <Footer /></div>} />
          <Route path={`/detail/:idHebergement`} element={<div><Header /><Detail /> <Footer /></div>} />
          <Route path='/*' element={<div><Header /><Erreur /> <Footer /></div>} />
        </Routes>
    </BrowserRouter>
      );




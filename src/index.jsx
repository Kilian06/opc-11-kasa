import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import './index.css';
import Home from './pages/Home';
import About from './pages/About'
import Erreur from './pages/Erreur'
import Detail from './pages/Detail'
import Layout from './components/Layout';


import { Routes, Route, BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
      root.render(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          {/* <Route path='/' element={<><Header /><Home /> <Footer /></>} /> */}

          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path={`/detail/:idHebergement`} element={<Layout><Detail /></Layout>} />
          <Route path='/*' element={<Layout><Erreur /></Layout>} />

        </Routes>
    </BrowserRouter>
      );




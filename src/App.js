import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs';
import JoinUs from './components/JoinUs';
import Donate from './components/Donate';
import Services from './components/services/Services';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';


function App() {


  return (
    <>
    <HashRouter>
      <ScrollToTop />
      <Navbar  />
      <div id="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/services/:slug" element={<Services />} />
                <Route path="/projects" element={<Projects />}/>     
                <Route path="/join-us" element={<JoinUs />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/donate" element={<Donate />}/>
              <Route path="*" element={<NoPage />} />
            </Routes> 
 
      </div>
      <Footer />
    </HashRouter>
    </>
  );
}

export default App;

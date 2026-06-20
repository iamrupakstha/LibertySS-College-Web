import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {  faArrowUp } from '@fortawesome/free-solid-svg-icons';
// pages
import Home from './pages/home/Home'

import MainLayout from './Layout/MainLayout';
import Spinner from './components/Spinner';
// overview
import About from './pages/overview/About'
import Academics from './pages/overview/Academics';
import Team from './pages/overview/Team';
import Message from './pages/overview/Message';
// programs
import Science from './pages/programs/Science';
import { Management } from './pages/programs/Management';
import HM from './pages/programs/HM';

import Facilities from './pages/Facilities/Facilities';


function App() {
  const [visible, setVisible] = useState(false);
  useEffect( () => {
    const toggleVisibility = () => {
        setVisible(window.scrollY > 200)
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return() => {
      window.removeEventListener('scroll', toggleVisibility)
    };
  })
  
  

  function scrolltoTop() {
    window.scrollTo({top:0, left: 0, behavior: 'smooth'})
  }
  return (
    <>
    <Router basename="/LibertySS-College-Web">
      <Routes>
        <Route  element={<MainLayout/>}>
            <Route path='/' element={<Home/>} ></Route> 

            {/* Overview */}
            <Route path='/about' element={<About/>} ></Route>

            <Route path='/academics' element={<Academics/>} ></Route>
            <Route path='/message' element={<Message/>} ></Route>
            <Route path='/team' element={<Team/>} ></Route>
            
            {/* Programs */}
            <Route path='/science' element={<Science/>} ></Route>
            <Route path='/management' element={<Management/>} ></Route>
            <Route path='/hm' element={<HM/>} ></Route>
  
        </Route>
      </Routes>
    </Router>
     <button className='scroll-btn' style={{visibility: visible ? "visible" : "hidden", opacity: visible ? 1 : 0}} onClick={scrolltoTop}>Scroll Up <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faArrowUp} /> </button>
    </>
  )
};

export default App

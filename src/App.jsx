import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainLayout from './Layout/MainLayout';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import Academics from './pages/Academics';
import {  faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Team from './pages/Team';
import Message from './pages/Message';
import Science from './pages/Science';
import { Management } from './pages/Management';
import HM from './pages/HM';
<<<<<<< HEAD
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
=======
>>>>>>> parent of f7efc22 (update-1)

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
            
<<<<<<< HEAD
            <Route path='/contact' element={<Contact/>} ></Route>
            <Route path='/facilities' element={<Facilities/>} ></Route>
=======
            <Route path='/resources' element={<Home/>} ></Route>
            <Route path='/gallery' element={<About/>} ></Route>
            <Route path='/contact' element={<Home/>} ></Route>
>>>>>>> parent of f7efc22 (update-1)
        </Route>
      </Routes>
    </Router>
     <button className='scroll-btn' style={{visibility: visible ? "visible" : "hidden", opacity: visible ? 1 : 0}} onClick={scrolltoTop}>Scroll Up <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faArrowUp} /> </button>
    </>
  )
};

export default App

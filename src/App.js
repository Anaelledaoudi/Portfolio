import myImg from './assets/logo.png';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Skills from './component/Skills';
import Work from './component/Work';
import Contact from './component/Contact';


function App() {
  return (
    <>
     <div class="navbar-fixed">
     <nav>
    <div class="nav-wrapper grey darken-3">
      <a href="#" class="brand-logo"><img src={myImg} className='logo'></img></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home </a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
     </div> 
     <Home/>
     
     <div id='about'>
      <About />
     </div>

     <div id='skills'>
      <Skills/>
     </div>
     
     <div id='work'>
       <Work/>
     </div>

     <div id='contact'>
      <Contact/>
     </div>
     
  {/* <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/link' element={<App />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/redirect' element={<Redirect/>} />
      <Route path='/addEvent' element={<AddEvent/>} />
      <Route path='/calEvent' element={<Example/>} />
    </Routes> */}
    </>
   
  );
}

export default App;

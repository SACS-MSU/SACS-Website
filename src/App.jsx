
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './layout/Home';
import About from './layout/About';
import Contact from './layout/Contact';

function App() {
  return (
      
      <div className=''>  
        <nav className='flex items-center p-4'>
          <h1 className='text-2xl font-semibold'>SACS</h1>
          <ul className='flex gap-4 p-4  ml-auto'>
            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Events">Events</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <div className='p-4'>
          <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
       
          
      </div>  );}
export default App;


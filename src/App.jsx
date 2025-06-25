
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './layout/Home';
import About from './layout/About';
import Contact from './layout/Contact';
import Events from './layout/Events';
import Team from './layout/Team';
import NavBar from './components/NavBar';

function App() {
  return (
      
      <div className={'flex flex-col h-full'}>  
        <NavBar />

        <div className='flex flex-col  flex-1 overflow-y-auto'>
          <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />

          </Routes>
        </div>
       
      </div>  );}
export default App;
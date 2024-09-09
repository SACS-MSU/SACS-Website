import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='flex items-center p-2 border-b-2'>
          <h1 className='text-2xl font-semibold'>SACS</h1>
          <ul className='flex gap-4 p-2  ml-auto '>
            
            <li className=' hover:text-blue-700 transition duration-300 ease-in-out'>
              <Link to="/">Home</Link>
            </li>
            <li className=' hover:text-blue-700 transition duration-300 ease-in-out'>
              <Link to="/About">About Us</Link>
            </li>
            <li className=' hover:text-blue-700 transition duration-300 ease-in-out'>
              <Link to="/team">Meet the team</Link>
            </li>
            <li className=' hover:text-blue-700 transition duration-300 ease-in-out'>
              <Link to="/Events">Events</Link>
            </li>
            <li className=' hover:text-blue-700 transition duration-300 ease-in-out'>
              <Link to="/Contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
  )
}

export default NavBar
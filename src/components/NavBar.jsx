import { Link, useLocation } from 'react-router-dom'


const NavBar = () => {
        const location = useLocation();

        return (
            <nav className={`flex items-center p-2  ${location.pathname === '/' ? 'bg-blue-700' : ''}`}>
                <h1 className={`text-2xl font-semibold ${location.pathname === '/' ? 'text-white': ''}`}>SACS</h1>
                <ul className='flex gap-4 p-2  ml-auto '>
                    <li className={`  ${location.pathname === '/' ? 'text-white': ''} `}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`  ${location.pathname === '/' ? 'text-white': ''} `}>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className={`  ${location.pathname === '/' ? 'text-white': ''} `}>
                        <Link to="/team">Meet the team</Link>
                    </li>
                    <li className={`  ${location.pathname === '/' ? 'text-white': ''} `}>
                        <Link to="/Events">Events</Link>
                    </li>
                    <li className={`  ${location.pathname === '/' ? 'text-white': ''} `}>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
}

export default NavBar;
  
import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import logo from "../assets/images/sacs-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';


const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center my-auto justify-center h-full text-center gap-4'>
        <FontAwesomeIcon icon={faWarning} size='3x' color='red' className='text-6xl text-gray-500' />
        <h1 className='text-5xl font-medium'>404 - Page Not Found</h1>
        <p className='text-2xl'>Sorry but this page doesn't exist</p>
        
        <motion.span
        whileHover={{ scale: 1.1, color:'white', backgroundColor: 'blue' }}
        className='rounded-full px-3 py-1 bg-blue-500 underline text-lg'>
            <Link to="/">
                Back to Home
            </Link>
        </motion.span>
        
    </div>
  )
}

export default NotFoundPage
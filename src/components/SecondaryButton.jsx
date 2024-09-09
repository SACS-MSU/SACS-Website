
const SecondaryButton = ({text}) => {
  return (
    <button className='h-10 border-2 border-blue-700   text-blue-700 hover:bg-blue-700 hover:text-white font-semibold py-2 px-4 rounded transition-colors duration-500 ease-in-out'>
    {text}
   </button>
    
  )
}

export default SecondaryButton
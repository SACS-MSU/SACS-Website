

const Button = ({text}) => {

  return (
    <button className={`${location.pathname === '/' ? 'bg-white text-blue-700 transition-transform duration-500 ease-in-out transform hover:scale-110' : ''}  text-white font-semibold py-2 px-4 rounded`}>
     {text}
    </button>
  )
}



export default Button
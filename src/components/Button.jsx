

const Button = ({text}) => {

  return (
    <button className={`bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-500 ease-in-out`}>
     {text}
    </button>
  )
}



export default Button
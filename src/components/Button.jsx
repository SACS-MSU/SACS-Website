const Button = ({ text }) => {
  const isHomePage = location.pathname === '/';

  return (
    <button className={`font-semibold py-2 px-4 rounded transition-transform duration-500 ease-in-out transform hover:scale-110 ${isHomePage ? 'bg-white text-blue-700' : 'bg-blue-700 text-white'}`}>
      {text}
      
    </button>
  );
};


export const LinkButton =({link,text}) =>{
  const isHomePage = location.pathname === '/';
  return(
    <button className={`font-semibold py-2 px-4 rounded transition-transform duration-500 ease-in-out transform hover:scale-110 ${isHomePage ? 'bg-white text-blue-700' : 'bg-blue-700 text-white'}`}><a href={link} target="_blank">{text}</a></button>
  )
}
export default Button;
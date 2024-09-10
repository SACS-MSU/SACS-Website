const SecondaryButton = ({ text }) => {
  const isHomePage = location.pathname === '/';
  return (
    <button
      className={`h-10 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold py-2 px-4 rounded transition-transform duration-500 ease-in-out transform hover:scale-110 ${
        isHomePage ? ' text-white border-white' : ''
      }`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
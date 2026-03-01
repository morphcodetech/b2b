const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`bg-primary text-white px-4 py-2 rounded-md transition duration-300 hover:bg-[#e85b38] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
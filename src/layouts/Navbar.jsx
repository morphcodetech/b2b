import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 py-3 px-6 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Area */}
        <div className="text-xl font-bold text-brand">Fastkart</div>

        {/* Short Routing Links */}
        <div className="flex gap-6 items-center">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-brand transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            to="/seller-detail" 
            className="text-brand border-b-2 border-brand font-medium"
          >
            Seller Details
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
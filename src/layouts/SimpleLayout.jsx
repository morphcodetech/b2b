import { Link, Outlet } from "react-router-dom";

const SimpleLayout = () => {
  return (
    <>
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">FastKart</h1>
          <Link
            to="/"
            className="text-primary font-medium hover:underline"
          >
            Seller Page
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default SimpleLayout;
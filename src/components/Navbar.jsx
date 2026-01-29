import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-orange-600 shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">

        <Link to="/" className="text-white text-xl font-bold">
          MovieApp
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-orange-200"
            >
              Home
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;

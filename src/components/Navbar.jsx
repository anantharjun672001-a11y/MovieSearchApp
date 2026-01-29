import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue border-b border-gray-200">
      <div className="max-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link to="/" className="text-2xl font-bold text-orange-600">
          MovieApp
        </Link>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-700 hover:text-orange-600"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

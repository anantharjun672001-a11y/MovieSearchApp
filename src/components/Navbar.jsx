import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="sticky top-0 z-50 bg-cyan-500 shadow-md">
      <div className="max-7xl mx-auto p-4 flex items-center justify-between">

        <Link to="/" className="text-white text-xl font-bold">
          MovieApp
        </Link>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
              w-64
              px-4 py-2
              rounded-full
              bg-white
              text-gray-900
              placeholder-gray-500
              shadow-sm
              border border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-orange-300
            "
        />
        <Link to="/favorites" className="text-white font-bold">
         Favorites 
        </Link>
        

      </div>
    </nav>
  );
};

export default Navbar;

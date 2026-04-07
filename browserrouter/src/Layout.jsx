import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
          MySite
        </h1>

        <div className="flex gap-10 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-yellow-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-yellow-400 transition duration-200"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-1 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
            Login
          </button>
          <button className="px-4 py-1 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
            Sign up
          </button>
        </div>
      </nav>

      <div className="flex-gap">
        <Outlet />
      </div>

      <footer className="bg-gray-900 text-white text-center py-3">
        <p>My Website Footer</p>
      </footer>
    </div>
  );
}

export default Layout;

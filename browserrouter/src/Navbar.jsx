import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
      : "text-white hover:text-yellow-300";

  return (
    <nav className="bg-[#0b1a2b] px-8 py-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <h1 className="text-yellow-400 font-bold text-xl">MySite</h1>

      {/* Links */}
      <div className="flex gap-15 mx-auto">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about-us" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact-us" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 ml-auto">
        <NavLink
          to="/login"
          className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

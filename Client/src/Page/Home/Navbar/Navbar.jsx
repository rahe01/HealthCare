import { NavLink } from "react-router-dom";
import { FaArrowUpRightDots } from "react-icons/fa6";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink>
        <button className="btn btn-ghost"> Home</button>
      </NavLink>
      <NavLink>
        <button className="btn btn-ghost"> Services</button>
      </NavLink>
      <NavLink>
        <button className="btn btn-ghost"> Blog</button>
      </NavLink>
      <NavLink>
        <button className="btn btn-ghost">About Us</button>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <img src="../../../../public/logo dark.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost">
            Apointment
            <FaArrowUpRightDots />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
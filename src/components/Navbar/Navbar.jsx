import { useState } from "react";
import { Link, NavLink } from "react-router";
import LogoImg from "../../assets/logo1.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import PropTypes from "prop-types";
const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/Location",
  },
];

const Navbar = ({handleOrderPopup}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[9999]">
      <div className="bg-gradient-to-r h-8 from-active to-secondary text-white">
        <div className="container center py-[4px] sm:block hidden">
          <div className="flex justify-around items-center gap-4">
            <p>30% off on the next booking</p>
            <p>Mobile: +213 649 4023 43</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={LogoImg} alt="Logo" className="h-16" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-active" : "")}
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-active" : "")}
                  to="/Blogs"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-active" : "")}
                  to="/Places"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Best Places
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-active" : "")}
                  to="/About"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </NavLink>
              </li>
              <li className="py-4 relative group cursor-pointer">
                <div className="dropdown flex items-center">
                  <span>Quick Link</span>
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-secondary to-active hover:bg-gradient-to-r hover:from-active hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full" onClick={() => {
                  handleOrderPopup();
                }}>
              Book Now
            </button>
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};
Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default Navbar;
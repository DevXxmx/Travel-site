import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/places",
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[60%] flex-col justify-between bg-white dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-4">
          <FaUserCircle size={50} className="text-secondary" />
          <div className="text-gray-500">
            <h1>Hello User</h1>
            <h2 className="text-sm text-start">Sign in</h2>
          </div>
        </div>

        <div className="text-black not-even:mt-12 mt-10">
          <ul className="space-y-4 text-xl">
            {navbarLinks.map(({ name, link }) => (
              <li key={name}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
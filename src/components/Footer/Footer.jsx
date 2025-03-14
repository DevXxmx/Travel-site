import Logofooter from "../../assets/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import footervd from "../../assets/video/footerVideo.mp4";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Best Places", link: "/places" },
  { title: "Blogs", link: "/blogs" },
];

const Footer = () => {
  return (
    <div className="relative overflow-hidden h-auto py-10">
      <video
        autoPlay
        loop
        muted
        className="h-full w-full absolute right-0 top-0 object-cover z-0"
      >
        <source src={footervd} type="video/mp4" />
      </video>
      <div className="flex justify-center items-center h-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-5 bg-white/75 backdrop-blur-sm rounded-t-xl px-6">
            <div className="md:col-span-2 py-3">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={Logofooter} alt="Logo" className="max-h-25" />
              </h1>
              <p className="text-xl mt-3 text-gray-700 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quas ducimus ut laborum, quasi, impedit commodi
                doloremque nobis atque aliquam, perspiciatis totam. Porro,
                ipsam.
              </p>
            </div>
            <div className="py-8">
              <h1 className="text-xl font-bold mb-3 text-active">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map(({ title, link }) => (
                  <li
                    key={link}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-active text-gray-700"
                  >
                    <Link
                      to={link}
                      onClick={() => window.scrollTo(0, 0)}
                      className="flex items-center gap-2"
                    >
                      <span>&#11162;</span>
                      <span>{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8">
              <h1 className="text-xl font-bold mb-3 text-active">
                Contact 
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <FaLocationArrow className="text-active" />
                <p>Algeria, Batna</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt className="text-active" />
                <p>+213 649 4023 43</p>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <a href="#">
                  <FaFacebook className="text-3xl text-active hover:scale-110 transition" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl text-active hover:scale-110 transition" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl text-active hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center py-5 border-t-2 border-white/60 bg-active/50 text-white z-10 relative">
            &copy; 2025 All rights reserved || Made with ❤️ by DevXxmx
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;

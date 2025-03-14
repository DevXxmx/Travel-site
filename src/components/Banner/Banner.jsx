import { IoIosWifi } from "react-icons/io";
import greenTrav from "../../assets/img/Travel.jpeg";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="min-h-[550px] ">
      <div className="nim-h-[550px] flex justify-center items-center backdeop-blur-xl py-12sm:py-0">
        <div className="container my-25">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            <div>
              <img
                className=" border-4 border-active rounded-full max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                src={greenTrav}
                alt=""
              />
            </div>
            <div className="   p-4 ">
              <h1 data-aos="fade-up" className=" text-black text-3xl font-bold sm:text-4xl ">
                Explore all corners of the world with us
              </h1>
              <p className="text-gray-600 tracking-wide leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                reiciendis quaerat beatae alias exercitationem nemo suscipit
                incidunt natus voluptate nam excepturi, iste ab impedit minima.
              </p>

              <div data-aos="zoom-in" className="grid grid-cols-2 gap-4 m-4">
                <div className="flex items-center gap-4">
                  <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4  rounded-full bg-blue-100 dark:bg-violet-400 " />
                  <p>Flight</p>
                </div>
                <div className="flex items-center gap-4 ">
                  <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-violet-100 " />
                  <p>Hotel</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-violet-100 " />
                  <p>Wi-Fi</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100 dark:bg-violet-400 " />
                  <p>Food</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

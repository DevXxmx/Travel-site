import { IoCloseOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/25 z-50 backdrop-blur-sm" >
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-1  border-secondary bg-white p-4 rounded-md w-[300px] ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className=" text-3xl ">Book Your Trip</h1>
            </div>
            <div>
              <IoCloseOutline className="text-2xl cursor-pointer " 
                onClick={()=> setOrderPopup(false)}
              />
            </div>
          </div>
          <div className="mt-4 ">
          <input type="text" 
            placeholder="Name"
            className=" w-full rounded-full border-1 border-active focus:outline-active focus:outline  dark:bg-gray-800 px-2 py-1 mb-4"
          />
          <input type="email" 
            placeholder="Email"
            className=" w-full rounded-full border-1  border-active  focus:outline-active focus:outline   dark:bg-gray-800 px-2 py-1 mb-4"
          />
          <input type="text" 
            placeholder="Address"
            className=" w-full rounded-full  border-1  border-active  focus:outline-active focus:outline   dark:bg-gray-800 px-2 py-1 mb-4"
          />
          <div>
            <button className="bg-gradient-to-r from-secondary to-active hover:scale-105 duration-200 text-white py-1 px-4 rounded-full" >Book Now</button>
          </div>

          </div>
        </div>
        </div>
      )}
    </>
  );
};
Popup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
};

export default Popup;


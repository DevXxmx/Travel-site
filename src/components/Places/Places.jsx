import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/img/Img1.jpeg";
import Img2 from "../../assets/img/Img2.jpeg";
import Img3 from "../../assets/img/Img3.jpg";
import Img4 from "../../assets/img/Img4.jpeg";
import Img5 from "../../assets/img/Img5.jpeg";
import Img6 from "../../assets/img/Img6.jpg";
import PropTypes from 'prop-types';
const PlacesData = [
  {
    img: Img1,
    title: "orem ipsum ",
    location: "orem ipsum ",
    description:
      "orem ispum sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    price: 590,
    type: "lorem",
  },
  {
    img: Img2,
    title: "orem ipsum ",
    location: "orem ipsum ",
    description:
      "orem ispum sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    price: 730,
    type: "lorem",
  },
  {
    img: Img3,
    title: "orem ipsum ",
    location: "orem ipsum ",
    description:
      "orem ispum sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    price: 450,
    type: "lorem",
  },
  {
    img: Img4,
    title: "orem ipsum ",
    location: "orem ipsum ",
    description:
      "orem ispum sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    price: 250,
    type: "lorem",
  },
  {
    img: Img5,
    title: "orem ipsum ",
    location: "orem ipsum ",
    description:
      "orem ispum sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    price: 900,
    type: "lorem",
  },
  {
    img: Img6,
    title: "orem ipsum ",
    location: "orem ipsum ",
    description:
      "orem ispum sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    price: 840,
    type: "lorem",
  },
];
const Places = ({handleOrderPopup}) => {
  return (
    <div className="bg-white py-10 ">
      <div className="container justify-self-center  w-full">
        <h1 className="my-8 border-l-8 border-active py-2 pl-2 text-3xl font-bold ">
          Best Places to visit
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard handleOrderPopup={handleOrderPopup} key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

Places.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Places

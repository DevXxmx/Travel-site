
import Hero from "../components/Hero/Hero";
import Mainv from "../assets/video/nn.mp4";
import Places from "../components/Places/Places";
import Barnnerimg from "../components/bannerImg/Barnnerimg";
import Poster from "../assets/img/banner1.jpg";
import BlogsCom from "../components/Blogs/BlogsCom";
import Banner from "../components/Banner/Banner";
import Banne2 from "../assets/img/banner.png";
import Testimonials from "../components/Testimonials/Testimonials";
import Popup from "../components/popup/Popup";
import { useState } from "react";
const Home = () => {
  const [orderPopup,setOrderPopup]=useState(false);
  const handleOrderPopup=()=>{
      setOrderPopup(!orderPopup);
  };

  return (
    <div className=" overflow-x-hidden">
    <div className="h-full w-full">
      <div className="relative h-[650px] ">
        <video autoPlay loop muted className="absolute right-0 top-0  h-[650px] w-full object-cover z-[-1] " >
          <source src={Mainv} type="video/mp4" />
        </video>
      </div>
    </div>
    <Hero/>
    <Places handleOrderPopup={handleOrderPopup}/>
    <Barnnerimg img={Poster} />
    <BlogsCom/>
    <Banner/>
    <Barnnerimg img={Banne2} />
    <Testimonials/>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default Home;

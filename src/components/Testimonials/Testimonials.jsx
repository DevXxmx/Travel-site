import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime, adipisci, cupiditate ab ducimus omnis dolorum iste fugiat totam recusandae dolorem maiores rem magnam autem nostrum deserunt numquam libero, nemo eligendi.",
    img: "https://picsum.photos/101/109",
  },
  {
    id: 2,
    name: "Smith",
    test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime, adipisci, cupiditate ab ducimus omnis dolorum iste fugiat totam recusandae dolorem maiores rem magnam autem nostrum deserunt numquam libero, nemo eligendi.",
    img: "https://picsum.photos/102/105",
  },
  {
    id: 3,
    name: "Alex",
    test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime, adipisci, cupiditate ab ducimus omnis dolorum iste fugiat totam recusandae dolorem maiores rem magnam autem nostrum deserunt numquam libero, nemo eligendi.",
    img: "https://picsum.photos/103/107",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className=" text-sm bg-clip-text text-transparent bg-active ">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl text-border-backgr text-black mx-1">
            What Our Clients Say
          </h1>
          <p className="mt-4 text-xs text-gray-500">
            {""}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime,
            adipisci, cupiditate ab ducimus omnis dolorum iste fugiat totam
            recusandae dolorem maiores rem magnam autem nostrum deserunt numquam
            libero, nemo eligendi. Laborum deleniti nam repudiandae iure ratione
            nostrum id natus soluta eligendi laudantium quisquam ex asperiores,
            vitae quibusdam sed dolorum!
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[1200px] mx-auto gap-6"
        >
          <Slider {...settings}>
            {TestimonialsData.map(({ id, name, test, img }) => {
              return (
                <div key={id} className="my-6">
                  <div className="flex flex-col justyify-center items-center gap-4 text-center 
                h-80  p-4 rounded-xl shadow-lg relative">
                    <img
                      src={img}
                      alt=""
                      className="rounded-full block mx-auto"
                    />
                    <h1 className="text-xl font-bold ">{name}</h1>
                    <p className="text-gray-500 text-sm ">{test}</p>
                    <p className="text-active text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import { useLocation } from "react-router-dom";
import BlogsCom from "../components/Blogs/BlogsCom";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" overflow-x-hidden  min-h-screen pt-24">
      <div className="h-[600px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[600px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <p className="text-gray-600 text-sm py-3">
          Written by: {author} on {date}
        </p>
        <h1 className="font-bold text-2xl mb-6">{title}</h1>
        <p className="text-lg mb-6">{description}</p>
      </div>
      <BlogsCom />
    </div>
  );
};

export default BlogsDetails;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BlogsCard = ({ image, date, title, description, author }) => {
  return (
    <Link
      to={"/blogs/${title}"}
      onClick={() => window.scrollTo(0, 0)}
      state={{ image, date, title, description, author }}
    >
      <div className="flex flex-col md:flex-row justify-around ">
        <div className="p-4 shadow-lg transtion-all duration-500 hover:shadow-xl ">
          <div className="overflow-hidden">
            <img
              src={image}
              alt=""
              className="mx-auto h-[200px] w-[250px] object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110 "
            />
          </div>
          <div className="flex justify-between pt-2 text-state-600">
            <p>{date}</p>
            <p>By {author}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className=" line-clamp-1 font-bold ">{title}</h1>
            <p className="line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
BlogsCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BlogsCard;

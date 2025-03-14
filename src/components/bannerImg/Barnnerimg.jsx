
import PropTypes from 'prop-types';

const Barnnerimg = ({img}) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'450px'};
  return (
    <div  data-aos="zoom-in" data-aos-offset='200' style={bgImage} className="w-full h-[450px]">
      
    </div>
  )
};
Barnnerimg.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Barnnerimg;



import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarComponent = () => {
  return (
    <div className="flex justify-center">
      <FontAwesomeIcon icon={faStar} size="xl" className="text-yellow-300" />
      <FontAwesomeIcon icon={faStar} size="xl" className="text-yellow-300" />
      <FontAwesomeIcon icon={faStar} size="xl" className="text-yellow-300" />
      <FontAwesomeIcon icon={faStar} size="xl" className="text-yellow-300" />
      <FontAwesomeIcon icon={faStar} size="xl" className="text-yellow-300" />
    </div>
  );
};

export default StarComponent;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStarRegular } from "@fortawesome/free-regular-svg-icons";

function Rating(props) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={farStarRegular} />);
    }
  }

  return <div className="rating">{stars}</div>;
}
export default Rating;

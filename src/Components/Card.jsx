import PropTypes from "prop-types";
import {useState} from "react";
import './Card.css';

const Card = (props) => {
  const [likes_count, setLikes] = useState(props.likes_count);
  const increaseLikes = () => {
    setLikes(likes_count +1);
  };
    return (
      <div className='card'>
  
          <ul>
            <li>{props.message} </li>
            <li>{likes_count} </li>
            {/* <li>{props.board_id} </li> */}
            <button className="like" onClick={increaseLikes}>❤️</button>
          </ul>
      </div>
    );
};

Card.propTypes = {
  card_id: PropTypes.number,
  message: PropTypes.string,
  likes_count: PropTypes.number,
  board_id: PropTypes.number,
  increaseLikes: PropTypes.func,
};

export default Card;
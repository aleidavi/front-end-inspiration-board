import "./Card.css";

const Card = ({ id, message, boardId, likesCount, handleDeleteCard, handleLikesCount }) => {

	const onDeleteCard = () => {
		handleDeleteCard(id);
	};

	const onLikeCard = () => {
		handleLikesCount(id);
	};

	return (
		<div className={`card-box c${boardId}`}>
		<button className="delete" onClick={onDeleteCard}>x</button>
		{message}
		<button className="plus1" onClick={onLikeCard}>+1</button>
		</div>
	);
	};

export default Card;

import Card from './Card';
import PropTypes from 'prop-types';
import './Card.css';

const CardsList = (props) => {
    const cardComponent = props.cards.map((card, index) => {
        return (
            <li key={index}>
            <Card
            card_id={card.card_id}
            message={card.message} 
            likes_count={card.likes_count}
            board_id={card.board_id} />
            </li>
        );
    });
    return (
        <section> 
            <ul>
                {cardComponent}
            </ul>
        </section>
    )
}
CardsList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
            board_id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CardsList;
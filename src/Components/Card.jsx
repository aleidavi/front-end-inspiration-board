import './Card.css'

const Card = ({ id, message, boardId, likesCount}) => {
    return (
        <div className='card-box'> {message}</div>
    )
}
export default Card;
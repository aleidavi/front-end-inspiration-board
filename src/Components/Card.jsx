import './Card.css'

const Card = ({ id, message, boardId, likesCount}) => {
    return (
        <div className={`card-box c${boardId}`}> 
            {message}
            <button className='plus1'>+1</button>
        </div>
    )
}
export default Card;
import Card from './Card'
import './CardList.css'

const CardList = ({ cardData }) => {
  const cardComponents = cardData.map((card, index) => {
    console.log(card)
    return (
      <Card
        key={index}
        id={card.id}
        message={card.message}
        boardId={card.boardId}
        likesCount={card.likesCount}
      ></Card>
    );
  });

  return (
    <div className='cards'>
      {cardComponents}
    </div>
  );
};
export default CardList;

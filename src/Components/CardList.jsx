import Card from './Card'
import './CardList.css'

const CardList = ({ cardData, activeBoardIndex }) => {
  const selectedBoardData = activeBoardIndex == 0 ? cardData : cardData.filter(card => card.boardId == activeBoardIndex)
  const cardComponents = selectedBoardData.map((card, index) => {
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
    <>
      <div className='cards'>
        {cardComponents}
      </div>
    </>
    
  );
};
export default CardList;

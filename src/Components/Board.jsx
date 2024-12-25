import './Board.css';
const BoardTab = ({ id, title, index, isActive, handleActiveBoard}) => {
    const onTabClick = () => {
      handleActiveBoard(id);
    }
    return (
      <div className={`tab ${isActive ? 'active' : ''}`}>
          <button
          // index + 1 so that it matches the id of the card in the db
          className={`tab-button one c${index+1}`}
          onClick={() => onTabClick()}
          >{title}</button>
      </div>
    );
};

export default BoardTab;
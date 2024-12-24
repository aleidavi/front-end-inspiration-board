import './Board.css';
const BoardTab = ({ title, index, isActive, handleActiveTab}) => {
    const onTabClick = (index) => {
        handleActiveTab(index);
    }
    return (
      <div className={`tab ${isActive ? 'active' : ''}`}>
          <button
          // index + 1 so that it matches the id of the card in the db
          className={`tab-button one c${index+1}`}
          onClick={() => onTabClick(index)}
          >{title}</button>
      </div>
    );
};

export default BoardTab;
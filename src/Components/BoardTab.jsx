import './BoardTab.css';
const BoardTab = ({ title, content, index, isActive, handleActiveTab}) => {
    const onTabClick = (index) => {
        handleActiveTab(index);
    }
    return (
        <>
        <div className={`tab ${isActive ? 'active' : ''}`}>
            <button
            className={`tab-button one c${index}`}
            onClick={() => onTabClick(index)}
            >{title}</button>
        </div>
        <div className='tab-content'>
            {isActive && content}
        </div>
        </>
    );
};

export default BoardTab;
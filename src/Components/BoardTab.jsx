const BoardTab = ({ title, content, index, isActive}) => {
    const handleTabClick = (index) => {
        console.log(index);
    }
    return (
        <>
        <div className={`tab ${isActive ? 'active' : ''}`}>
            <button
            className='tab-button'
            onClick={() => console.log(title)}
            >{title}</button>
        </div>
        <div className='tab-content'>
            {isActive && content}
        </div>
        </>
    );
};

export default BoardTab;
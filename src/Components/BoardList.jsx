import Board from "./Board";
import './boardList.css';


const boardList = ({ boardData, activeTab, handleActiveTab }) => {
  
  const tabComponents = boardData.map((board, index) => {
    return (
      <>
      <div key={index}>
        <Board
          title={board.title}
          index={index}
          isActive={activeTab === index}
          handleActiveTab={handleActiveTab}
        ></Board>
      </div>
      </>
      
    )
  });
  return (
    <div className='board-tabs'>
      {tabComponents}
    </div>
  )
}  

export default boardList;
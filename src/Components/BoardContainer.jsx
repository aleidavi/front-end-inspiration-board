import BoardTab from "./BoardTab";
import './BoardContainer.css';
import { act } from "react";
import CardsList from "./CardsList";

const BoardContainer = ({ tabs, activeTab, handleActiveTab }) => {
  // const cardData = [
  //   {card_id: 1, message: "text", likes_count: 3, board_id: 1}
  // ]
  
  const tabComponents = tabs.map((tab, index) => {
    return (
      <div key={index}>
        <BoardTab
          title={tab.title}
          content={tab.content}
          index={index}
          isActive={activeTab === index}
          handleActiveTab={handleActiveTab}
        ></BoardTab>
      </div>
    )
  });
  return (
    <div>
      <div className='board-container'>
        {tabComponents}
      </div>
      <div>
        {/* <CardsList cards={cardData}/> */}
      </div>
    </div>
  )
}  

export default BoardContainer;
import BoardTab from "./BoardTab";
import './BoardContainer.css';
import { act } from "react";

const BoardContainer = ({ tabs, activeTab }) => {
  
  const tabComponents = tabs.map((tab, index) => {
    return (
      <div key={index}>
        <BoardTab
          title={tab.title}
          content={tab.content}
          index={index}
          isActive={activeTab === index}
        ></BoardTab>
      </div>
    )
  });
  return (
    <div className='board-container'>
      {tabComponents}
    </div>
  )
}  

export default BoardContainer;
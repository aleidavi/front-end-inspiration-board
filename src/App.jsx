import { useState } from 'react'
import './App.css'
import BoardContainer from './Components/BoardContainer';
import CardsList from './Components/CardsList';
import CardForm from './Components/CardForm';


function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    {'title': 'All', 'content': 'All Content'},
    {'title': '2025', 'content': '2025 dream board'},
    {'title': 'vacation', 'content': 'vacation dream board'},
    {'title': 'career', 'content': 'career dream board'},
  ]);
  const [cardData, setCardData] = useState([
    {card_id: 1, message: "Travel to Florida", likes_count: 3, board_id: 1},
    {card_id:2, message: "travel to Europe", likes_count: 2, board_id: 1},
  ]);
  const addCardData = (newCard) => {
    const nextId = Math.max(0, ...cardData.map((card) => card.card_id)) +1;

    const newCardList = [...cardData];
    newCardList.push({
      card_id: nextId,
      message: newCard.message,
      likes_count: 0,
      board_id: activeTab,
    });
    setCardData(newCardList);
  }

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  return (
    <>
      <h1>Dream Board</h1>
      <BoardContainer 
      tabs={tabs} 
      activeTab={activeTab}
      handleActiveTab={handleActiveTab}
      />
      <CardsList cards={cardData}/>
      
      <CardForm
      onCardAdd={addCardData} />
    </>
  )
}

export default App

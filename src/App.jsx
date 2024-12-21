import { useState } from 'react'
import './App.css'
import BoardContainer from './Components/BoardContainer';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    {'title': 'All', 'content': 'All Content'},
    {'title': '2025', 'content': '2025 dream board'},
    {'title': 'vacation', 'content': 'vacation dream board'},
    {'title': 'career', 'content': 'career dream board'},
  ]);

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
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import BoardList from './Components/BoardList';
import CardList from './Components/CardList';
import axios from 'axios';

const kBaseUrl = 'http://localhost:5000'

const formatApi = (apiCard) => {
  // convert api data to the format we need
  const newCard = {
    ...apiCard,
    boardId: apiCard.board_id,
    likesCount: apiCard.likes_count
  };
  delete newCard.board_id;
  delete newCard.likes_count;
  return newCard
};

const getAllBoardsApi = () => {
  return axios.get(`${kBaseUrl}/boards`)
    .then(response => {
      return response.data})
    .catch(error => {
      console.log(error)
    })
}

const getAllCardsApi = () => {
  return axios.get(`${kBaseUrl}/cards`)
    .then(response => {
      const apiCards = response.data;
      const newCards = apiCards.map(formatApi);
      console.log(apiCards);
      console.log(newCards);
      return newCards;
    })
    .catch(error => {
      console.log(error)
    })
};

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  

  const getAllBoards = () => {
    getAllBoardsApi()
      .then(boards => {
        setBoardData(boards)
      })
  }

  const getAllCards = () => {
    getAllCardsApi()
      .then(cards => {
        setCardData(cards)
      })
  }

  useEffect(()=> {
    getAllBoards();
    getAllCards();
  },[]);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1 className='heading'>Dream Board</h1>
        <div className='create-container'>
          <button>New Board</button>
          <button>New Card</button>
        </div>
      </div>
      <hr className='divider'></hr>
      <div className='tabs'>
        <button className='all'>All</button>
        <BoardList 
          boardData={boardData} 
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
        ></BoardList>
      </div>
      <div>
        <CardList
          cardData={cardData}
        ></CardList>
      </div>
      
      
    </div>
  )
}

export default App

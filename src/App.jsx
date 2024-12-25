import { useEffect, useState } from 'react'
import './App.css'
import BoardList from './Components/BoardList';
import CardList from './Components/CardList';
import Modal from './Components/Modal';
import NewBoardForm from './Components/NewBoardForm';
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

// helper function to get BOARD info from backend
const getAllBoardsApi = () => {
  return axios.get(`${kBaseUrl}/boards`)
    .then(response => {
      return response.data})
    .catch(error => {
      console.log(error)
    })
}

// helper function to get CARD info from backend
const getAllCardsApi = () => {
  return axios.get(`${kBaseUrl}/cards`)
    .then(response => {
      const apiCards = response.data;
      const newCards = apiCards.map(formatApi);
      return newCards;
    })
    .catch(error => {
      console.log(error)
    })
};
///////////////////////
function App() {
  const [activeBoardId, setActiveBoardId] = useState(0)
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  
  const [isOpen, setIsOpen] = useState(false)

  // function that gets board api promise and then chains to set board data 
  const getAllBoards = () => {
    getAllBoardsApi()
      .then(boards => {
        setBoardData(boards)
      })
  }

  // function that gets card api promise and then chains to set card data 
  const getAllCards = () => {
    getAllCardsApi()
      .then(cards => {
        setCardData(cards)
      })
  }

  // get api data when mounting
  useEffect(()=> {
    getAllBoards();
    getAllCards();
  },[]);

  // Board component calls this fn, passes in id, to set active board
  const handleActiveBoard = (id) => {
    setActiveBoardId(id);
  }

  // when new Board is submitted
  const handleBoardSubmit = (boardFormData) => {
    return axios.post(`${kBaseUrl}/boards`, boardFormData)
      .then((result) => {
        setBoardData((prevBoards) => [...prevBoards, result.data])
      })
      .catch((error) => console.log(error))
  }
  
  return (
    <div className='App'>
      <div className='header'>
        <h1 className='heading'>Dream Board</h1>
        <div className='create-container'>
          <button onClick={()=> setIsOpen(true)}>New Board</button>
          <button>New Card</button>
        </div>
      </div>
      <hr className='divider'></hr>
      <div className='tabs'>
        <button className='all' onClick={() => setActiveBoardId(0)}>All</button>
        <BoardList 
          boardData={boardData} 
          handleActiveBoard={handleActiveBoard}
        ></BoardList>
      </div>
      <div>
        <CardList
          cardData={cardData}
          activeBoardId={activeBoardId}
        ></CardList>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Create a New Board</h2>
        <NewBoardForm
          handleBoardSubmit={handleBoardSubmit}
        ></NewBoardForm>
      </Modal>
    </div>
  )
}

export default App

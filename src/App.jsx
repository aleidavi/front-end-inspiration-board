import { useEffect, useState } from 'react'
import './App.css'
import BoardContainer from './Components/BoardContainer';
import axios from 'axios';

const kBaseUrl = 'http://localhost:5000'

const getAllBoardsApi = () => {
  return axios.get(`${kBaseUrl}/boards`)
    .then(response => {
      return response.data})
    .catch(error => {
      console.log(error)
    })

}
function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [boardData, setBoardData] = useState([])

  const getAllBoards = () => {
    getAllBoardsApi()
      .then(boards => {
        setBoardData(boards)
      })
  }

  useEffect(()=> {
    getAllBoards()
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
      <div className='main'>
        <button>All</button>
        <BoardContainer 
          tabs={boardData} 
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
      > </BoardContainer>
      </div>
    </div>
  )
}

export default App

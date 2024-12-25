import { useState } from "react";
import './NewBoardForm.css'

const NewBoardForm = ({ handleBoardSubmit}) => {
  const kDefaultBoardForm = {
    title: "",
    owner: "",
  };
  const [boardFormData, setBoardFormData] = useState(kDefaultBoardForm);
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newBoardFormData = { ...boardFormData, [fieldName]: fieldValue };
    setBoardFormData(newBoardFormData);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (!boardFormData.title && !boardFormData.owner) {
      setErrorMessage("Error: Title and Owner cannot be empty!")
    } else if (!boardFormData.title) {
      setErrorMessage("Title cannot be empty!")
    } else if (!boardFormData.owner) {
      setErrorMessage("Owner cannot be empty!")
    } else {
      handleBoardSubmit(boardFormData);
      setBoardFormData(kDefaultBoardForm);
    }
  }

  const emptyTitle = !boardFormData.title ? 'empty': ''
  const emptyOwner = !boardFormData.owner ? 'empty': ''

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title:  </label>
          <input className={emptyTitle}
            type="text"
            id="title"
            name="title"
            value={boardFormData.title}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="owner">Owner: </label>
          <input className={emptyOwner}
            type="text"
            id="owner"
            name="owner"
            value={boardFormData.value}
            onChange={handleChange}
          ></input>
        </div>
        <div className='submit-container'>
          <input className='submit-button'
          type='submit'></input>
        </div>
      </form>
      <div>{errorMessage}</div>
    </>
  );
};
export default NewBoardForm;

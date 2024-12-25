import { useState } from 'react';
import './NewBoardForm.css'

const NewBoardForm = ({ handleBoardSubmit}) => {
  const kDefaultBoardForm = {
    title: '',
    owner: '',
  };
  const [boardFormData, setBoardFormData] = useState(kDefaultBoardForm);
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newBoardFormData = { ...boardFormData, [fieldName]: fieldValue };
    setBoardFormData(newBoardFormData);
  };

    const onHandleSubmit = (event) => {
      event.preventDefault();
      setErrorMessage('')
      try {
        if (!boardFormData.title && !boardFormData.owner) {
          throw new Error('Title and Owner\ncannot be empty!');
        } 
        if (!boardFormData.title) {
          throw new Error("Title cannot be empty!");
        } 
        if (!boardFormData.owner) {
          throw new Error("Owner cannot be empty!");
        }
        
        // Submit form if validation passes
        handleBoardSubmit(boardFormData);
        setBoardFormData(kDefaultBoardForm);
        
        setErrorMessage(`Board ${boardFormData.title} created successfully`)
        setTimeout(() => setErrorMessage(''), 3000); 
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`)
    }
  };

  const emptyTitle = !boardFormData.title ? 'empty': ''
  const emptyOwner = !boardFormData.owner ? 'empty': ''

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Title:  </label>
          <input className={emptyTitle}
            type='text'
            id='title'
            name='title'
            value={boardFormData.title}
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-field'>
          <label htmlFor='owner'>Owner: </label>
          <input className={emptyOwner}
            type='text'
            id='owner'
            name='owner'
            value={boardFormData.owner}
            onChange={handleChange}
          ></input>
        </div>
        <div className='submit-container'>
          <input className='submit-button'
          type='submit'></input>
        </div>
      </form>
      <div className='message'>
        {errorMessage}
      </div>
    </>
  );
};
export default NewBoardForm;

import { useState } from "react";
const NewBoardForm = ({ handleBoardSubmit}) => {
  const kDefaultBoardForm = {
    title: "",
    owner: "",
  };
  const [boardFormData, setBoardFormData] = useState(kDefaultBoardForm);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newBoardFormData = { ...boardFormData, [fieldName]: fieldValue };
    setBoardFormData(newBoardFormData);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleBoardSubmit(boardFormData);
    setBoardFormData(kDefaultBoardForm);
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={boardFormData.title}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="owner">Owner: </label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={boardFormData.value}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <input type="submit"></input>
      </div>
    </form>
  );
};
export default NewBoardForm;

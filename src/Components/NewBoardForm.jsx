import { useState } from "react"
const NewBoardForm = () => {
    const kDefaultBoardForm = {
        title:'',
        owner:'',
    };
    const [boardFormData, setBoardFormData] = useState(kDefaultBoardForm)
    
    return (
        <form>
            <div>
                <label htmlFor="title">Title: </label>
                <input type='text' id='title' name='title'></input>
            </div>
            <div>
                <label htmlFor="owner">Owner: </label>
                <input type='text' id='owner' name='owner'></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    )
}
export default NewBoardForm;
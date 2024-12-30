import { useState } from 'react';
import PropTypes from 'prop-types';

const CardForm = (props) => {
    const [cardMessage, setCardMessage] = useState('');
    const handleCardMessageChange = (changeEvent) => {
        setCardMessage(changeEvent.target.value);
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onCardAdd({message: cardMessage});
        setCardMessage({message: ''});
    };
    return (
    <form onSubmit={handleSubmit} className='card_form'>
        <div>
            <label htmlFor="message"> New Card: </label>
            <input id="message" name="message" value={cardMessage} onChange={handleCardMessageChange}/>
        </div>
        <div>
            <input type="submit"
            value="Submit"/>
            {/* <input type="text" value={cardMessage} onChange={handleCardMessageChange}/> */}
        
        </div>
    </form>
    );
};

CardForm.propTypes = {
    onCardAdd: PropTypes.func.isRequired,
};

export default CardForm;
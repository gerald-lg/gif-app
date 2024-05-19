import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue(target.value);
    };

    const onSubmit = ( (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return; 
        onNewCategory( inputValue.trim() );
        cleanValue();
    });

    
   
    const cleanValue = () => {
        setInputValue('');
    }

    return (
        <form method="post" onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue} 
                onChange={ onInputChange }
                className="custom__input"
                />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
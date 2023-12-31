import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <div className='navbar'>
            <h1 className='logo'>GifExpertApp</h1>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Search gifs..."
                    value={ inputValue }
                    onChange={ onInputChange }
                    />
            </form>
        </div>
    )
}

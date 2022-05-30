import React from 'react';
import './SearchButton.css';

function SearchButton(props: any) {
    const { text, onClick } = props;
    return (
        <button type="button" onClick={onClick}>
            {text}
        </button>
    );
}

export default SearchButton;
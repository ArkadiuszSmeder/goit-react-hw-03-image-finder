import React, { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue); // Przekazuje wartość do funkcji onSubmit
    setInputValue('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" autoComplete="off" autoFocus placeholder="Search images and photos" value={inputValue} onChange={handleChange}/>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};
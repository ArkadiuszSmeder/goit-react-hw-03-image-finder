import React, { useState } from 'react';
import PropTypes from "prop-types";
import { SearchHeader, SearchForm, SearchFormButton, SearchFormInput } from 'styled/styled-searchbar';

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
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit"/>
        <SearchFormInput className="input" type="text" autoComplete="off" autoFocus placeholder="Search images and photos" value={inputValue} onChange={handleChange}/>
      </SearchForm>
    </SearchHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
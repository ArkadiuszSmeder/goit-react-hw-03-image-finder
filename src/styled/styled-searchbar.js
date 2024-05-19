import styled from "styled-components";

export const SearchHeader = styled.header `
top: 0;
left: 0;
position: sticky;
z-index: 1100;
display: flex;
justify-content: center;
align-items: center;
min-height: 36px;
padding-right: 24px;
padding-left: 24px;
padding-top: 12px;
padding-bottom: 12px;
color: #fff;
background-color: #3f51b5;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
z-index: 10;
`

export const SearchForm = styled.form `
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border-radius: 3px;
overflow: hidden;
`

export const SearchFormButton = styled.button`
display: inline-block;
width: 29px;
height: 29px;
border: 0;
background-image: url('https://www.svgrepo.com/show/390687/find-magnifier-search-zoom-look.svg');
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 1;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
background-color: white;

&:hover {
    opacity: 0.8;
  }
`

export const SearchFormInput = styled.input`
display: inline-block;
width: 400px;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding-left: 4px;
padding-right: 4px;
`
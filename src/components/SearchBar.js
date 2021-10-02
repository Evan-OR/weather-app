import React, { useState } from 'react';

function SearchBar(props) {
  const { updateSearch } = props;
  const [textValue, setTextValue] = useState('');

  const changeHandler = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    updateSearch(textValue);
    e.preventDefault();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-bar-wrapper">
        <button aria-label="search" className="search-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
        <input
          placeholder="Search"
          value={textValue}
          type="text"
          onChange={changeHandler}
          spellCheck="false"
        />
      </div>
      <label>Search format : City Name, Coutry Code</label>
    </form>
  );
}

export default SearchBar;

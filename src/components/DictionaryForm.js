import React, { useState } from 'react';

const DictionaryForm = ({ onSearch }) => {
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(word);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
};

export default DictionaryForm;

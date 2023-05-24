import React, { useState } from 'react';

import DictionaryForm from '../components/DictionaryForm';
import DictionaryResult from '../components/DictionaryResult';

const DictionaryContainer = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data);
        setError(null);
      } else {
        throw new Error('Word not found');
      }
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>English Dictionary App</h1>
      <DictionaryForm onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {result && (
        <DictionaryResult word={result[0].word} meanings={result[0].meanings} />
      )}
    </div>
  );
};

export default DictionaryContainer;

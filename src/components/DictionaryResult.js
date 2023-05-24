import React from 'react';

const DictionaryResult = ({ word, meanings }) => {
  return (
    <div>
      <h2>{word}</h2>
      {meanings.map((meaning, index) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.map((definition, index) => (
              <li key={index}>{definition.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DictionaryResult;


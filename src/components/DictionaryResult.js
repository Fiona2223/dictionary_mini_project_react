import React from 'react';

const DictionaryResult = ({ wordData }) => {
  if (!wordData) {
    return null;
  }

  return (
    <div className="dictionary-result">
      <h2 className="word">{wordData.word}</h2>
      <p className="meaning">
        <strong>Meaning:</strong> {wordData.meaning}
      </p>
      <p className="definitions">
        <strong>Definitions:</strong> {wordData.definitions}
      </p>
      <p className="synonyms">
        <strong>Synonyms:</strong> {wordData.synonyms}
      </p>
      <p className="antonyms">
        <strong>Antonyms:</strong> {wordData.antonyms}
      </p>
      <p className="phonetics">
        <strong>Phonetics:</strong> {wordData.phonetics}
      </p>
    </div>
  );
};

export default DictionaryResult;

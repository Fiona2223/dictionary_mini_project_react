import React, { useState } from 'react';
import DictionaryForm from '../components/DictionaryForm';
import DictionaryResult from '../components/DictionaryResult';

const DictionaryContainer = () => {
  const [wordData, setWordData] = useState(null);

  const handleSearch = async (word) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const jsonData = await response.json();

    setWordData(jsonData);
  }

//     if (data && data.length > 0) {
//       const wordEntry = data[0];
//       const meanings = wordEntry.meanings.map((meaning) => meaning.definition);
//       const synonyms = wordEntry.meanings.map((meaning) => meaning.synonyms?.join(', '));
//       const antonyms = wordEntry.meanings.map((meaning) => meaning.antonyms?.join(', '));
//       const phonetics = wordEntry.phonetics.map((phonetic) => phonetic.text);

//       setWordData({
//         word: wordEntry.word,
//         meaning: meanings(', '),
//         definitions: wordEntry.definitions(', '),
//         synonyms: synonyms(', '),
//         antonyms: antonyms(', '),
//         phonetics: phonetics(', '),
//       });
//     } else {
//       setWordData(null);
//     }
//   };

  return (
    <div className="container">
      <h1 className="title">Dictionary App</h1>
      <DictionaryForm onSearch={handleSearch} />
      <DictionaryResult wordData={wordData} />
    </div>
  );
};

export default DictionaryContainer;

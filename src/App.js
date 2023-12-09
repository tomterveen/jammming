import React, { useState } from 'react';
import SearchResults from "./components/SearchResults";

const mockData = [
  {
    id: 1,
    title: "Rigthous",
    artist: "Protoje",
    album: "In search of time"
  },
  {
    id: 2,
    title: "Who Knows",
    artist: "Protoje",
    album: "Ancient Future"
  },
  {
    id: 3,
    title: "Criminal",
    artist: "Protoje",
    album: "In search of time"
  },
]


function App() {
  const [result, setResult] = useState(mockData);

  return (
    <div>
      <SearchResults result={result}/>
    </div>
  );
}

export default App;

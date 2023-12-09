import React from 'react';
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
  return (
    <div>
      <SearchResults mockData={mockData}/>
    </div>
  );
}

export default App;

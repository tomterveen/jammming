import React from 'react';
import SearchResults from "./components/SearchResults";

const mockData = [
  {
    title: "Rigthous",
    artist: "Protoje",
    album: "In search of time"
  },
  {
    title: "Who Knows",
    artist: "Protoje",
    album: "Ancient Future"
  },
  {
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

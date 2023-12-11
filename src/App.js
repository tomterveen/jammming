import React, { useState } from 'react';
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

import styles from "./css/App.module.css"

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
  const [playlist, setPlaylist] = useState("");
  const [tracklist, setTracklist] = useState([{
    id: 1,
    title: "Weed a thing",
    artist: "Protoje",
    album: "In search of time"
  },
  {
    id: 2,
    title: "Switch it up",
    artist: "Protoje",
    album: "In search of time"
  }]);

  const handleChange = ({ target }) => {
    setPlaylist(target.value);
  };

  const handleClick = () => {
    setTracklist(prev => {
      return {...prev,
      title: "test",
      };
    });
  };


  return (
    <div className={styles.appContainer}>
      <SearchResults handleClick={handleClick} result={result}/>
      <Playlist tracklist={tracklist} playlist={playlist} handleChange={handleChange}/>
    </div>
  );
}

export default App;

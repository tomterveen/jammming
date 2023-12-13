import React, { useState } from 'react';
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

import styles from "./css/App.module.css"

const mockData = [
  {
    id: 1,
    title: "Rigthous",
    artist: "Protoje",
    album: "In search of time",
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

const mockTracklist = [{
  id: 4,
  title: "Weed a thing",
  artist: "Protoje",
  album: "In search of time"
},
{
  id: 5,
  title: "Switch it up",
  artist: "Protoje",
  album: "In search of time"
}];


function App() {
  const [playlistName, setPlaylistName] = useState("");
  
  const [searchResults, setSearchResults] = useState(mockData);
  const [tracklist, setTracklist] = useState(mockTracklist);

  const handleChange = ({ target }) => {
    setPlaylistName(target.value);
  };

  const addTrack = (track) => {
    const foundTrack = tracklist.find(trackList => trackList.id === track.id);
    // const newTrack = searchResults.concat(track);
    if (foundTrack) {
      console.log("Track already in tracklist")
    } else {
    setTracklist(tracklist => [...tracklist, track]);
    }
  };


  return (
    <div className={styles.appContainer}>
      <SearchResults searchResults={searchResults} addTrack={addTrack}/>
      <Playlist tracklist={tracklist} playlistName={playlistName} handleChange={handleChange}/>
    </div>
  );
}

export default App;

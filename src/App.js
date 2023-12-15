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
    uri: "spotify:track:4yrNzSh3l1lh7YV50rNymS",
  },
  {
    id: 2,
    title: "Who Knows",
    artist: "Protoje",
    album: "Ancient Future",
    uri: "spotify:track:5wYCh7qstEulWjDIkieJ0T",
  },
  {
    id: 3,
    title: "Criminal",
    artist: "Protoje",
    album: "In search of time",
    uri: "spotify:track:1jYMXbsvjeJoWfSf9r7NNj",
  },
]

const mockTracklist = [{
  id: 4,
  title: "Weed & things",
  artist: "Protoje",
  album: "In search of Zion",
  uri: "spotify:track:2Q2z4OG1tnTZahtgmRiT4d",
},
{
  id: 5,
  title: "Switch Up",
  artist: "Protoje",
  album: "In search of Zion",
  uri: "spotify:track:3a8qkgkP2KbSgO7SmH89n3",
}];


function App() {
  const [playlistName, setPlaylistName] = useState("");
  
  const [searchResults, setSearchResults] = useState(mockData);
  const [tracklist, setTracklist] = useState(mockTracklist);
  const [tracklistToSave, setTrackListToSave] = useState([]);

  const handleChange = ({ target }) => {
    setPlaylistName(target.value);
  };

  const addTrack = (track) => {
    const foundTrack = tracklist.find(trackList => trackList.id === track.id);
    if (foundTrack) {
      console.log("Track already in tracklist")
    } else {
    setTracklist(tracklist => [...tracklist, track]);
    }
  };

  const removeTrack = (track) => {
    setTracklist(tracklist.filter(song => song.id !== track.id));
  }

  // Function for the SaveToSpotiftButton
  const saveUriToTracklist = (e) => {
    const saveTracklist = tracklist.map(song => song.uri);

    setTrackListToSave(saveTracklist);
    
    setTracklist([]);

    console.log("Tracklist to save");
    console.log(saveTracklist);
  }


  return (
    <div className={styles.appContainer}>
      <SearchResults 
        searchResults={searchResults} 
        addTrack={addTrack}
      />
      <Playlist 
        removeTrack={removeTrack} 
        tracklist={tracklist} 
        playlistName={playlistName} 
        handleChange={handleChange} 
        isAdd={true}
        saveUriToTracklist={saveUriToTracklist}
      />
    </div>
  );
}

export default App;

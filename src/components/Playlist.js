import React from 'react';
import Tracklist from './Tracklist';
import SaveToSpotifyButton from './SaveToSpotifyButton';
import styles from "../css/Playlist.module.css";

const Playlist = ({playlistName, handleChange, tracklist, removeTrack, isAdd, saveUriToTracklist}) => {

    return (
        <div className={styles.gridItem2}>
                <label for="playlistName">Playlist Name</label>
                <input onChange={handleChange} value={playlistName} name="playlistName" id="playlistName" type="text" />
                <Tracklist removeTrack={removeTrack} tracklist={tracklist} isAdd={isAdd}/>
                <SaveToSpotifyButton saveUriToTracklist={saveUriToTracklist}/>
        </div>
    )
};

export default Playlist;
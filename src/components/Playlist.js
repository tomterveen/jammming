import React from 'react';
import Tracklist from './Tracklist';
import styles from "../css/Playlist.module.css";

const Playlist = ({playlistName, handleChange, tracklist}) => {
    return (
        <div className={styles.gridItem2}>
            <form>
                <input onChange={handleChange} value={playlistName} type="text" />
                <Tracklist tracklist={tracklist}/>
            </form>
        </div>
    )
};

export default Playlist;
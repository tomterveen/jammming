import React from 'react';
import Tracklist from './Tracklist';
import styles from "../css/Playlist.module.css";

const Playlist = ({playlist, handleChange, tracklist}) => {
    return (
        <div className={styles.gridItem2}>
            <form>
                <input onChange={handleChange} value={playlist} type="text" />
                <Tracklist playlist={playlist} tracklist={tracklist}/>
            </form>
        </div>
    )
};

export default Playlist;
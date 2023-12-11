import React from 'react';
import styles from "../css/Tracklist.module.css";

const Tracklist = ({tracklist, playlist}) => {
    return (
        <>
            {tracklist.map(track => {
                return (
                    <div className={styles.trackContainer}>
                        <h3>Title: {track.title}</h3>
                        <p>Artist: {track.artist}</p>
                        <p>Album: {track.album}</p>
                    </div>
                )
            })}
        </>
    );
}

export default Tracklist;
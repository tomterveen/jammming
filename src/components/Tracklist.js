import React from 'react';
import styles from "../css/Tracklist.module.css";
import Track from "./Track";

const Tracklist = ({tracklist, removeTrack}) => {
    return (
        <>
            {tracklist.map((track) => {
                return (
                    <div className={styles.trackContainer}>
                        <Track removeTrack={removeTrack} isAdd={true} key={track.id} track={track}/>
                    </div>
                )
            })}
        </>
    );
}

export default Tracklist;
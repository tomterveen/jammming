import React from 'react';
import styles from "../css/Tracklist.module.css";
import Track from "./Track";

const Tracklist = ({tracklist, removeTrack, isAdd}) => {
    return (
        <>
            {tracklist.map((track) => {
                return (
                    <div className={styles.trackContainer}>
                        <Track removeTrack={removeTrack} isAdd={isAdd} key={track.id} track={track}/>
                    </div>
                )
            })}
        </>
    );
}

export default Tracklist;
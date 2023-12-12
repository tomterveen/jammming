import React from 'react';
import styles from "../css/Tracklist.module.css";
import Track from "./Track";

const Tracklist = ({tracklist}) => {
    return (
        <>
            {tracklist.map((track) => {
                return (
                    <div className={styles.trackContainer}>
                        <Track key={track.id} track={track}/>
                    </div>
                )
            })}
        </>
    );
}

export default Tracklist;
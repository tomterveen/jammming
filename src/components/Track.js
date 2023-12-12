import React from 'react';

const Track = ({track, key}) => {

    /*
    const handleAddClick = (track) => {
        onAdd(track);
    }
    */

    return (
        <>
            <h3>Title: {track.title}</h3>
            <p>Artist: {track.artist} | Album: {track.album}</p>
        </>
    )
}

export default Track;
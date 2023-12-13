import React from 'react';

const Track = ({track, addTrack}) => {

    const handleAddClick = () => {
        console.log(track);
        addTrack(track);
    }

    return (
        <>
            <h3>Title: {track.title}</h3>
            <p>Artist: {track.artist} | Album: {track.album}</p>
            <button onClick={handleAddClick}>Add</button>
        </>
    )
}

export default Track;
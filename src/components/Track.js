import React from 'react';

const Track = ({track, addTrack, isAdd, removeTrack}) => {

    const handleAddClick = () => {
        addTrack(track);
    }

    const handleRemoveClick = () => {
        removeTrack(track);
    }


    return (
        <>
            <h3>Title: {track.title}</h3>
            <p>Artist: {track.artist} | Album: {track.album}</p>
            {isAdd ? 
            <button onClick={handleRemoveClick}>Remove</button> :
            <button onClick={handleAddClick}>Add</button>
            }
        </>
    )
}

export default Track;
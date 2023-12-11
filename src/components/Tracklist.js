import React from 'react';

const Tracklist = ({tracklist}) => {
    return (
        <>
            <h2>Custom Tracklist</h2>
            {tracklist.map(track => {
                return (
                    <>
                        <h3>Title: {track.title}</h3>
                        <p>Artist: {track.artist}</p>
                        <p>Album: {track.album}</p>
                    </>
                )
            })}
        </>
    );
}

export default Tracklist;
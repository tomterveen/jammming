import React from 'react';

const SearchResults = ({ result }) => {
    return (
        <>
            {result.map(song => {
                return (
                    <div key={song.id}>
                        <h3>Title: {song.title}</h3>
                        <p>Artist: {song.artist}</p>
                        <p>Album: {song.album}</p>
                    </div>
                )
            })}
        </>
    )
};

export default SearchResults;
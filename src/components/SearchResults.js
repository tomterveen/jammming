import React from 'react';

const SearchResults = ({ mockData }) => {
    return (
        <>
            {mockData.map(song => {
                return (
                    <ul>
                        <li>Title: {song.title}</li>
                        <li>Artist: {song.artist}</li>
                        <li>Album: {song.album}</li>
                    </ul>
                )
            })}
        </>
    )
};

export default SearchResults;
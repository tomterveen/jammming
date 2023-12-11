import React from 'react';
import styles from '../css/SearchResults.module.css'

const SearchResults = ({ result }) => {
    return (
        <div className={styles.gridItem1}>
            {result.map(song => {
                return (
                    <React.Fragment key={song.id}>
                        <h3>Title: {song.title}</h3>
                        <p>Artist: {song.artist}</p>
                        <p>Album: {song.album}</p>
                    </React.Fragment>
                )
            })}
        </div>
    )
};

export default SearchResults;
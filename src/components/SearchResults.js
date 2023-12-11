import React from 'react';
import styles from '../css/SearchResults.module.css'

const SearchResults = ({ result }) => {
    return (
        <div className={styles.gridItem1}>
            {result.map(track => {
                return (
                    <li key={track.id}>
                        <h3>Title: {track.title}</h3>
                        <p>Artist: {track.artist}</p>
                        <p>Album: {track.album}</p>
                        <button>➕</button>
                    </li>
                )
            })}
        </div>
    )
};

export default SearchResults;
import React from 'react';
import styles from '../css/SearchResults.module.css'
import Track from "./Track";

const SearchResults = ({ searchResults}) => {

    return (
        <ul className={styles.gridItem1}>
            {searchResults.map(result => {
                return (
                    <Track key={result.id} track={result}/>
                )
            })}
        </ul>
    )
};

export default SearchResults;
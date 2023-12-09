import React from 'react';

const Playlist = ({playlist, handleChange}) => {
    return (
        <>
            <form>
                <input onChange={handleChange} value={playlist} type="text" />
            </form>
        </>
    )
};

export default Playlist;
import React from 'react';

const SaveToSpotifyButton = ({saveUriToTracklist}) => {
    
    return (
        <button onClick={saveUriToTracklist} type="submit">Save to Spotify</button>
    );
}

export default SaveToSpotifyButton;
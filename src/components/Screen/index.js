import React from 'react';

import ScoreBoard from '../ScoreBoard';
import Marker from '../Marker';
import './style.css';

const Screen = () => {
    return (
        <>
            <ScoreBoard playerScore={{}} />
            <div id="game">
                <Marker />
            </div>
        </>
    );
};

export default Screen;

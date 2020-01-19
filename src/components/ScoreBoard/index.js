import React, {useState} from 'react';
import './style.css';

const ScoreBoard = ({ playerScore }) => {
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);

    return (
        <div id="placar">
            <div id="player-1">
                <span>Eu: {scorePlayer1}</span>
            </div>
            <div id="player-2">
                <span>Bot: {scorePlayer2}</span>
            </div>
        </div>
    );
};

export default ScoreBoard;

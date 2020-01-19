import React from 'react';
import { connect } from 'react-redux';

import './style.css';

const ScoreBoard = ({ playerInfo }) => {
    return (
        <div id="placar">
            <div id="player-1">
                <span>Eu: {playerInfo.player1.score}</span>
            </div>
            <div id="player-2">
                <span>Bot: {playerInfo.player2.score}</span>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    playerInfo: state.playersInfo
});

export default connect(mapStateToProps)(ScoreBoard);

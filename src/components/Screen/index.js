import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ScoreBoard from '../ScoreBoard';
import Marker from '../Marker';
import './style.css';

import * as playersActions from '../../store/actions/playersInfo';

const Screen = ({info, startGame}) => {
    if (info.started === false) {
        return (
            <div id="started">
                <span>Escolha seu marcador</span>
                <ul>
                    <li
                        onClick={() => {
                            startGame({
                                player: 'player1',
                                marker: 'x'
                            });
                        }}>x
                    </li>
                    <li
                        onClick={() => {
                            startGame({
                                player: 'player1',
                                marker: 'o'
                            });
                        }}>o
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <>

            <ScoreBoard playerScore={{}} />
            <div id="game">
                <Marker />
            </div>
        </>
    );
};

const mapInfoToProps = state => ({
    info: state.playersInfo
});

const mapStartGameToProps = dispatch => bindActionCreators(playersActions, dispatch);

export default connect(mapInfoToProps, mapStartGameToProps)(Screen);

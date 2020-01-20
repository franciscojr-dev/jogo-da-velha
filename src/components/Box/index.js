import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';

import * as playersActions from '../../store/actions/playersInfo';

const Box = ({
    playerInfo,
    playerWin,
    resultGame,
    markerList,
    refArray
}) => {
    const checkGame = () => {
        //playerWin('player1');
        //resultGame('win');
    }

    const handleClick = () => {
        if (playerInfo.markerList[refArray] === undefined) {
            markerList({
                position: refArray,
                marker: playerInfo['player1'].marker
            });

            setTimeout(() => {
                for(let i = 0; i < 9; i++) {
                    let randRef = Math.floor(Math.random() * 9);
                    if (playerInfo.markerList[randRef] === undefined) {
                        markerList({
                            position: randRef,
                            marker: playerInfo['player2'].marker
                        });
                        break;
                    }
                }

                checkGame();
            }, 250);
        }
    };

    return (
        <div className='box' onClick={handleClick}>
            <span>{playerInfo.markerList[refArray]}</span>
        </div>
    );
};

const mapStateToProps = state => ({
    playerInfo: state.playersInfo
});

const mapDispatchToProps = dispatch => bindActionCreators(playersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Box);

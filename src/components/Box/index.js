import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';

import * as playersActions from '../../store/actions/playersInfo';

const Box = ({
    playerInfo,
    playerWin,
    resultGame,
    resetMarkerList,
    markerList,
    refArray
}) => {
    const extractValues = (start, jump) => {
        let positions = [];

        for (let i = start, rep = 0; rep < 3; i+=(jump+1), rep++) {
            positions.push(i);
        }

        return positions;
    }

    const checkGame = (values) => {
        const listMarkers = playerInfo.markerList;
        const listMarkersCheck = playerInfo.markerList.filter(value => {
            return value !== undefined;
        });
        let oldValue = listMarkers[values[0]];
        let valuesCheck = [];

        for (let i = 0; i < 3; i++) {
            let valueMarker = listMarkers[values[i]];

            if (valueMarker !== undefined && oldValue === valueMarker) {
                valuesCheck.push(valueMarker);
            }

            oldValue = valueMarker;
        }

        if(valuesCheck.length === 3) {
            playerWin(playerInfo['player1'].marker === valuesCheck[0] ? 'player1' : 'player2');
            resultGame('win');
            setTimeout(() => {
                resetMarkerList();
            }, 1500);
        } else {
            if (listMarkersCheck.length === 9) {
                resultGame('draw');
                setTimeout(() => {
                    resetMarkerList();
                }, 1500);
            }
        }
    }

    const resultPlay = () => {
        checkGame(extractValues(0, 2)); // Coluna 1
        checkGame(extractValues(1, 2)); // Coluna 2
        checkGame(extractValues(2, 2)); // Coluna 3

        checkGame(extractValues(0, 0)); // Linha 1
        checkGame(extractValues(3, 0)); // Linha 2
        checkGame(extractValues(6, 0)); // Linha 3

        checkGame(extractValues(0, 3)); // Diagonal 1
        checkGame(extractValues(2, 1)); // Diagonal 2
    }

    const handleClick = () => {
        if (playerInfo.markerList[refArray] === undefined) {
            markerList({
                position: refArray,
                marker: playerInfo['player1'].marker
            });

            resultPlay();

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

                resultPlay();
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

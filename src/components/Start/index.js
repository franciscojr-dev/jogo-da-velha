import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';

import * as playersActions from '../../store/actions/playersInfo';

const Start = ({startGame}) => {
    return (
        <div id="started">
        <span>Escolha seu marcador</span>
        <ul>
            <li
                onClick={() => {
                    startGame('x');
                }}>x
            </li>
            <li
                onClick={() => {
                    startGame('o');
                }}>o
            </li>
        </ul>
    </div>
    );
};

const mapInfoToProps = state => ({
    info: state.playersInfo
});

const mapStartGameToProps = dispatch => bindActionCreators(playersActions, dispatch);

export default connect(mapInfoToProps, mapStartGameToProps)(Start);

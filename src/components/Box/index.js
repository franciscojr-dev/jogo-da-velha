import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';

import * as playersActions from '../../store/actions/playersInfo';

const Box = ({playerInfo, playerWin}) => {
    const [marker, setMarker] = useState('');

    const handleClick = () => {
        if (marker === '') {
            setMarker(playerInfo['player1'].marker);
            playerWin('player1');
        }
    };

    return (
        <div className='box' onClick={handleClick}>
            <span>{marker}</span>
        </div>
    );
};

const mapStateToProps = state => ({
    playerInfo: state.playersInfo
});

const mapDispatchToProps = dispatch => bindActionCreators(playersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Box);

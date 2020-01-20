import React from 'react';
import { connect } from 'react-redux';

import Start from '../Start';
import ScoreBoard from '../ScoreBoard';
import Marker from '../Marker';
import './style.css';

const Screen = ({info}) => {
    if (info.started === false) {
        return <Start />;
    }
    
    return (
        <>
            <ScoreBoard />
            <div id="game">
                <Marker />
            </div>
        </>
    );
};

const mapInfoToProps = state => ({
    info: state.playersInfo
});

export default connect(mapInfoToProps)(Screen);

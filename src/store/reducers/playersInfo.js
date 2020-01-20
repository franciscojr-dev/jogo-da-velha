const INITIAL_STATE = {
    started: false,
    player1: {
        score: 0,
        marker: ''
    },
    player2: {
        score: 0,
        marker: ''
    },
};

function checkPoints(score) {
    return (score < 99) ? score + 1 : score;
}

export default function playersInfo(state = INITIAL_STATE, action) {
    let stateReturn = {};

    switch (action.type) {
        case 'PLAYER_WIN':
            stateReturn = {
                ...state,
                [action.player]: {
                    score: checkPoints(state[action.player].score),
                    marker: state[action.player].marker,
                }
            };
            break;
        case 'START_GAME':
            stateReturn = {
                ...state,
                started: true,
                [action.infos.player]: {
                    score: 0,
                    marker: action.infos.marker,
                }
            };
            break;
        default:
            stateReturn = state;
    }

    return stateReturn;
}
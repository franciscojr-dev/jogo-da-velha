const INITIAL_STATE = {
    started: false,
    result: '',
    markerList: Array(9),
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
                player1: {
                    score: 0,
                    marker: action.infoPlayers.player1,
                },
                player2: {
                    score: 0,
                    marker: action.infoPlayers.player2,
                }
            };
            break;
        case 'RESULT_GAME':
            stateReturn = {
                ...state,
                result: action.result
            };
            break;
        case 'MARKER_LIST':
            let markerList = state.markerList;
            markerList[action.markerList.position] = action.markerList.marker;
            stateReturn = {
                ...state,
                markerList
            };
            break;

        case 'RESET_MARKER_LIST':
            stateReturn = {
                ...state,
                markerList: Array(9)
            };
            break;
        default:
            stateReturn = state;
    }

    return stateReturn;
}
const INITIAL_STATE = {
    player1: {
        score: 0,
        marker: 'x'
    },
    player2: {
        score: 0,
        marker: 'o'
    },
};

export default function playersInfo(state = INITIAL_STATE, action) {
    if (action.type === 'PLAYER_WIN') {
        return {
            ...state,
            [action.player]: {
                score: state[action.player].score+1,
                marker: state[action.player].marker,
            }
        }
    }

    return state;
}
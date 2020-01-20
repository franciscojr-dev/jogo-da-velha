export function startGame(marker) {
    let infoPlayers = {
        player1: marker,
        player2: marker === 'x' ? 'o' : 'x'
    };

    return {
        type: 'START_GAME',
        infoPlayers,
    };
}

export function resultGame(result) {
    return {
        type: 'RESULT_GAME',
        result,
    };
}

export function playerWin(player) {
    return {
        type: 'PLAYER_WIN',
        player,
    };
}

export function markerList(markerList) {
    return {
        type: 'MARKER_LIST',
        markerList
    }
}
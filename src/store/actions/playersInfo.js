export function startGame(infos) {
    return {
        type: 'START_GAME',
        infos,
    };
}

export function playerWin(player) {
    return {
        type: 'PLAYER_WIN',
        player,
    };
}
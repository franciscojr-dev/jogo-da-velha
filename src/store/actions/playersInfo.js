export function playerWin(player) {
    return {
        type: 'PLAYER_WIN',
        player,
    };
}
const divGame = document.getElementById('game');

const createBox = ()  => {
    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div');
        div.className = 'box';
        div.innerHTML = '<span>X</span>';
    
        divGame.appendChild(div);
    }
}

window.onload = () => {
    createBox();
}
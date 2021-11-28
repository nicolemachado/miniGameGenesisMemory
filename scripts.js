let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//lightColor proxima cor
let lightColor = (element, number) => {
    number = number * 300;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 150);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//ve se ta na mesm ordem gerada pelo js
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`sua pontuação é: ${score}\n
        Você acertou! Próximo nível!`);
        nextLevel();
    }
}

//click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//cor retornada
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//game over
let gameOver = () => {
    alert(`sua pontuação foi: ${score}!\n
    Você perdeu o jogo :c \n
    Clique em OK para iniciar um novo jogo <3`);
    order = [];
    clickedOrder = [];

    playGame();
}

//inicio do jogo
let playGame = () => {
    alert('Bem vindo! Iniciando jogo!');
    score = 0;

    nextLevel();
}

//clique nas ccores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();
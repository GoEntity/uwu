let game;
let gameWidth = 360;
let gameHeight = 720;
let context;
let scrollSpeed = 2.6;
let frameCount = 0;
let keyState = {};

let player = {
    width: 50,
    height: 68,
    speed: 6,
    img: new Image()
}
player.img.src = 'assets/player.png';

let playerX = gameWidth / 2 - player.width / 2;
let speedX = 0;
let speedY = 0;
let gravity = 0.5;
let jump = 6;
let jumpSpeed;

let platform = {
    array: [],
    width: 90,
    height: 20,
    img: new Image()
}
platform.img.src = 'assets/platform.png';

let gameOver = false;
let playerY;

window.onload = function() {
    game = document.getElementById('game');
    game.width = gameWidth;
    game.height = gameHeight;
    context = game.getContext('2d');
    document.addEventListener('keydown', function(e){
        keyState[e.keyCode || e.which] = true;
    }, true);
    document.addEventListener('keyup', function(e){
        keyState[e.keyCode || e.which] = false;
    }, true);
    updatePlatform();
    playerY = platform.array[0].y - player.height;
    jumpSpeed = -jump;
    gameLoop();
}

// function keyDown(e) {
//     if (e.keyCode == 32 && onPlatform()) {
//         speedY = jumpSpeed;
//     } else if (e.keyCode == 37) {
//         speedX = -player.speed;
//     } else if (e.keyCode == 39) {
//         speedX = player.speed;
//     }
// }

// function keyUp(e) {
//     if (e.keyCode == 37 || e.keyCode == 39) {
//         speedX = 0;
//     }
// }

function updatePlatform() {
    if (platform.array.length === 0) {
        platform.array.push({
            x: gameWidth / 2 - platform.width / 2,
            y: gameHeight - platform.height * 2
        });
    }
    
    while (platform.array.length < 10) {
        let y = platform.array[platform.array.length - 1].y - player.height * 3;
        platform.array.push({
            x: Math.random() * (gameWidth - platform.width),
            y: y
        });
    }
}

function gameLoop() {
    update();
    render();
    frameCount++;
    if (!gameOver) {
        requestAnimationFrame(gameLoop);
    }
}

function update() {
    let garbageY = playerY;
    speedY += gravity;
    if (keyState[37]){
        speedX = -player.speed;
    } else if (keyState[39]){
        speedX = player.speed;
    } else {
        speedX = 0;
    }
    if (keyState[32] && onPlatform()) {
        speedY = -jump;
    }
    playerX += speedX;
    playerY += speedY;
    playerX += speedX;
    playerY += speedY;

    if (playerY < garbageY) {
        let dy = (garbageY - playerY) * scrollSpeed;
        platform.array.forEach(plat => plat.y += dy);
    }

    if (playerX < 0) {
        playerX = 0;
    } else if (playerX + player.width > gameWidth) {
        playerX = gameWidth - player.width;
    }

    if (onPlatform()) {
        let plat = platform.array.find(plat =>
            playerX + player.width > plat.x &&
            playerX < plat.x + platform.width &&
            playerY + player.height >= plat.y &&
            playerY < plat.y);

        if (plat) {
            playerY = plat.y - player.height;
            speedY = 0;
        }
    }

    platform.array = platform.array.filter(plat => plat.y < gameHeight);

    if (playerY + player.height > gameHeight) {
        player.img.src = 0;
        gameOver = true;
    }

    updatePlatform();
}

function onPlatform() {
    return speedY >= 0 && platform.array.some(plat =>
        playerX + player.width > plat.x &&
        playerX < plat.x + platform.width &&
        playerY + player.height >= plat.y &&
        playerY < plat.y);
}

function render() {
    context.clearRect(0, 0, gameWidth, gameHeight);

    platform.array.forEach(plat => {
        // context.fillStyle = 'hotpink';
        var r_a = 0.75;
        context.fillStyle = `rgba(226, 27, 120, ${r_a})`;
        context.fillRect(plat.x, plat.y, platform.width, platform.height);
    });

    context.drawImage(player.img, playerX, playerY, player.width, player.height);

    if (gameOver) {
        context.font = "28px Monaco";
        var r_a = 0.75;
        context.fillStyle = `rgba(226, 27, 120, ${r_a})`;
        context.fillText("You lose... forever", gameWidth / 2 - 100, gameHeight / 2);
    }
}

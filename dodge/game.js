var isGameOver;
var player;
var playerImage;
var homework;
var homeworkImage;
var responsibilities;
var responsibilitiesImage;
var backgroundImage;
var essay;
var essayImage;
var summer;
var summerImage;
var mastering;
var masteringImage;

function preload(){
    playerImage = loadImage("https://i.imgur.com/ZWtwGt6.png?3");
    responsibilitiesImage= loadImage("https://i.imgur.com/WLlPM85.png?4");
    homeworkImage = loadImage("https://i.imgur.com/WLlPM85.png?3");
    essayImage = loadImage("https://i.imgur.com/KC3xpJ9.png?1");
    summerImage = loadImage("https://i.imgur.com/p6k5vLX.png?1");
    masteringImage = loadImage("https://i.imgur.com/qzpfts6.png?2");
    backgroundImage =loadImage("https://i.imgur.com/SuD5BBT.jpg?2");
}

function setup() {
    isGameOver = false;
    createCanvas(400, 400);
    player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
    player.addImage(playerImage);
    homework = createSprite(width / 2, 0, 0, 0);
    homework.addImage(homeworkImage);
    homework.rotationSpeed = 5.5;
    homework.position.x = random(5, width-5);
    responsibilities = createSprite(width / 2, 0, 0, 0);
    responsibilities.addImage(responsibilitiesImage);
    responsibilities.position.x = random(5, width-5);
    essay = createSprite(width / 2, 0, 0, 0);
    essay.addImage(essayImage);
    essay.rotationSpeed = 6.0;
    essay.position.x = random(5, width-5);
    summer = createSprite(width / 2, 0, 0, 0);
    summer.addImage(summerImage);
    summer.rotationSpeed = 5.3;
    summer.position.x = random(5, width-5);
    mastering = createSprite(width / 2, 0, 0, 0);
    mastering.addImage(masteringImage);
    mastering.position.x = random(5, width-5);
}

function draw () {
    if (isGameOver) {
        gameOver();
    } else {
        if(homework.overlap(player)) {
            isGameOver = true;
    }
        if(responsibilities.overlap(player)) {
            isGameOver = true;
    }
        if(essay.overlap(player)){
            isGameover = true;
    }
        if(summer.overlap(player)) {
            isGameover = true;
    }
        if(mastering.overlap(player)) {
            isGameover = true;
    }
    
    background(backgroundImage);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
     player.position.x += 4;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
        player.position.x -= 4;
    }
    
    if (keyDown(UP_ARROW) && player.position.y > (0 + (playerImage.height / 2))) {
        player.position.y -= 4;
    }
    
    if (keyDown(DOWN_ARROW) && player.position.y < (height - (playerImage.height / 2))) {
        player.position.y += 4;
    }
    
    homework.position.y = homework.position.y + 3;
    
    if (homework.position.y > height) {
        homework.position.y = 0;
        homework.position.x=random(5, width-5);
    }
    
    responsibilities.position.y = responsibilities.position.y +3;
    
    if (responsibilities.position.y > height) {
        responsibilities.position.y = 0;
        responsibilities.position.x = random (5, width-5);
    }
    
    essay.position.y = essay.position.y + 3;
    
    if (essay.position.y > height) {
        essay.position.y = 0;
        essay.position.x=random(5, width-5);
    }
    
    mastering.position.y = mastering.position.y + 3;
    
    if (mastering.position.y > height) {
        mastering.position.y = 0;
        mastering.position.x=random(5, width-5);
    }
    
    summer.position.y = summer.position.y + 3;
    
    if (summer.position.y > height) {
        summer.position.y = 0;
        summer.position.x=random(5, width-5);
    }
    
    drawSprites();
    }
}

function gameOver(){
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width / 2, height / 2);
    text("Click anywhere to try again", width / 2, 3  *height / 4);
}

mouseClicked = function () {
    if (isGameOver){
     isGameOver = false;
     player.position.x = width / 2;
     player.position.y = height - (playerImage.height / 2);
     homework.position.x = width / 2;
     homework.position.y = 0;
     responsibilities.position.x = width / 3;
     responsibilities.position.y = 0;
     essay.position.x = width / 3;
     essay.position.y = 0;
     summer.position.x = width / 3;
     summer.position.y = 0;
     mastering.position.x = width / 3;
     mastering.position.y = 0;
    }
}
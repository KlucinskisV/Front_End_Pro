const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


let score = 0;
let levelUp = 10;
let speed = 40;

// load images
const images = {};
images.player = new Image();
images.player.src = '/img/character.png';
const characterActions = ['up', 'top right', 'right', 'down right', 'down'];
const numberOfCharacters = 10;
const characters = [];
const cursor = {};
cursor.defalt = new Image();
cursor.defalt.src = '/img/hammer_png.png'

class Character {
    constructor(){
        this.width = 40;
        this.height = 43.875;
        this.frameX = 3;
        this.x = Math.random() * canvas.width - this.width;
        this.y = Math.random() * canvas.height - this.height;
        this.speed = (Math.random() * 2) + 3;
        this.minFrame = 0;
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
        if (this.action === 'up') {
            this.frameY = 0; 
            this.minFrame = 4;
            this.maxFrame = 15;
        }
        else if (this.action === 'top right') {
            this.frameY = 1; 
            this.minFrame = 4;
            this.maxFrame = 14;
        }
        else if (this.action === 'right') {
            this.frameY = 3; 
            this.minFrame = 3;
            this.maxFrame = 13;
        }
        else if (this.action === 'down right') {
            this.frameY = 4;
            this.minFrame = 4;
            this.maxFrame = 15;
        } 
        else if (this.action === 'down') {
            this.minFrame = 0;
            this.frameY = 6;
            this.maxFrame = 12;
        }
        else if (this.action === 'jump') {
            this.minFrame = 0;
            this.frameY = 7; 
            this.maxFrame = 9;
        }
     

    }
    draw(){
        drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width * 1.5, this.height * 1.5);
        
        if (this.frameX < this.maxFrame) this.frameX++;
        else this.frameX = this.minFrame;

        ctx.font = "24px san-serif"
        ctx.fillText("SCORE : " + score, 50, canvas.height - 50);

        
    }
    update(){
        if (this.action === 'up') {
            if (this.y < 0 - (this.height * 5)) {
                 this.y = canvas.height + this.height;
                 this.x = Math.random() * canvas.width;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y -= this.speed;  
             }
         }
         else if (this.action === 'top right') {
             if (this.y < 0 - this.height && this.x > canvas.width + this.width) {
                 this.y = canvas.height + this.height
                 this.x = Math.random() * canvas.width;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y -= this.speed; 
                 this.x += this.speed; 
             }
         }
         else if (this.action === 'right') {
             if (this.x > canvas.width + (this.width * 5)) {
                 this.x = 0 - this.width;
                 this.y = Math.random() * canvas.height; 
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.x += this.speed; 
             }
         }
         else if (this.action === 'down right') {
             if (this.y > canvas.height + this.height && this.x > canvas.width + this.width) {
                 this.y = 0 - this.height
                 this.x = Math.random() * canvas.width;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y += this.speed; 
                 this.x += this.speed; 
             }
         } 
         else if (this.action === 'down') {
             if (this.y > canvas.height + (this.height * 5)) {
                 this.y = 0 - this.height;
                 this.x = Math.random() * canvas.width;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y += this.speed;  
             }
         }
         else if (this.action === 'jump') {
 
         }

        
         //console.log(characters)
         //debugger
    }
}
/*
function levelUp(){
    if(score > 10){
        if (score % 20 == 0) {
            score.text(parseInt(score.text()) + 1);
        }
        if (score % 500 == 0) {
            speed+10;
            
        }


    }
}
*/
for (i = 0; i < numberOfCharacters; i++){
    characters.push(new Character());
}


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}



function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (i = 0; i < characters.length; i++ ){
        characters[i].draw();
        characters[i].update();
    }

}




window.onload = setInterval(animate, 1000/speed);


window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})
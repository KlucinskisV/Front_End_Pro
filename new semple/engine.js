// Setup canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;

let score = 0;
let gameFrame = 0;
ctx.font = '40px Georgia';

// Mouse engine
let canvasPosit = canvas.getBoundingClientRect()

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}

canvas.addEventListener('mousedown', function(e){
    mouse.click = true;
    mouse.x = e.x - canvasPosit.left;
    mouse.y = e.y - canvasPosit.top;
    console.log(mouse.x,mouse.y);
});
canvas.addEventListener('mouseup', function(e){
    mouse.click = false;
});
//  Circles
class FirstCircle {
    constructor(){ 
        this.x = canvas.width / 2 ;
        this.y = canvas.height  ;
        this.radius = 50;

    }
    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        if (mouse.x != this.x){
            this.x -= dx/5;
        }
        if (mouse.y != this.y){
            this.y -= dy/5;
        }
    }
    draw(){
        if (mouse.click){
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            //ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
        ctx.fillStyle = 'rgba(62, 173, 121, 0.734)'
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();


    }
    
}

const oneCircle = new FirstCircle();

const circleArr = [];
// Random Cicles
class randomCicles {
    constructor(){
        this.x = Math.random() * canvas.width ;
        this.y =canvas.height - Math.random() * canvas.height ;
        this.radius = 50;
        this.speed = Math.random()  + 1;
        this.distance;
        this.couted = false;
    }
    update(){
        this.y += this.speed;
        const dx = this.x - oneCircle.x;
        const dy = this.y - oneCircle.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);

      
        
    }
    draw(){

        ctx.fillStyle = 'rgba(131, 128, 113, 0.556)'
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

    }
}

function hanlCircle (){
    if (gameFrame % 100 == 0){
        circleArr.push(new randomCicles());
        console.log(circleArr.length);
    }
    for(let i = 0; i < circleArr.length; i++){
        circleArr[i].update();
        circleArr[i].draw();
    
    }
    for(let i = 0; i < circleArr.length; i++){
        if(circleArr[i].y <= 0 - circleArr[i].radius * 2 ){
           circleArr.splice(i, 1);
       }
      // if(circleArr[i] > 15){
       // circleArr.splice(i, 1);
       //}
        if(circleArr[i].distance < circleArr[i].radius + oneCircle.radius){
            console.log('Point');
            if (!circleArr[i].couted){
                score++;
                circleArr[i].couted = true;
                circleArr.splice(i, 1);

            }
        }

    }
}

// Animate

function animate (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hanlCircle ();
    oneCircle.update();
    oneCircle.draw();
    gameFrame++;
    ctx.fillStyle = 'black';
    ctx.fillText ('Score:  ' + score, 30, 70)
    requestAnimationFrame(animate);
}

animate();
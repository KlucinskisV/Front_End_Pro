const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let maxRadius = 10;

const  mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener('mouseup', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  
  console.log(mouse.x,mouse.y);
});

//Player circle
class playerCircle {
  constructor(){ 
    this.x = canvas.width / 2 ;
    this.y = canvas.height  ;
    this.radius = 20;

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
          c.lineWidth = 0.2;
          c.beginPath();
          c.moveTo(this.x,this.y);
          c.lineTo(mouse.x,mouse.y);
          c.stroke();
      }
      c.fillStyle = 'rgba(62, 173, 121, 0.734)'
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,Math.PI*2);
      c.fill();
      c.closePath();
    }
}

const player =  new playerCircle();


function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
    c.strokeStyle = "black";
    //c.fill();
    c.stroke(); 
  }


  this.update = function(){
    this.draw();
    if(this.x + this.radius >= canvas.width || this.x - this.radius <= 0){
      this.dx = -this.dx;
    
    }
    if(this.y + this.radius >= canvas.height || this.y - this.radius <= 0){
      this.dy = -this.dy;
    }
    this.x -= this.dx;
    this.y -= this.dy;
  }

}


let circleArray = [];

for(let i = 0; i < 10; i++){
  let r = Math.floor(Math.random() * 5) + 25 ;
  let x = Math.random() * (innerWidth - r*2) + r;
  let y = Math.random() * (innerHeight - r*2) + r;
  let dx = (Math.random() - 0.5) * 5;
  let dy = (Math.random() - 0.5) * 5;
  circleArray.push(new Circle(x, y, dx, dy, r));
  console.log(circleArray)
}

function animate(){

   player.update();
   player.draw();
  
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for(i = 0; i < circleArray.length ; i++){
    circleArray[i].update();
  }
  requestAnimationFrame(animate);

}



animate(); 
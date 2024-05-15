

class MouseControler {
    constructor( container = document.body ) {
        this.container = container
        this.isPressed = false
        this.isDown = false
        this.isUp = false
        this.pos = {x: 0, y: 0}
        
        container.addEventListener( `mouseup`,     e => this.changeState(e) )
        container.addEventListener( `mousedown`,   e => this.changeState(e) )
        container.addEventListener( `mousemove`,   e => this.changeState(e) )
        container.addEventListener( `mouseleave`,  e => this.changeState(e) )
        
       /* container.addEventListener( `contextmenu`, e => this.changeState(e) )
        container.addEventListener( `mousewheel`,  e => this.changeState(e) )*/
      }
      changeState(e){
        console.log(e.type);
        const rect = this.container.getBoundingClientRect()

        this.pos.x = e.clientX - rect.left
        this.pos.y = e.clientY - rect.top
        console.log(this.pos.x,this.pos.y)

        if (e.type === 'mousedown') {
            this.isPressed = true
            this.isDown = true
            this.isUp = false
          } else if (e.type === 'mouseup' || e.type === 'mouseleave') {
            this.isPressed = false
            this.isDown = false
            this.isUp = true
          } 
         
      }
      update() {
        this.isDown = false
        this.isUp = false


        
      }
}
 
const mouse = new MouseControler()



requestAnimationFrame ( animate)
function animate(){
    requestAnimationFrame( animate)
}

/*var cursors=['default','w-resize','n-resize'];
var currentCursor=0;

function definePath(p){
  ctx.beginPath();
  ctx.moveTo(p[0].x,p[0].y);
  for(var i=1;i<p.length;i++){
    ctx.lineTo(p[i].x,p[i].y);
  }
  ctx.closePath();
}

function handleMouseMove(e){
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();

  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mousemove stuff here
  var newCursor;
  for(var i=0;i<shapes.length;i++){
    var s=shapes[i];
    definePath(s.points);
    if(ctx.isPointInPath(mouseX,mouseY)){
      newCursor=s.cursor;
      break;
    }
  }
  if(!newCursor){
    if(currentCursor>0){
      currentCursor=0;
      canvas.style.cursor=cursors[currentCursor];              
    }
  }else if(!newCursor==currentCursor){
    currentCursor=newCursor;
    canvas.style.cursor=cursors[currentCursor];              
  }
}*/
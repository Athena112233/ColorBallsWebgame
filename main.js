//define canvas dimensions
//canvas is used to draw graphics, game graphics in this case
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d'); //c is abbreivation for context


c.beginPath()
c.arc(10, 10, 30, 0, Math.PI*2);
c.stroke();

//create a player class
class Player{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        c.fillStyle = this.color;
        c.fill();
    }
}

//create player instance
const x = canvas.width/2
const y = canvas.height/2
const player = new Player(x, y, 30, 'pink');
player.draw();


//define context
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Projectile{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.raidus = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}


//create projectile
window.addEventListener('click', function(event){
    const projectile = new Projectile(event.clientX, event.clientY, 10, 'pink', 5)
    projectile.draw()
})

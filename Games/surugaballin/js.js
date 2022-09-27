const canvas = document.querySelector('canvas')
const div = document.querySelector('.box')
const c = canvas.getContext('2d')
const ball = document.querySelector('.ball')
const pointh = document.querySelector('#score')
c.imageSmoothingEnabled = false;
function menu(){
  window.location.href = "../../index.html";
}
canvas.width = 1600
canvas.height = 900

const ratio = innerWidth/innerHeight
if(innerHeight>innerWidth){
  div.style.transform ='scale('+ innerWidth/1600 +')'

}
if(ratio>1.777){
  div.style.transform ='scale('+ innerHeight/900 +')'

}
if(ratio<=1.777){
  div.style.transform ='scale('+ innerWidth/1600 +')'

}

addEventListener('resize', (event) => {
  const ratio = innerWidth/innerHeight
if(innerHeight>innerWidth){
  div.style.transform ='scale('+ innerWidth/1600 +')'

}
if(ratio>1.777){
  div.style.transform ='scale('+ innerHeight/900 +')'

}
if(ratio<=1.777){
  div.style.transform ='scale('+ innerWidth/1600 +')'

}
});










var bgm = new Audio('./files/surugame.mp3')		
    
bgm.volume = 0.25
bgm.loop = true
var pauseout = new Audio('./files/pause out.wav')
var pausein = new Audio('./files/pausein.wav')
var ball1 = new Audio('./files/basketball1.wav')
var ball2 = new Audio('./files/basketball2.wav')
var ball3 = new Audio('./files/basketball3.wav')
var ball4 = new Audio('./files/basketball4.wav')
var point = new Audio('./files/hachigame acquire.wav')
setInterval(() => {
  if(Math.random()*4<=1){
    bfx = ball1
  }else if((Math.random()*4<=2)){
    bfx = ball2
  }else if((Math.random()*4<=3)){
    bfx = ball3
  }else if((Math.random()*4<=4)){
    bfx = ball4
  }
  if(!sound){
bfx.muted = true
  }
}, 100);
var sfxd = document.querySelector('.sfx')
var musicd = document.querySelector('.music')
let sfxa = []
sfxa.push(pauseout)
sfxa.push(pausein)
sfxa.push(ball1)
sfxa.push(ball2)
sfxa.push(ball3)
sfxa.push(ball4)
sfxa.push(point)
sfxa.forEach(element => {
  element.volume = 0.2
});	
function removes(){
sessionStorage.removeItem("music");
sessionStorage.removeItem("sound");
}
let musics = sessionStorage.getItem("music");
let sounds = sessionStorage.getItem("sound");
let sound 
let music
if(sounds == 'on'|| sounds == undefined){
sound = true
sfxa.forEach(element => {
  element.muted = false
});
}else if(sounds == 'off'){
sound = false
sfxa.forEach(element => {
  element.muted = true
});
}
if(musics == 'on'|| musics == undefined){
music = true
bgm.muted = false
}else if(musics == 'off'){
music = false
bgm.muted = true
}








const startd = document.querySelector('.startgame')
const pauset = document.querySelector('.pause')
const paused = document.querySelector('.paused')
function startgame(){
  bgm.play()
  gamerun = true
  animate()
pauset.style.display = 'block'
startd.style.display = 'none'
pointh.style.display = 'block'
}

function pause(){
  pausein.play()
  bgm.pause()
  paused.style.display = 'block'
  gamerun = false
}
function resume(){
  
  pauseout.play()
  bgm.play()
  paused.style.display = 'none'
  gamerun = true
  animate()
}

const endd = document.querySelector('.endgame')
function restart(){  
  
  pauseout.play()
  bgm.play()
  balls.position.y = -3021
  animate()
  totalball = 10
  thispoint = false
  ballthrown = 0
  above = false
  basket = false
  balldown = false
  throwed = false
  canthrow = false
  ballcount = 0
  points = 0
  endgame  = false
  gamerun = true
  
  paused.style.display = 'none';
  endd.style.display = 'none';
startd.style.display = 'none';
pointh.style.display = 'block';
kanbaru.framesCurrent = 0;
kanbaru.framesElapsed = 0;
ballthrow(ballthrown)
ball.style.display = 'none'
thispoint = false
kanbaru.position.x = 800 -85*ballthrown
  
  animate()
}

const scoretd = document.querySelector('.scoretd')
function endgamee(){
  endd.style.display = 'block';
  gamerun = false
  finalscore = points
  scoretd.innerHTML = points + '/' + totalball  
  }
  


















c.fillStyle = 'black'

let lastx = 'positive'
class Sprite {
  constructor({
    position ={x:0,y:0},

    velocity = {x:0,y:0}

    }) {
    this.position = position
    this.velocity = velocity
    this.gravity = 0.8
    this.rotatespeed =0
} 

  draw(){
    ball.style.left = this.position.x +'px'
    ball.style.top = this.position.y +'px'
    ball.style.rotate = this.rotatespeed+ 'deg'
  }
  update() {
    this.velocity.y += this.gravity
    if(this.velocity.x>0.01){
    this.velocity.x -= this.gravity*0.05
  }else if(this.velocity.x<-0.01){
    this.velocity.x += this.gravity*0.05
  }else if(this.velocity.x<0.01&&this.velocity.x>-0.01){
    this.velocity.x = 0
   
  }
    if(this.velocity.x>0){
      lastx ='positive'
    }
    if(this.velocity.x<0){
      lastx ='negative'
    }
    if(this.position.y +60 + this.velocity.y>canvas.height){   
      bfx.play()  
      this.velocity.y = Math.trunc(this.velocity.y*-0.7)  
      if(this.velocity.x >5) {
      this.velocity.x -=  2}else if(this.velocity.x <-5){this.velocity.x +=  3;}
      
    }

    this.draw() 

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if(this.velocity.y!=0 && lastx === 'positive'){
    this.rotatespeed +=(this.velocity.x*1)+0.4
  }else if(this.velocity.y!=0 && lastx === 'negative'){this.rotatespeed +=(this.velocity.x*1)-0.4}else{
    this.rotatespeed +=(this.velocity.x*1)
  }
  }


}
const balls = new Sprite({
  position:{x:900- 85*7,y:540},
  velocity:{x:0,y:0}
})







class Kanbaru {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 8,
    offset = { x: 0, y: 0 },
    velocity = { x:0, y:0},
    sprites
  }) {
    this.position = position
    this.width = 80
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 4
    this.offset = offset
    this.velocity= velocity
    this.gravity = 0
    this.lastKey
    this.name = 'araragi'
  this.sprites = sprites
  for (const sprite in this.sprites) {
    sprites[sprite].image = new Image()
    sprites[sprite].image.src = sprites[sprite].imageSrc
  }
}
  
  draw() {
    c.imageSmoothingEnabled = false;
      c.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale
      )

  }
  
  animateFrames() {
    if(this.framesCurrent != 13){
    this.framesElapsed++


    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }
}
  update() {
    this.draw()
    this.animateFrames()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y  
    }
  switchSprite(sprite) {
  
    switch (sprite) {
      case 'idleright':
        if (this.image !== this.sprites.idleright.image) {
          this.image = this.sprites.idleright.image
          this.framesMax = this.sprites.idleright.framesMax
          this.offset.x = 0
          this.offset.y = 0
          this.framesCurrent = 0
          this.framesElapsed = 0
        }
        break
     
        case 'walkright':
        if (this.image !== this.sprites.walkright.image) {
          this.image = this.sprites.walkright.image
          this.framesMax = this.sprites.walkright.framesMax
          this.framesCurrent = 0
          this.framesElapsed = 0
          this.offset.x = 20
          this.offset.y = 140
        }
        break
      }
}
}


const kanbaru = new Kanbaru({

  position: {

    x: 800,

    y: 510

  },scale: 2,framesMax:7,

  imageSrc: './images/surugame/suruga bounce.png',
  offset:{
    x:0,
    y:0
  },
  sprites: {

    idleright: {
      
   
      imageSrc: './images/surugame/suruga bounce.png',
  
      framesMax: 7

    },


    walkright: {
     
        imageSrc: './images/surugame/throw.png',
    
    
      framesMax: 14

    }
  }
})















let totalball = 10
let thispoint = false
let ballthrown = 0
let above = false
let basket = false
let balldown = false
let throwed = false
let canthrow = false
let gamerun = false
let ballcount = 0
let points = 0
let endgame  = false
function animate(){
  pointh.innerHTML = points + '/' + ballthrown

  if(canthrow&&throwed){
  balls.update()}
  c.clearRect(0,0,canvas.width,canvas.height)
  if(canthrow && !throwed){kanbaru.framesCurrent = 8;
   }
  
    kanbaru.update()
  // //left to right line
  // // c.fillRect(balls.position.x,balls.position.y+60/2-5,60,10)
  // //top to bottom line
  // c.fillRect(balls.position.x+60/2-5,balls.position.y,10,60)
  // c.fillRect(1310,480,30,-20)
if(balls.position.x+60/2+55 > 1310 && balls.position.x+60/2+-5<1340 && balls.position.y+60 > 480 && balls.position.y < 460){
  const distance = balls.position.x+60/2+55 - 1340
  const distancepr = distance/55
  const idk = 1.2 - distancepr 
  console.log(idk)
  if(distancepr>0.5&&distancepr <1){
balls.velocity.x = balls.velocity.x*-1
balls.velocity.y *= -0.7
balls.position.x-=5;bfx.play()
}else  if(distancepr>=1){
  balls.velocity.x +=  balls.velocity.x*-0.7
  balls.position.x+=5
  balls.velocity.y *= -0.7;bfx.play()}
  }
  

  if(balls.position.x+60> 1500 && balls.position.x<1530 && balls.position.y+60> 210 && balls.position.y < 211){
    bfx.play()
    balls.velocity.x *= -0.8
    balls.velocity.y *= -0.8
  }else if(balls.position.x+60> 1500 && balls.position.x<1530 && balls.position.y+60> 519 && balls.position.y < 520){
    balls.velocity.x *= -0.8
    balls.velocity.y += 5
    bfx.play()
  }else if(balls.position.x+60> 1500 && balls.position.x<1530 && balls.position.y+60> 210 && balls.position.y < 510){
    balls.velocity.x *= -0.84
  balls.velocity.y *= 0.8
  balls.velocity.x -= 2
  bfx.play() 
}


  if(balls.position.x+60>1340 && balls.position.x<1340+150 && balls.position.y+60> 300+60 && balls.position.y < 300+90+60){
    above = true
  }
  if(balls.position.x+60>1340 && balls.position.x<1340+150 && balls.position.y+60> 425+60 && balls.position.y < 425+90+60){
    basket = true
  }

if(ballthrown>=totalball){endgame = true; }

  if(kanbaru.image === kanbaru.sprites.walkright.image && kanbaru.framesCurrent ===8){
    ball.style.display = 'block'
    canthrow = true;    
  }
  
  if(balls.position.y>800&&canthrow){
    ballcount+= 5
  }
if(ballcount>=200){
  ball.style.display = 'none'
  canthrow = false
  balldown = true
}else{balldown = false}
if(balldown){
  reset()
}

// c.fillStyle = 'red'
// c.fillRect(1340,300+60,150,90)
// c.fillRect(1340,425+60,150,90)

if(gamerun){
requestAnimationFrame(animate)
}
}
function reset(){
  thispoint = false
  kanbaru.position.x = 800 -85*ballthrown
  kanbaru.switchSprite('idleright')
  balls.position.y= -3000

  ballcount = 0
  ballthrow(ballthrown)
  
 above = false
 basket = false
 balldown = false
 throwed = false
 canthrow = false
 ballcount = 0
}
function ballthrow(b){
  if(!endgame){
  setTimeout(() => {  
     
    kanbaru.switchSprite('walkright')
    console.log("done")
    
    balls.position.y = 421
    balls.position.x = 893 -85*b
    
    balls.update()
  }, 1000);
}else{endgamee()}
}

ballthrow(ballthrown)



// //basket thing
// c.fillStyle = 'green'
// c.fillRect(1310,390,60,20)
setInterval(() => {
  if(basket&&above&&ballcount===0&&!thispoint){
  basket = false
  above = false
  points ++
  thispoint = true
  point.play()
  }
}, 100);
//backboard
c.fillStyle = 'purple'
c.fillRect(1500,210,30,300)
animate()






// canvas.addEventListener('mousemove', (event) => {
//   const angle = Math.atan2(event.offsetY - balls.position.y, event.offsetX - balls.position.x)
//   x= Math.cos(angle),
//   y= Math.sin(angle)
//   let difx = 30 -  event.offsetX
//   if(difx<0){

//   }

//   if(canthrow&&!throwed){

// c.beginPath
// c.moveTo(balls.position.x+30,balls.position.y+30)
// c.lineTo(event.offsetX,event.offsetY)
// c.stroke()
// c.closePath
//   }else{c.clearRect(0,0,canvas.width,canvas.height)}
// })

canvas.addEventListener('click', (event) => {
  if(canthrow&&!throwed){
    throwed=true
    ballcount = 0
  ballthrown++
  // setInterval(() => {
  //   canthrow = false
  // }, 1000);
  const angle = Math.atan2(event.offsetY - balls.position.y, event.offsetX - balls.position.x)
const speed = 40
console.log(  ballthrown)
  const velocity = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed
  }
  // if(event.offsetY>balls.position.y &&event.offsetX < balls.position.x){
  //   velocity.y *=-1
  // }
  balls.velocity.x = velocity.x
  balls.velocity.y = velocity.y

}
console.log(canthrow)
})
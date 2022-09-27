const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
let scoret = document.querySelector('#score')
canvas.width = 1600
canvas.height = 900
c.imageSmoothingEnabled = false;
const ratio = innerWidth/innerHeight
		var gamediv = document.querySelector('.gamediv');
		canvas.width =1600;
		canvas.height = 900;
		if(innerHeight>innerWidth){
			gamediv.style.transform ='scale('+ innerWidth/1600 +')'
	
		}
		if(ratio>1.777){
			gamediv.style.transform ='scale('+ innerHeight/900 +')'
	
		}
		if(ratio<=1.777){
			gamediv.style.transform ='scale('+ innerWidth/1600 +')'
		
		}

		addEventListener('resize', (event) => {
			const ratio = innerWidth/innerHeight
		if(innerHeight>innerWidth){
			gamediv.style.transform ='scale('+ innerWidth/1600 +')'
	
		}
		if(ratio>1.777){
			gamediv.style.transform ='scale('+ innerHeight/900 +')'
	
		}
		if(ratio<=1.777){
			gamediv.style.transform ='scale('+ innerWidth/1600 +')'
		
		}
		});

function menu(){
  window.location.href = "../../index.html";
}



    var bgm = new Audio('./files/hitagame.mp3')		
    
    bgm.volume = 0.25
		bgm.loop = true
		var menuselect = new Audio('./files/menu back.wav')
		var gameselect = new Audio('./files/menu select.wav')
		var pauseout = new Audio('./files/pause out.wav')
    var pausein = new Audio('./files/pausein.wav')
    var catchs = new Audio('./files/ragi catch.wav')
    var drops = new Audio('./files/ragi drop.wav')
    let sfxa = []
		sfxa.push(menuselect)
		sfxa.push(gameselect)
		sfxa.push(pauseout)
    sfxa.push(pausein)
    sfxa.push(catchs)
    sfxa.push(drops)
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
		

	







    const time = document.querySelector('#timer')
const timing = 60
    time.innerHTML = 'Time: ' + timing
let timer = timing
let gamerun = false
let finalscore
setInterval(() => {
  if(gamerun){
    timer--
    time.innerHTML = 'Time: ' + timer
  if(timer<=0){
    endgame()
  }
  }
}, 1000);

const endd = document.querySelector('.endgame')

const scoretd = document.querySelector('.scoretd')
function endgame(){
endd.style.display = 'block';
gamerun = false
finalscore = score
scoretd.innerHTML = finalscore
score = 0
}

const pauset = document.querySelector('.pause')
const startd = document.querySelector('.startgame')
function startgame(){
  bgm.play()
  gamerun = true
  animate()
pauset.style.display = 'block'
startd.style.display = 'none'
time.style.display = 'block'
scoret.style.display = 'block'
}

function restart(){  
  pauseout.play()
  bgm.play()
  scoret.innerHTML = 'Score: 0'
  partis = []
  senjougahara = []
  score = 0
  degree = 0
  time.innerHTML = 'Time: ' + timing
  araragi.position.x = canvas.width/2-25
  araragi.position.y = 400
  araragi.velocity.y = 0
  timer = timing 
  gamerun = true
  animate()
  paused.style.display = 'none'
  endd.style.display = 'none';
startd.style.display = 'none'
time.style.display = 'block'
scoret.style.display = 'block'
}

const paused = document.querySelector('.paused')
function pause(){
  bgm.pause()
  paused.style.display = 'block'
  gamerun = false
  pausein.play()
}
function resume(){
  bgm.play()
  paused.style.display = 'none'
  gamerun = true
  animate()
   pauseout.play()
}



class Sprite {
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
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.offset = offset
    this.velocity= velocity
    this.gravity = 1  
    this.lastKey
  this.sprites = sprites
  for (const sprite in this.sprites) {
    sprites[sprite].image = new Image()
    sprites[sprite].image.src = sprites[sprite].imageSrc
  }
}
  
  draw() {
    // c.fillStyle = 'red'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // c.fillStyle = 'black'
c.save()
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
        
      c.restore()
  }
  
  animateFrames() {
    this.framesElapsed++


    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  update() {
    this.draw()
    this.animateFrames()
    
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height +this.velocity.y >= canvas.height ) {
      this.velocity.y = 0
     
    } else this.velocity.y += this.gravity
    
    
  }
  switchSprite(sprite) {
    if (
      
      this.image === this.sprites.catch.image &&
      this.framesCurrent < this.sprites.catch.framesMax - 1
    )
      return
    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.offset.x=0
          this.offset.y=0
          if(this.framesCurrent > 4){
            
          this.framesCurrent = 0
          }
        }
        break
      case 'left':
        if (this.image !== this.sprites.left.image) {
          this.image = this.sprites.left.image
          this.framesMax = this.sprites.left.framesMax
          
        }
        break
      case 'right':
        if (this.image !== this.sprites.right.image) {
          this.image = this.sprites.right.image
          this.framesMax = this.sprites.right.framesMax
         
        }
        break
        case 'catch':
        if (this.image !== this.sprites.catch.image) {
          this.image = this.sprites.catch.image
          this.framesMax = this.sprites.catch.framesMax
          this.offset.x=50
          this.offset.y=50
          this.framesCurrent = 0
        }
        break
      }
}
}

class Background {
  constructor({
    position,
    imageSrc,
    scale = 1,
   
  }) {
    this.position = position
    this.width = 50
    this.height = 80
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
  }
  
  draw() {
    c.imageSmoothingEnabled = false;
    c.drawImage(this.image, this.position.x, this.position.y, this.image.width*this.scale, this.image.height * this.scale);
  }

  update() {
    this.draw()
  }
}
class Shadow {
  constructor({
    position,
    imageSrc,
    scale = 1,
   
  }) {
    this.position = position
    this.width = 50
    this.height = 80
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
  }
  
  draw() {
    c.imageSmoothingEnabled = false;
    c.drawImage(this.image, this.position.x, this.position.y, 496*this.scale, 900);
  }

  update() {
    this.draw()
  }
}
const bg = new Background({

  position: {

    x: -1024*1.5,

    y: 0

  },scale: 3,

  imageSrc: './images/hitagame/hitagamebg.png',
 
})
const shadow = new Shadow({

  position: {

    x: (canvas.width/2)-250,

    y: 0

  },scale: 1,

  imageSrc: './images/hitagame/shadow.png',
 
})

class Sprite2 {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    velocity = { x:0, y:0},
    bruh = 0
  }) {
    this.position = position
    this.width = 50
    this.height = 80
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.offset = offset
    this.velocity= velocity
    this.gravity = 0.7  
    this.lastKey
    this.bruh = bruh}
  
  draw() {
    // c.fillStyle = 'green'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // c.fillStyle = 'black'
    c.save()
    c.imageSmoothingEnabled = false;
    if(this.bruh>50){
        c.shadowBlur = 10;
        c.shadowColor = "purple"; 
  }
  if(this.bruh<50){
    c.shadowBlur = 20;
    c.shadowColor = "black"; 
}
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
      
  c.restore()
  }
  
  animateFrames() {
    this.framesElapsed++


    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  update() {

    
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height >= canvas.height ) {
      this.velocity.y = 0
     
    } else this.velocity.y += this.gravity/5
    this.draw()
    this.animateFrames()
    
  }
}
var senjougahara = []

function spawnHitagi(){
  setInterval(() => {
    if(gamerun){  
      const random = Math.random() * canvas.width 
      let x
      if(random < 250){
        x = random + 250
      } 
      else if(random > 774){
        x = random - 250
      }
      else if(random < 774){
        x = random 
      }
      const y = 0
      const bruh = Math.random()*100
      senjougahara.push(
        new Sprite2({
            position:{
              x:x,
              y:y
            },
            scale: 2,framesMax:3,
  
    imageSrc: './images/hitagame/senjougahara/fall.png',
    offset:{
      x:60,
      y:0
    },bruh
        })
  )
    
}
  }, 5000);
}
spawnHitagi()
console.log(senjougahara)
const araragi = new Sprite({

  position: {

    x: (canvas.width/2)- 25,

    y: 400

  },scale: 2,

  imageSrc: './images/hitagame/araragi/ragihitagame.png',
  offset:{
    x:0,
    y:0
  },
  sprites: {

    idle: {
      
   
      imageSrc: './images/hitagame/araragi/ragihitagame.png',
  
      framesMax: 6

    },

    left: {
     
        imageSrc: './images/hitagame/araragi/ragihitagamewalk.png',
    
    
      framesMax: 8

    },

    right: {
     
        imageSrc: './images/hitagame/araragi/ragihitagamewalk right.png',
    
      framesMax: 8

    },
    catch: {
     
      imageSrc: './images/hitagame/araragi/araragicatch.png',
  
    framesMax: 9

  }}

})

// Objects
class Particle {
  constructor(x, y,width,height, color, velocity, radians = 0.0314, radiansy = 1,low = 0) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.position = {
      x: this.x,
      y: this.y
    }
    this.color = color
    this.velocity = velocity
    this.radians = radians
    this.radiansy = radiansy
    this.move = 0
    this.movey = 0
    this.low = low
  }

  draw() {
    c.beginPath()
    c.fillRect(this.x, this.y, this.width, this.height)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    
   this.move = this.radians + this.move
   this.movey = this.radiansy + this.movey
    this.x = Math.cos(this.move + this.low) * 100 + this.position.x
    this.y = this.movey + this.position.y
    this.ttl--
    this.draw()
 
  }
}

// Implementation
let particles

  particles = []







  const particleCount = 100

  for (let b = 0; b < 300; b+=particleCount){
    
  for (let i = b; i < particleCount/2+b; i++) {
    const radian = (Math.PI * 2) / particleCount
    const width = 70 
    const height = 10
    const x = canvas.width/2 - Math.cos(radian *i)*400 -130
    const y = canvas.height - i*height + 760
    const radians = 0
    const radiansy =  0
    const low = 0
    const hue = Math.sin(radian* - i)*255 -25
    particles.push(
      new Particle(x, y,width,height,  `rgb(${hue},${hue},${hue})`, {
        x: 0,
        y: 10
      },
      radians,
      radiansy, low)
    );
  }

  for (let i = b; i < particleCount/2+b; i++) {
    const radian = (Math.PI * 2) / particleCount
    const width = 70 
    const height = 10
    const x = canvas.width/2 + Math.cos(radian *i)*400 -130
    const y = canvas.height - i*height + 760
    const radians = 0
    const radiansy =  0   
    const low = 0
    const hue = Math.sin(radian* i)*255 -25  
    particles.push(
      new Particle(x, y,width,height,  `rgb(${hue},${hue},${hue})`, {
        x: 0,
        y: 10
      },
      radians,
      radiansy, low)
    ); 
  }


  for (let i = b+ particleCount/2; i < particleCount+b; i++) {
    const radian = (Math.PI * 2) / particleCount
    const width = 70 
    const height = 10
    const x = canvas.width/2 + Math.cos(radian *i)*400 -130
    const y = canvas.height - i*height + 760
    const radians = 0
    const radiansy =  0   
    const low = 0
    const hue = Math.sin(radian* i)*255 -25  
    particles.push(
      new Particle(x, y,width,height,  `rgb(${hue},${hue},${hue})`, {
        x: 0,
        y: 10
      },
      radians,
      radiansy, low)
    ); 
  }

  for (let i = b+ particleCount/2; i < particleCount+b; i++) {
    const radian = (Math.PI * 2) / particleCount
    const width = 70 
    const height = 10
    const x = canvas.width/2 - Math.cos(radian *i)*400 -130
    const y = canvas.height - i*height + 760
    const radians = 0
    const radiansy =  0
    const low = 0
    const hue = Math.sin(radian* - i)*255 -25
    particles.push(
      new Particle(x, y,width,height,  `rgb(${hue},${hue},${hue})`, {
        x: 0,
        y: 10
      },
      radians,
      radiansy, low)
    );
  }}

  const keys = {

    a: {
  
      pressed: false
  
    },
  
    d: {
  
      pressed: false
  
    },
    
  
    w: {
  
      pressed: false
  
    }}

    function rectangularCollisionh({ rectangle1, rectangle2 }) {
      if(rectangle2.bruh>50){
      return (
  
        rectangle1.position.x + rectangle1.width >=
  
          rectangle2.position.x &&
  
        rectangle1.position.x <=
  
          rectangle2.position.x + rectangle2.width &&
  
        rectangle1.position.y + rectangle1.height >=
  
          rectangle2.position.y &&
  
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height
  
      )
    }
    }




    let partis = []

    // Objects
    class Parti {
      constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.ttl = 1000
        this.tranparency = 2
      }
    
      draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color + this.tranparency + ')'
        c.fill()
        c.closePath()
      }
    
      update() {
        this.draw()
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.ttl
        this.tranparency -= 0.025
      }
    }
    
    function generateRing(position,color) {    
      const particleCount = 50    
      for (let i = 0; i < particleCount; i++) {
        // full circle = pi * 2 radians
        const radian = (Math.PI * 2) / particleCount
        const particleradius = Math.random()*3
        const x = position.x
        const y = position.y
        const ptransparency = Math.random()*1
        const pveloc = Math.random()*4+1
        partis.push(
          new Parti(x, y, particleradius, color, {
            x: Math.cos(radian * i) * pveloc,
            y: Math.sin(radian * i) * pveloc
          })
        )
      }
    
    }
    

























let isCatching = false
let score = 0
let degree = 0
// Animation Loop
function animate() {
  if(isCatching){keys.a.pressed=false;keys.d.pressed=false }

  
bg.update()

 senjougahara.forEach((hitagi) => {
  if(hitagi.bruh < 50)
  hitagi.update() 
})
shadow.update()
  particles.forEach((particle) => {    
      particle.update()     
  })
  partis.forEach((particle, i) => {
    if (particle.ttl < 0) {
      partis.splice(i, 1)
    } else {
      particle.update()
    }
  })
  senjougahara.forEach((hitagi, i) => {
    if(hitagi.bruh > 50){
    hitagi.update()}
    if (hitagi.position.y + hitagi.height >= canvas.height ){
      senjougahara.splice(i,1)
      drops.play()
      
      generateRing(position={x:hitagi.position.x+20,y:hitagi.position.y+20},color='rgba(102, 29, 98,')
    }
    if (hitagi.position.y>canvas.height/2 &&

      rectangularCollisionh({
  
        rectangle1: araragi,
  
        rectangle2: hitagi
      })
      ){
        catchs.play()
        isCatching = true
        senjougahara.splice(i,1)
        score += 10
        scoret.innerHTML = 'Score: ' + score
        araragi.switchSprite('catch')
        
      
        setTimeout(() => {
          isCatching = false
          generateRing(position={x:araragi.position.x+20,y:hitagi.position.y+120},color='rgba(255, 255, 255,')
        }, 1000);
      }

})
  araragi.update()
  //araragi moves
  araragi.switchSprite('idle')
  araragi.velocity.x = 0
  
  if (keys.a.pressed && araragi.lastKey === 'a' && araragi.position.x > 250){
    araragi.velocity.x = -15
    araragi.switchSprite('left')
    
  }else if (keys.a.pressed && araragi.lastKey === 'a' && araragi.position.x <= 250){
    araragi.switchSprite('left')
    senjougahara.forEach((hitagi) => {
      
      if(hitagi.bruh < 50){
   
        if(hitagi.position.x > 250){
          hitagi.position.x -= 15
        }
        if(hitagi.position.x <= 250){
          hitagi.bruh += 50
        }
    }
    if(hitagi.bruh > 50){
      if(hitagi.position.x > 250){
          hitagi.position.x += 15
        }
        if(hitagi.position.x < 250){
          hitagi.position.x += 15
        }
        if(hitagi.position.x >= canvas.width - hitagi.width - 250){
          hitagi.bruh -= 50
        }
    }
  
  })
  bg.position.x += 15
    degree -= 4
    if(degree < 0){
      degree += 360
      bg.position.x -= 1350
      particles.forEach((particle) =>{
        particle.position.y += 900
        
      })
    }
  
    console.log(degree)
    particles.forEach((particle) => {    
      particle.position.y -= particle.height 
  })
  }
  if (keys.d.pressed && araragi.lastKey === 'd'  && araragi.position.x < canvas.width - araragi.width - 250){
    araragi.switchSprite('right')
    araragi.velocity.x = 15
    
  }else if (keys.d.pressed && araragi.lastKey === 'd' && araragi.position.x >= canvas.width - araragi.width -250){
    araragi.switchSprite('right')
    senjougahara.forEach((hitagi) => {
    if(hitagi.bruh < 50){
      if(hitagi.position.x < canvas.width - hitagi.width - 250){
          hitagi.position.x += 15
        }
        if(hitagi.position.x >=  canvas.width - hitagi.width - 250){
          hitagi.bruh += 50
        }
    }
    if(hitagi.bruh > 50){
      if(hitagi.position.x < canvas.width - 250){
        hitagi.position.x -= 15
      }
      if(hitagi.position.x <= 250){
        hitagi.bruh -= 50
      }
    }
  })
  bg.position.x -= 15
    degree += 4
    
  if(degree > 360){
    bg.position.x += 1350
    degree -= 360
    particles.forEach((particle) =>{
      particle.position.y -= 900
    })
  }
    console.log(degree)
    particles.forEach((particle) => {    
      particle.position.y += particle.height   
  })
  }

  setTimeout(() => {
    if(gamerun){
    requestAnimationFrame(animate)}
  }, 1000/60);
}
window.addEventListener('keydown', (event) => {
  if(!isCatching){
    switch (event.key) {

      case 'd':
        
        keys.d.pressed = true

        araragi.lastKey = 'd'
      
        break

      case 'a':

        keys.a.pressed = true

        araragi.lastKey = 'a'

        break

   
    }}

  
})
window.addEventListener('keyup', (event) => {

  switch (event.key) {

    case 'd':

      keys.d.pressed = false

      break

    case 'a':

      keys.a.pressed = false

      break

  }
})
// c.scale(0.1,0.1)
// c.translate(1000,5000)

document.addEventListener('DOMContentLoaded', function(event){

  animate()


});

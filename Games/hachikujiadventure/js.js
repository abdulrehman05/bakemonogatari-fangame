const canvas = document.querySelector('canvas')
const keydd = document.querySelector('.key')
const convo = document.querySelector('.convo')
const choices = document.querySelector('.btn1')
choices.style.display = 'none'
const choices2 = document.querySelector('.btn2')
choices2.style.display = 'none'
const choices3 = document.querySelector('.btn3')
choices3.style.display = 'none'
function menu(){
  window.location.href = "../../index.html";
}
const iconimg = document.querySelector('.iconimg')
iconimg.style.display = 'none'

const c = canvas.getContext('2d')
canvas.width = 1600
canvas.height = 900
c.imageSmoothingEnabled = false;
var gamediv = document.querySelector('.gamediv');
		canvas.width =1600;
		canvas.height = 900;
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








    var bgm = new Audio('./files/hachigame.mp3')		
    
    bgm.volume = 0.25
		bgm.loop = true
		var pauseout = new Audio('./files/pause out.wav')
    var pausein = new Audio('./files/pausein.wav')
    var interact = new Audio('./files/interact.wav')
    var acquire = new Audio('./files/acquire.wav')
    let sfxa = []
		sfxa.push(pauseout)
    sfxa.push(pausein)
    sfxa.push(interact)
    sfxa.push(acquire)
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














    
const pauset = document.querySelector('.pause')
const startd = document.querySelector('.startgame')
    function startgame(){
      bgm.play()
      gamerun = true
      animate()
    pauset.style.display = 'block'
    startd.style.display = 'none'
    }
    
    const endd = document.querySelector('.endgame')
const paused = document.querySelector('.paused')
function pause(){
  bgm.pause()
  pausein.play()
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
function restart(){  
  document.location.reload()
}
function endgame(){
  endd.style.display = 'block';
  gamerun = false
}



class Hachikuji {
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
    this.framesHold = 5
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
    
    c.imageSmoothingEnabled = false	
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

      c.imageSmoothingEnabled = false;
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
    }
  switchSprite(sprite) {
  
    switch (sprite) {
      case 'idleright':
        if (this.image !== this.sprites.idleright.image) {
          this.image = this.sprites.idleright.image
          this.framesMax = this.sprites.idleright.framesMax
          
        }
        break
      case 'idleleft':
        if (this.image !== this.sprites.idleleft.image) {
          this.image = this.sprites.idleleft.image
          this.framesMax = this.sprites.idleleft.framesMax
        }
        break
      case 'walkleft':
        if (this.image !== this.sprites.walkleft.image) {
          this.image = this.sprites.walkleft.image
          this.framesMax = this.sprites.walkleft.framesMax
          
        }
        break
        case 'walkright':
        if (this.image !== this.sprites.walkright.image) {
          this.image = this.sprites.walkright.image
          this.framesMax = this.sprites.walkright.framesMax
          this.framesCurrent = 0
        }
        break
      }
}
}


const hachikuji = new Hachikuji({

  position: {

    x: 100,

    y: 200

  },scale: 3,framesMax:6,

  imageSrc: './images/hachigame/idleright.png',
  offset:{
    x:0,
    y:0
  },
  sprites: {

    idleright: {
      
   
      imageSrc: './images/hachigame/idleright.png',
  
      framesMax: 6

    },
    idleleft: {
      
   
      imageSrc: './images/hachigame/idleleft.png',
  
      framesMax: 6

    },


    walkleft: {
     
        imageSrc: './images/hachigame/walkleft.png',
    
    
      framesMax: 6

    },

    walkright: {
     
        imageSrc: './images/hachigame/walkright.png',
    
      framesMax: 6

    }
  }
})


const araragi = new Hachikuji({

  position: {

    x: (1250*4),

    y: 220

  },scale: 3,framesMax:6,

  imageSrc: './images/hachigame/ARARARAGI.png',
  offset:{
    x:0,
    y:0
  },
  sprites: {

    idleright: {
      
   
      imageSrc: './images/hachigame/idleright.png',
  
      framesMax: 6

    },
    idleleft: {
      
   
      imageSrc: './images/hachigame/idleleft.png',
  
      framesMax: 6

    },


    walkleft: {
     
        imageSrc: './images/hachigame/walkleft.png',
    
    
      framesMax: 6

    },

    walkright: {
     
        imageSrc: './images/hachigame/walkright.png',
    
      framesMax: 6

    }
  }
})








class Sprite {
    constructor({
      position ={x:0,y:0},
      imageSrc,
      scale = 1,
      width = 80,
      height = 150,
      velocity = {x:0,y:0},
      name = undefined

      }) {
      this.position = position
      this.width = width
      this.height = height
      this.image = new Image()
      this.image.src = imageSrc
      this.scale = scale
      this.velocity = velocity
      this.name = name
  }
    
    draw() {
      if(
        this.position.x + 4484*3 >=
  
          -300 &&
  
        this.position.x <=
  
          canvas.width + 300 &&
  
        this.position.y + 440*3 >=
  
          -300 &&
  
        this.position.y <= canvas.height + 300
  ){
    if(this.height === 150 && this.width === 80){
    c.save()
      c.imageSmoothingEnabled = false;
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.image.width * this.scale,
          this.image.height * this.scale
        )  
      c.restore()} else{
        c.fillStyle = 'transparent'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
      }
      }
    }  
    update() {
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.draw()     
    }
  }



  class Cars {
    constructor({
      position = {x:0,y:0},
      imageSrc,
      scale = 1,
      width = 80,
      height = 150,
      velocity = {x:0,y:0}

      }) {
      this.position = position
      this.width = width
      this.height = height
      this.image = new Image()
      this.image.src = imageSrc
      this.scale = scale
      this.velocity = velocity
      
  }
    
    draw() {
      if(
        this.position.x + 4484*3 >=
  
          -300 &&
  
        this.position.x <=
  
          canvas.width + 300 &&
  
        this.position.y + 440*3 >=
  
          -300 &&
  
        this.position.y <= canvas.height + 300
  ){
    c.save()
      c.imageSmoothingEnabled = false;
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.image.width * this.scale,
          this.image.height * this.scale
        )  
      c.restore()
      }
    }  
    update() {
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.draw() 
      this.velocity.x = 0    
    }
  }
















const all = []
const bgback = []
const topback = []
const objects = []
const obstacles = []
const cars = []
const bg1 = new Sprite ({
  position:{
    x:(1600*0),
    y:0
  },
      imageSrc: 'images/hachigame/hachigamebg (1).png',
      scale: 3
})
all.push(bg1)
bgback.push(bg1)
const bg2 = new Sprite ({
  position:{
    x:(1600*1),
    y:0
  },
      imageSrc: 'images/hachigame/hachigamebg (2).png',
      scale: 3
})
all.push(bg2)
bgback.push(bg2)
const bg3 = new Sprite ({
  position:{
    x:(1600*2),
    y:0
  },
      imageSrc: 'images/hachigame/hachigamebg (3).png',
      scale: 3
})
all.push(bg3)
bgback.push(bg3)
const bg4 = new Sprite ({
  position:{
    x:(1600*3),
    y:0
  },
      imageSrc: 'images/hachigame/hachigamebg (4).png',
      scale: 3
})
all.push(bg4)
bgback.push(bg4)
const bg5 = new Sprite ({
  position:{
    x:(1600*4),
    y:0
  },
      imageSrc: 'images/hachigame/hachigamebg (5).png',
      scale: 3
})
all.push(bg5)
bgback.push(bg5)


const top1 = new Sprite ({
  position:{
    x:(1600*0),
    y:0
  },
      imageSrc: 'images/hachigame/hachigametop (1).png',
      scale: 3
})
all.push(top1)
topback.push(top1)
const top2 = new Sprite ({
  position:{
    x:(1600*1),
    y:0
  },
      imageSrc: 'images/hachigame/hachigametop (2).png',
      scale: 3
})
all.push(top2)
topback.push(top2)
const top3 = new Sprite ({
  position:{
    x:(1600*2),
    y:0
  },
      imageSrc: 'images/hachigame/hachigametop (3).png',
      scale: 3
})
all.push(top3)
topback.push(top3)
const top4 = new Sprite ({
  position:{
    x:(1600*3),
    y:0
  },
      imageSrc: 'images/hachigame/hachigametop (4).png',
      scale: 3
})
all.push(top4)
topback.push(top4)
const top5 = new Sprite ({
  position:{
    x:(1600*4),
    y:0
  },
      imageSrc: 'images/hachigame/hachigametop (5).png',
      scale: 3
})
all.push(top5)
topback.push(top5)



//objects
const book = new Sprite ({
  position:{
    x:(1500*3),
    y:500
  },
      imageSrc: 'images/hachigame/book.png',
      scale: 3,
      name: 'book'
})
all.push(book)
objects.push(book)

const love = new Sprite ({
  position:{
    x:(400*3),
    y:600
  },
      imageSrc: 'images/hachigame/love.png',
      scale: 3,
      name: 'love'
})
all.push(love)
objects.push(love)

const stapler = new Sprite ({
  position:{
    x:(1050*3),
    y:500
  },
      imageSrc: 'images/hachigame/stapler.png',
      scale: 3,
      name: 'stapler'
})
all.push(stapler)
objects.push(stapler)

const dollar = new Sprite ({
  position:{
    x:(460*3),
    y:145
  },
      imageSrc: 'images/hachigame/dollar.png',
      scale: 3,
      name: 'dollar'
})
all.push(dollar)
objects.push(dollar)

const helmet = new Sprite ({
  position:{
    x:(1900*3),
    y:250
  },
      imageSrc: 'images/hachigame/helmet.png',
      scale: 3,
      name: 'helmet'
})
all.push(helmet)
objects.push(helmet)

const bandaid = new Sprite ({
  position:{
    x:(640*3),
    y:550
  },
      imageSrc: 'images/hachigame/bandaid.png',
      scale: 3,
      name: 'bandaid'
})
all.push(bandaid)
objects.push(bandaid)


const jotaro = new Sprite ({
  position:{
    x:854-300,
    y:99-50
  },
      imageSrc: 'images/hachigame/jotaro variant.png',
      scale: 0.15,
      name: 'jotaro'
})
all.push(jotaro)
bgback.push(jotaro)

const jotarot = new Sprite ({
  position:{
    x:850-300,
    y:100-50
  },
      imageSrc: 'images/hachigame/jotaro varianttop.png',
      scale: 0.15,name: 'jotaro'
})
all.push(jotarot)
objects.push(jotarot)


const yotsugi = new Sprite ({
  position:{
    x:6614,
    y:120
  },
      imageSrc: 'images/hachigame/yotsugi variant.png',
      scale: 0.14,
      name: 'yotsugi'
})
all.push(yotsugi)
bgback.push(yotsugi)

const yotsugit = new Sprite ({
  position:{
    x:6600,
    y:120
  },
      imageSrc: 'images/hachigame/yotsugi varianttop.png',
      scale: 0.14,
      name: 'yotsugi'
})
all.push(yotsugit)
objects.push(yotsugit)
const roadroller = new Sprite ({
  position:{
    x:1753,
    y: 100
  },
      imageSrc: 'images/hachigame/roadroller.png',
      name: 'roadroller',
      scale :1
})
all.push(roadroller)
objects.push(roadroller)

const darkness = new Sprite ({
  position:{
    x:2623,
    y: 125
  },
      imageSrc: 'images/hachigame/darkness.png',
      name: 'darkness',
      scale :1
})
all.push(darkness)
objects.push(darkness)


const cranegamed = new Sprite ({
  position:{
    x:1020,
    y: 38
  },
      imageSrc: 'images/hachigame/cranegame.png',
      name: 'cranegame',
      scale :1,height:33,width:33
})
all.push(cranegamed)
objects.push(cranegamed)


const road = new Sprite ({
  position:{
    x:3500+15,
    y:0
  },
      imageSrc: 'images/hachigame/yotsugi varianttop.png',
      width: 852,
      height: 900
})
all.push(road)
objects.push(road)

setInterval(() => {
  let side = randomIntFromRange(1,2) 
  let x 
  let lane = Math.random()*2
  let carimg
  let px
  let py
  if(side===1&& lane<1){
    px = road.position.x
    py = road.position.y - 64
    vv = 10
    carimg = 'images/hachigame/carfront.png'
  }
  if(side===1&& lane>1){
    px = road.position.x + road.width/4
    py = road.position.y - 64
    vv = 10
    carimg = 'images/hachigame/carfront.png'
  }
  if(side===2&& lane>1){
    x=2
    px = road.position.x + road.width/2
    py = canvas.height
    vv = -10
    carimg = 'images/hachigame/carback.png'
  }
  if(side===2&& lane<1){
    x=2
    px = road.position.x+ road.width/2 + (road.width/4)
    py = canvas.height
    vv = -10
    carimg = 'images/hachigame/carback.png'
  }



  cars.push(
    new Cars({position :{
      x:px,
      y:py
    },imageSrc: carimg,
    scale:3.5,velocity:{x:0,y:vv}
    
  })
  )  
}, 2000);



all.push(araragi)

objects.push(araragi)

//darkness

class Particle {
	constructor(x, y, imagesrc, position,velocity={
		x:0,y:0
	}) {
	  this.x = x
	  this.y = y
	  this.position = position
	  this.image = new Image
	  this.image.src = imagesrc
	  this.radius = Math.random()*0.5
	this.velocity = velocity
	  this.velocitys = 0.05	
	  this.speed = randomIntFromRange(50,175)
	  this.radians = Math.random()* Math.PI*2
	  this.spinspeed = Math.random()*2 + 0.1
	  this.rotatespeed = Math.random()*1
	  
	}
  
	draw() {
    if(
      this.position.x + 4484*3 >=

        -300 &&

      this.position.x <=

        canvas.width + 300 &&

      this.position.y + 440*3 >=

        -300 &&

      this.position.y <= canvas.height + 300
){
		c.save();	
    c.imageSmoothingEnabled = false		
		c.drawImage(this.image, this.x, this.y, this.image.height* this.radius,this.image.height* this.radius)
		c.restore()
	}
}
  
	update() {
		this.rotate += this.rotatespeed
		this.speed -= this.spinspeed
		this.radians += this.velocitys
	  this.x = (Math.cos(this.radians)*this.speed+this.position.x)
	  this.y = (Math.sin(this.radians)*this.speed+this.position.y)		
	  this.x +=this.velocity.x
	  this.y += this.velocity.y
	this.draw()
   
	}
  }

  class Middle {
	constructor(position) {
	  this.position = position
	  this.radius = 30	  
	  this.velocity = {
		x:0,y:0
	  }
    this.scale = 1
	}
  
	draw() {
		c.save();	
		c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius*this.scale, 0, Math.PI * 2, false)
	c.shadowBlur = 35
	c.shadowColor = 'rgba(0,0,0,100)'
	
	
    c.fillStyle = 'black'
    c.fill()
    c.closePath()
	c.restore()
	}
  
	update() {
		this.position.x +=this.velocity.x
		this.position.y +=this.velocity.y
		this.draw()   
	}
  }

  const middle = new Middle(position={x:2700,y:200})


//cranegame

class Claw {
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
    this.attackbox = {
      position:{x:0,y:0},
      offset:{x:85,y:125},
      width:70,
      height:20
    }
  this.sprites = sprites
  for (const sprite in this.sprites) {
    sprites[sprite].image = new Image()
    sprites[sprite].image.src = sprites[sprite].imageSrc
  }
}
  
  draw() {
    
    c.imageSmoothingEnabled = false	
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
      c.fillStyle = 'red'
        c.fillRect(this.position.x+this.attackbox.offset.x,this.position.y+this.attackbox.offset.y,this.attackbox.offset.width,this.attackbox.offset.height)
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
    this.attackbox.position.x = this.position.x+this.attackbox.offset.x
    this.attackbox.position.y = this.position.y+this.attackbox.offset.y
    this.draw()
    this.animateFrames()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y  
    }
  switchSprite(sprite) {
    if (
      this.image === this.sprites.close.image &&
      this.framesCurrent < this.sprites.close.framesMax - 1
    )
      return
    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          
        }
        break
      case 'open':
        if (this.image !== this.sprites.open.image) {
          this.image = this.sprites.open.image
          this.framesMax = this.sprites.open.framesMax
        }
        break
      case 'close':
        if (this.image !== this.sprites.close.image) {
          this.image = this.sprites.close.image
          this.framesMax = this.sprites.close.framesMax
          this.framesCurrent = 0
        }
        break
        case 'idleclose':
        if (this.image !== this.sprites.idleclose.image) {
          this.image = this.sprites.idleclose.image
          this.framesMax = this.sprites.idleclose.framesMax
          this.framesCurrent = 0
        }
        break
        
      }
}
}




class Cranesprise {
  constructor({
    position ={x:0,y:0},
    imageSrc,
    scale = 1,
    width = 80,
    height = 150,
    velocity = {x:0,y:0},
    name = undefined

    }) {
    this.position = position
    this.width = width
    this.height = height
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.velocity = velocity
    this.name = name
}
  
  draw() {
    
  c.save()
  
  c.imageSmoothingEnabled = false	
      c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.image.width * this.scale,
        this.image.height * this.scale
      )  
    c.restore()
  }
  update() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.draw()     
  }
}



bg = new Cranesprise ({
  position:{
    x:0,
    y:0
  },
      imageSrc: 'images/hachigame/cranegameback.png',
      scale: 3
})
bgt = new Cranesprise ({
  position:{
    x:0,
    y:0
  },
      imageSrc: 'images/hachigame/clawmachinetop.png',
      scale: 3
})

handle = new Cranesprise ({
  position:{
    x:canvas.width/2 -(26/2),
    y:-600
  },
      imageSrc: 'images/hachigame/handle.png',
      scale: 1.3
})
hato = new Cranesprise ({
  position:{
    x:canvas.width/2 -50,
    y:625
  },
      imageSrc: 'images/hachigame/yotsugihatog.png',
      scale: 1.5
})
hatg = new Cranesprise ({
  position:{
    x:canvas.width/2 -350,
    y:625
  },
      imageSrc: 'images/hachigame/yotsugihatgreen.png',
      scale: 1.5
})
hatb = new Cranesprise ({
  position:{
    x:canvas.width/2 +250,
    y:625
  },
      imageSrc: 'images/hachigame/yotsugihatblue.png',
      scale: 1.5
})
const hats = []
hats.push(hato)
hats.push(hatg)
hats.push(hatb)


const claw = new Claw({

  position: {

    x: canvas.width/2-120,

    y: 110

  },scale: 3,framesMax:5,

  imageSrc: './images/hachigame/claw open.png',
  offset:{
    x:0,
    y:0
  },
  sprites: {

    idle: {
      
   
      imageSrc: './images/hachigame/claw open.png',
  
      framesMax: 5

    },
    open: {
      
   
      imageSrc: './images/hachigame/claw closing.png',
  
      framesMax: 5

    },


    close: {
     
        imageSrc: './images/hachigame/claw opening.png',
    
    
      framesMax: 5

    },
    idleclose: {
     
      imageSrc: './images/hachigame/claw close.png',
  
  
    framesMax: 5

  }
  }
})


let clawgame = false
let clawup = false
let clawdown = false
var downspeed = 10
let got = false























// utility functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Implementation
const particles =[];
var particleinterval = setInterval(() => {
			const img1 = 'images/hachigame/kanji.png'
			const img2 = 'images/hachigame/kanji2.png'
			const img3 = 'images/hachigame/kanji3.png'
			const img4 = 'images/hachigame/kanji4.png'
			const img5 = 'images/hachigame/kanji5.png'
			const bruh = randomIntFromRange(1,5)
			if(bruh === 1 ){
				chosenimage = img1
			}
			if(bruh === 2 ){
				chosenimage = img2
			}
			if(bruh === 3 ){
				chosenimage = img3
			}
			if(bruh === 4 ){
				chosenimage = img4
			}
			if(bruh === 5 ){
				chosenimage = img5
			}
			const imagesrc = chosenimage
			const x = middle.position.x
			const y =  middle.position.y
			particles.push(new Particle(0,0,imagesrc,position={x:x,y:y})
		);
	
		}, 50);
		
	
















  
    const keys = {

      a: {
    
        pressed: false
    
      },
    
      d: {
    
        pressed: false
    
      },
      
    
      w: {
    
        pressed: false
    
      },
    s: {
      
      pressed: false
    },
    f: {
      
      pressed: false
    },
  
    space: {
      
      pressed: false
    }
  }



let gamerun = false
let offset = 0

let movement = true

let dialogue = false

//animation loop
  function animate() {
    if(hachikuji.position.x> canvas.width){
      endgame()
    }
    if(!dialogue){
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = 'black'
    bgback.forEach((bg) =>{
      bg.update()      
    })
    objects.forEach((object) =>{
      object.update()      
    })
    particles.forEach((particle,i) => {
      particle.update();
      if(particle.x >= middle.position.x-20  && particle.y >= middle.position.y-20 && particle.x <= middle.position.x +20  && particle.y<= middle.position.y+20 ){
        particles.splice(i,1)
      }
    });
    middle.update()
    cars.forEach((car) =>{
      car.update()      
    })
    cars.forEach((car,i) =>{
      if(car.position.y> canvas.height+250){
        cars.splice(i,1)
      }  
      if(car.position.y< - 250){
        cars.splice(i,1)
      }  
    })
    hachikuji.update()
    topback.forEach((bg) =>{
      bg.update()
    })
    
    
    //movement
    if(movement){
    if(hachikuji.position.x +hachikuji.velocity.x+hachikuji.image.width < canvas.width/2 && hachikuji.position.x - hachikuji.velocity.x > 99){
    hachikuji.velocity.x = 0
    hachikuji.velocity.y = 0

    if (keys.a.pressed){
      hachikuji.velocity.x = -5
      hachikuji.switchSprite('walkleft')      
    }else if (keys.d.pressed){
      hachikuji.velocity.x = 5
      hachikuji.switchSprite('walkright')      
    }
    if (keys.w.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y > 100){
      hachikuji.velocity.y = -5
      hachikuji.switchSprite('walkright')      
    }else if (keys.w.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y > 100){
      hachikuji.velocity.y = -5
      hachikuji.switchSprite('walkleft')      
    }else if (keys.s.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y +hachikuji.image.height*3 < canvas.height-110){
      hachikuji.velocity.y = 5
      hachikuji.switchSprite('walkright')      
    }else if (keys.s.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y +hachikuji.image.height*3< canvas.height-101){
      hachikuji.velocity.y = 5
      hachikuji.switchSprite('walkleft')      
    }
    else if(hachikuji.lastKey=== 'd' && hachikuji.velocity.x == 0 && hachikuji.velocity.y == 0){
      hachikuji.switchSprite('idleright')
    }
    else if(hachikuji.lastKey=== 'a' && hachikuji.velocity.y == 0 && hachikuji.velocity.x == 0){
      hachikuji.switchSprite('idleleft')
    }
  }else{
    hachikuji.velocity.x = 0
    hachikuji.velocity.y = 0

    if (keys.a.pressed){
      if (keys.w.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y > 100){
        hachikuji.velocity.y = -5
        hachikuji.switchSprite('walkright')      
      }else if (keys.w.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y > 100){
        hachikuji.velocity.y = -5
        hachikuji.switchSprite('walkleft')      
      }else if (keys.s.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y +hachikuji.image.height*3 < canvas.height-110){
        hachikuji.velocity.y = 5
        hachikuji.switchSprite('walkright')      
      }else if (keys.s.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y +hachikuji.image.height*3< canvas.height-101){
        hachikuji.velocity.y = 5
        hachikuji.switchSprite('walkleft')      
      }
      moveleft()
    }else if (keys.d.pressed){
      if (keys.w.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y > 100){
        hachikuji.velocity.y = -5 
        hachikuji.switchSprite('walkright')      
      }else if (keys.w.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y > 100){
        hachikuji.velocity.y = -5
        hachikuji.switchSprite('walkleft')      
      }else if (keys.s.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y +hachikuji.image.height*3 < canvas.height-110){
        hachikuji.velocity.y = 5
        hachikuji.switchSprite('walkright')      
      }else if (keys.s.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y +hachikuji.image.height*3< canvas.height-101){
        hachikuji.velocity.y = 5
        hachikuji.switchSprite('walkleft')      
      }
      moveright()    
    }else if (keys.w.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y > 100){
      hachikuji.velocity.y = -5
      hachikuji.switchSprite('walkright')      
    }else if (keys.w.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y > 100){
      hachikuji.velocity.y = -5
      hachikuji.switchSprite('walkleft')      
    }else if (keys.s.pressed && hachikuji.lastKey === 'd' && hachikuji.position.y +hachikuji.image.height*3 < canvas.height-110){
      hachikuji.velocity.y = 5
      hachikuji.switchSprite('walkright')      
    }else if (keys.s.pressed && hachikuji.lastKey === 'a' && hachikuji.position.y +hachikuji.image.height*3< canvas.height-101){
      hachikuji.velocity.y = 5
      hachikuji.switchSprite('walkleft')      
    }else if(hachikuji.lastKey=== 'd' && hachikuji.velocity.x == 0 && hachikuji.velocity.y == 0){
      hachikuji.switchSprite('idleright')
    }
    else if(hachikuji.lastKey=== 'a' && hachikuji.velocity.y == 0 && hachikuji.velocity.x == 0){
      hachikuji.switchSprite('idleleft')
    }
    }
  }

    keydd.style.display = 'none'
objects.forEach((object, i) =>{

  if(rectangularCollision({
    rectangle1: hachikuji,
    rectangle2: object
  })
  
  && object.width != 852){
    if(keys.f.pressed){
    objectfuntions(object.name)
  }
    keydd.style.display = 'block'
  }else if(object.width == 852){
    cars.forEach(car =>{
      if(
      carCollision({
        rectangle1: hachikuji,
        rectangle2: car
      })){
        carfunction()
      }
    })
  }

  
// c.fillRect(object.position.x,object.position.y, object.image.width*object.scale,object.image.height*object.scale)


})
    
}

    setTimeout(() => {
      if(gamerun){
      requestAnimationFrame(animate)
      }
    }, 1000/60);

    if(clawgame){
      bg.update()
      hats.forEach(hat =>{
        hat.update()
      })
      claw.update()
      handle.update()
      bgt.update()
      claw.switchSprite('idleopen')
      if(clawdown){
        if(claw.position.y < 570){
          claw.position.y += downspeed
          handle.position.y += downspeed
        }else if(claw.position.y >= 550){
          claw.switchSprite('close')      
          if(claw.framesCurrent === 4){
           changedown()
          }  
        }
      }
      if(clawup){
        if(claw.position.y > 110){
          claw.position.y -= downspeed
          handle.position.y -= downspeed
          hats.forEach(hat =>{
            if(
            rectangularcCollision({rectangle1:claw, rectangle2:hat})){
              hat.position.y -= downspeed
            }
          })
        }
      }
  }
  c.save
  c.fillStyle ='black'
  c.fillRect(0,canvas.height-3,canvas.width,9)
  c.restore
}


function objectfuntions(index){
  interact.play()
  if(movement){
  if(index == 'dollar'){
    dollarfunction()
  }
  if(index == 'book'){
    bookfunction()
  }
  if(index == 'stapler'){
    staplerfunction()
  }
  if(index == 'helmet'){
    helmetfunction()
  }
  if(index == 'bandaid'){
    bandaidfunction()
  }
  if(index == 'cranegame'){
    clawmachinefunction()
  }
  if(index == 'darkness'){
    darknessfunction()
  }
  if(index == 'jotaro'){
    jotarofunction()
  }
  if(index == 'yotsugi'){
    yotsugifunction()
  }
  if(index == 'araragi'){
    araragifunction()
  }
  if(index == 'roadroller'){
    roadrollerfunction()
  }
  if(index == 'love'){
    lovefunction()
  }}
}



const dialoguesarray = ["Guess The Silhouette!", "Wrong!!! It's JOTARO", "CORRECT! It's Jotaro", "Acquired *******'s Hat", "Acquired Money!!", 
"weren't they selling this at the convenience store?!", "It even has a tag for 298 yen!!!", "ROADROLLER DA", "this is just a normal bandaid right?",
". . . . .","right..?","Did tsundere san drop her stapler here?","What is this? A book?", "What a weird looking book","Acquired very cool helmet","Guess The Silhouette! (part 2)",
"Wrong!!! It's Yotsugi!", "CORRECT! It's Yotsugi","What is this....??", "...","wait I know, Maybe this is something from a future installment!",21,
"Hey Hachikuji!!!", "What are you doing here?", "Im just wandering around.","what about you araragi san?", "I was just here to buy some donuts for oshino..",
"Oshino has helped me alot so i thought i'd treat him to some donuts!", "oh my! you are so considerate booraragi san", "oi hachikuji!",
"I know that someone might be playing this in october but", "my name is araragi koyomi!",
"sorry i bit my tongue", "wrong it was on purpose", "i fwubbed it!", " it wasn't on purpose?!?!?!",
"oh my! you are so considerate lil ragi san","oi hachikuji!!"," Don't say my name like im a niche rapper!","my name is araragi koyomi and im not a rapper, yo",
"sorry i bit my tongue", "wrong it was on purpose", "i fwubbed it!", " it wasn't on purpose?!?!?!",
"anyways, araragi san. do you know why there are weird things around here today?","I've been seeing dropped things and weird a darkness",
"huh? i don't know what you are talking about.",
"maybe the guy who made this game was running out of content so he just put whatever in this game..",
"huh?! We are in a game?!?!","anyways araragi san this has been a long conversation now you will disappear because we don't have budget to animate you walking.",
"bye :3","I am Already dead!"
]
let carr = true
function carfunction(){
  if(carr){
    carr = false;
    bruh(50,51);
    hachispeak()
    setTimeout(() => {
      iconimg.style.display = 'none'
      convo.style.display = 'none'
    }, 2000);

  }
}
function araragifunction(){
  movement = false
  ragispeak()
  iconimg.style.display = 'block'
  bruh(21,23)
  setTimeout(() => {
    hachispeak()
    bruh(23,25)
    
  }, 5500);  

  setTimeout(() => {
    ragispeak()
    bruh(25,27)
    

  }, 9500);
  setTimeout(() => {     
    convo.innerHTML = ''   
    choices3.style.display = 'block'
        }, 15000);
}


function araragis(answer){
  choices3.style.display = 'none'
  if(answer === 1){
   hachispeak()
  bruh(27,28)
  setTimeout(() => {
    dialogue = true
    const halloween = new Image
  halloween.src = 'images/hachigame/booraragi.png'
  setTimeout(() => {c.drawImage(halloween,0,0,canvas.width,canvas.height);convo.style.opacity = 0.7}, 200);
  ragispeak()
  bruh(28,31)
  setTimeout(() => {      
    convo.style.opacity = 1     
    dialogue = false
    hachispeak()
  bruh(31,32)
  setTimeout(() =>{ragispeak();bruh(32,33)
    setTimeout(() =>{hachispeak();bruh(33,34)
      setTimeout(() =>{ragispeak();bruh(34,35)
       setTimeout(() =>{almost()
       }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
 
          }, 8000);
  }, 5500);}

  if(answer === 2){
    hachispeak()
   bruh(35,36)
   setTimeout(() => {
     dialogue = true
     const rapper = new Image
   rapper.src = 'images/hachigame/lilragi.png'
   setTimeout(() =>{c.drawImage(rapper,0,0,canvas.width,canvas.height);convo.style.opacity = 0.7} , 200);
   ragispeak()
   bruh(36,39)
   setTimeout(() => { 
    convo.style.opacity = 1       
     dialogue = false
     hachispeak()
   bruh(39,40)
   setTimeout(() =>{ragispeak();bruh(40,41)
     setTimeout(() =>{hachispeak();bruh(41,42)
       setTimeout(() =>{ragispeak();bruh(42,43)
        setTimeout(() =>{almost()
        }, 4000);
       }, 4000);
     }, 4000);
   }, 4000);
  
           }, 7000);
   }, 5500);}
}
function almost(){
  hachispeak()
  setTimeout(() =>{
    bruh(43,45)
    setTimeout(() =>{
      ragispeak()
      bruh(45,47)
      setTimeout(() =>{
        hachispeak()
        bruh(47,50)
        movement = true
        dialogueoff(10000,araragi.name)
      }, 8000);
    }, 5000);
  }, 100);
}
















function hachispeak(){
  iconimg.src = 'images/hachigame/hachiicon.jpg'
  iconimg.style.left = '50px'
}
function ragispeak(){
  iconimg.src = 'images/hachigame/ragiicon.jpg'
  iconimg.style.left = '1450px'
}


function jotarofunction() {
  bruh(-1,0)
  setTimeout(() => {
    // jotarot.position.y -=1000  
choices.style.display = 'block'
  }, 1000); 
  movement = false
}
function jotaroq(answer){
  choices.style.display = 'none'
  setTimeout(() => {
    jotarot.position.y -=1000}, 100); 
  if(answer == 1|| answer == 2|| answer == 3){
    bruh(0,1)
  }else if(answer == 4)bruh(1,2)
  setTimeout(() => {movement = true;
    convo.style.display = 'none';
    acquire.play()},2000)

}


function roadrollerfunction(){
  iconimg.style.display = 'block'
  dialogue = true
  bruh(6,7)
 dialogueoff(3000,roadroller.name)
}




function dollarfunction(){
  
  dialogue = true
  bruh(3,4)
  const hachimoney = new Image
  hachimoney.src = 'images/hachigame/hachimoney.jpg.png'

  setTimeout(() => {c.drawImage(hachimoney,0,0,canvas.width,canvas.height)}, 1);
 dialogueoff(3000,dollar.name)
}





function lovefunction(){  
  dialogue = true
  bruh(4,5)
  const hachilove = new Image
  hachilove.src = 'images/hachigame/love298.png'
  setTimeout(() => {c.drawImage(hachilove,0,0,canvas.width,canvas.height)}, 1000);
  const hachitag = new Image
  hachitag.src = 'images/hachigame/tag298.jpg'
  setTimeout(() => {c.drawImage(hachitag,0,0,canvas.width,canvas.height);bruh(5,6);}, 4500);
  iconimg.style.display = 'block'
 dialogueoff(6000,love.name)
}


function bandaidfunction(){
  iconimg.style.display = 'block'
  dialogue = true
  bruh(7,10)
 dialogueoff(3000,bandaid.name)
}

function staplerfunction(){
  iconimg.style.display = 'block'
  dialogue = true
  bruh(10,11)
 dialogueoff(3000,stapler.name)
}

function bookfunction(){
  iconimg.style.display = 'block'
  dialogue = true
  bruh(11,13)
 dialogueoff(3000,book.name)
}
function helmetfunction(){  
  iconimg.style.display = 'block'
  dialogue = true
  bruh(13,14)
 dialogueoff(3000,helmet.name)
}


function yotsugifunction() {
  bruh(14,15)
  setTimeout(() => {
choices2.style.display = 'block'
  }, 1000); 
}
function yotsugiq(answer){
  choices2.style.display = 'none'
  setTimeout(() => {
    yotsugit.position.y -=1000;
    }, 100); 
  if(answer == 1|| answer == 4|| answer == 3){
    bruh(15,16)
  }else if(answer == 2)bruh(16,17)
  setTimeout(() => {
    convo.style.display = 'none';
    acquire.play()
    }, 1900); 
}


function darknessfunction(){
  iconimg.style.display = 'block'
  bruh(17,20)
  setTimeout(() => {
  clearInterval(particleinterval);
  particles.forEach(pp=>{
    pp.spinspeed +=1.25
  })
  setTimeout(() => {iconimg.style.display = 'none';
  convo.style.display = 'none'
    setInterval(() => {
      if(middle.scale>0.1){
        middle.scale -= 0.01
      }
      else{middle.position.y-=1999;
        }
      }, 100);  
  }, 2000);
}, 5000);
}


function clawmachinefunction(){
if(hats.length != 0){
  
  clawgame = true
  dialogue = true
}
}







function dialogueoff(time,objectname){
  setTimeout(() => {
    acquire.play()
    convo.style.display = 'none'
    dialogue = false
    objects.forEach((object,i)=>{
      if(object.name === objectname){
      objects.splice(i,1)}
    })
    iconimg.style.display = 'none'
  }, time);
}







// c.scale(0.2,0.2)
// c.translate(0,2000)

const loadingd = document.querySelector('.loading');
window.addEventListener('load',()=>{
  animate()
  setTimeout(() => {
    loadingd.style.opacity = 0
    setTimeout(() => {
      loadingd.style.display = 'none'      
    }, 1000);
  }, 1000);
})

function moveleft(){
  if(hachikuji.position.x +hachikuji.velocity.x < 101){
  if(offset === 0){
    hachikuji.switchSprite('walkleft') 
  }else if(offset > 0){
    hachikuji.switchSprite('walkleft') 
    all.forEach(bruh =>{
      bruh.position.x += 10
    })
    particles.forEach(bruh =>{
      bruh.velocity.x += 10
    })
    middle.position.x += 10
    cars.forEach(bruh =>{
      bruh.velocity.x += 10
    })
  offset--
  }}else{
    if (keys.a.pressed){
      hachikuji.velocity.x = -5
      hachikuji.switchSprite('walkleft')      
    }else if (keys.d.pressed){
      hachikuji.velocity.x = 5
      hachikuji.switchSprite('walkright')      
    }
  }
}

function moveright(){
  
    hachikuji.switchSprite('walkright') 
  if(yotsugi.position.x <= 380){
    if (keys.a.pressed){
      hachikuji.velocity.x = -5
      hachikuji.switchSprite('walkleft')      
    }else if (keys.d.pressed){
      hachikuji.velocity.x = 5
      hachikuji.switchSprite('walkright')      
    }
  }else if(hachikuji.position.x +hachikuji.velocity.x+hachikuji.image.width > canvas.width/2-20){
    all.forEach(bruh =>{
      bruh.position.x += -10
    })
    particles.forEach(bruh =>{
      bruh.velocity.x += -10
    })
    middle.position.x += -10
    cars.forEach(bruh =>{
      bruh.velocity.x += -10
    })
  offset++  
}else{
  if (keys.a.pressed){
    hachikuji.velocity.x = -5
    hachikuji.switchSprite('walkleft')      
  }else if (keys.d.pressed){
    hachikuji.velocity.x = 5
    hachikuji.switchSprite('walkright')      
  }
}
}







window.addEventListener('keydown', (event) => {

  
  switch (event.key) {

    case 'd':
      
      keys.d.pressed = true

      hachikuji.lastKey = 'd'
      break

    case 'a':

      keys.a.pressed = true

      hachikuji.lastKey = 'a'
      break

    case 'w':

      keys.w.pressed = true
      

      break
      case 's':

        keys.s.pressed = true
        
  
        break
        case 'f':

      keys.f.pressed = true
      

      break
      

  }


})
window.addEventListener('keyup', (event) => {

switch (event.key) {

  case 'd':

    keys.d.pressed = false

    break

  case 'a':

    keys.a.pressed = false

    break



    case 'w':

      keys.w.pressed = false
      

      break
      case 's':

      keys.s.pressed = false
      

      break
      case 'f':

      keys.f.pressed = false
      

      break
}
})

function rectangularCollision({ rectangle1, rectangle2 }) {

  return (

    rectangle1.position.x + 100 >=

      rectangle2.position.x &&

    rectangle1.position.x <=

      rectangle2.position.x + rectangle2.image.width*rectangle2.scale &&

    rectangle1.position.y + 188>=

      rectangle2.position.y &&

    rectangle1.position.y <= rectangle2.position.y + rectangle2.image.height*rectangle2.scale

  )

}

function keydisplay(objectss){
  if(objectss.width != 852)
    keydd.style.display = 'block'  
}


//text utils

var textthing = document.querySelector('h1')
var i = 0;
var f = 0;
var txtspeed = 40;
var d=0;
var l =-1;
let stopdiag = false
var endline = 0
function typeWriter() {
  var txt = dialoguesarray[l]; 
  if (i < txt.length) {
    textthing.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, txtspeed);
  }else{
    if(stopdiag){    
    setTimeout(() => {
    }, 100);
  }
  }
  
}
function bruh(startline,finishline) {
  textthing.innerHTML = ''
  stopdiag = false
  textthing.style.display = 'block'
  l=startline
  runtime(finishline)
}
function runtime(endlines) {
  if(!stopdiag) {
    f++;
    if(endlines != undefined){
      endline = endlines
    }
    changeline(endline)
    setTimeout(runtime, 2000);
  }
  if(stopdiag ){    
  }
}
  function changeline(endlines) {
    l+=1
    var lth = endlines
    i=0
    textthing.innerHTML = ''
      
    typeWriter() 
    if(l===lth){
      stopdiag = true
    }  
  }


  function carCollision({ rectangle1, rectangle2 }) {
    return (  
      rectangle1.position.x + 100 >=  
        rectangle2.position.x +9&&  
      rectangle1.position.x + 90 <=  
        rectangle2.position.x + rectangle2.image.width*rectangle2.scale -9 &&  
      rectangle1.position.y + 188>=  
        rectangle2.position.y +9 &&  
      rectangle1.position.y + 170<= rectangle2.position.y + rectangle2.image.height*rectangle2.scale-9
  
    )
  
  }


  
function down(){
  clawdown = true
  setTimeout(() => {
    ups()
    clawdown = false
  }, 6000);
  }
  function ups(){
    
    clawup = true
    setTimeout(() => {
      hats.forEach(hat =>{
      if(
        rectangularcCollision({rectangle1:claw, rectangle2:hat})){
          get(hat)
        }
      }
    )
    clawdown = false
    clawup = false
    claw.switchSprite('idle')
  }, 6000);
  }
  function changedown(){
    if(clawdown){
    claw.switchSprite('idleclose')
    clawdown = false
    }
    }
    
  
  
  function get(t){
    if(t){
    got = false
    hats.forEach((hat,i) =>{
      if(
        rectangularcCollision({rectangle1:claw, rectangle2:hat})){
          hats.splice(i,1)          
    claw.switchSprite('idle')
        }
      }
    )
    bruh(2,3)
    clawgame = false
    dialogue = false
setTimeout(() => {
  convo.style.display = 'none'
}, 2000);
  }else{got = false}
    claw.switchSprite('idleopen')
  
  }
  
  
  
window.addEventListener('keydown', (event) => {

  if(clawgame){
  switch (event.key) {

    case 'd':
      if(claw.position.x < 970&& !clawdown&&!clawup){
        claw.position.x += downspeed
        handle.position.x += downspeed
      }
      break

    case 'a':
      if(claw.position.x > 380&& !clawdown&&!clawup){
        claw.position.x -= downspeed
        handle.position.x -= downspeed
      }
      break

    case ' ':

      keys.space.pressed = true
      down()

      break

  }
}

})

window.addEventListener('keyup', (event) => {
  if(clawgame){
  switch (event.key) {
  
    case 'd':
  
      keys.d.pressed = false
  
      break
  
    case 'a':
  
      keys.a.pressed = false
  
      break
  
  
  
      case ' ':
  
        keys.space.pressed = false
        
  
        break
        
  }}
  })



//asdfas
function rectangularcCollision({ rectangle1, rectangle2 }) {

  return (

    rectangle1.attackbox.position.x + rectangle1.attackbox.width >=

      rectangle2.position.x &&

    rectangle1.attackbox.position.x <=

      rectangle2.position.x + rectangle2.width &&

    rectangle1.attackbox.position.y + rectangle1.attackbox.height >=

      rectangle2.position.y &&

    rectangle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height

  )

}

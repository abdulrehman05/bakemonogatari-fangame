const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
function menu(){
  window.location.href = "../../index.html";
}
const scorething = document.querySelector('#scorething')
let score = 0
const timer = document.querySelector('#timer')
let time = 0
c.imageSmoothingEnabled = false;
canvas.width = 1600
canvas.height = 900
var stairsheight = 441
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







    var bgm = new Audio('./files/nadegame.mp3')		
    
    bgm.volume = 0.25
		bgm.loop = true
		var pauseout = new Audio('./files/pause out.wav')
    var pausein = new Audio('./files/pausein.wav')
    var run = new Audio('./files/goofy.mp3');    
    var snakekill = new Audio('./files/takehit3.mp3');
    
    var yay = new Audio('./files/yay.mp3');
    run.loop = true
    let sfxa = []
		sfxa.push(pauseout)
    sfxa.push(pausein)
    sfxa.push(run)
     sfxa.push(yay)
    sfxa.push(snakekill)
    sfxa.forEach(element => {
			element.volume = 0.3
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
		











let timeee = 0.1

function timerf(){
  setTimeout(() => {
    if(game){
    time += timeee
    timer.innerHTML = 'Time: ' + time.toFixed(2)
    timerf()}
  }, 100);

}
timerf()

const startdiv = document.querySelector('.startgame')
const pauset = document.querySelector('.pause')
const paused = document.querySelector('.paused')
function startgame(){
  bgm.play()
gamestart = false
game = false
animate()

timer.style.display = 'block'
startdiv.style.display = 'none'

}


function pause(){
  bgm.pause()
  run.pause()
  paused.style.display = 'block'
  game = false
}
function resume(){
  bgm.play()
  if(nadeko.velocity.x>50||nadeko.velocity.x>-50){
    run.play()
  }
  paused.style.display = 'none'
  game = true
  animate()
}












class Sprite {
    constructor({
      position,
      imageSrc,
      scale = 1,
      framesMax = 6,
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
      if(this.velocity.x > 0){
        this.velocity.x -= 0
    }
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y

      if (this.position.y + this.height >= canvas.height - 150 ) {
        this.velocity.y = 0

      } else this.velocity.y += this.gravity


    }
    switchSprite(sprite) {

      switch (sprite) {
        case 'idle':
          run.pause()
          if (this.image !== this.sprites.idle.image) {
            this.image = this.sprites.idle.image
            this.framesMax = this.sprites.idle.framesMax

          }
          break
        case 'idleleft':
          run.pause()
          if (this.image !== this.sprites.idleleft.image) {
            this.image = this.sprites.idleleft.image
            this.framesMax = this.sprites.idleleft.framesMax
          }
          break
        case 'walk':
          run.pause()
          if (this.image !== this.sprites.walk.image) {
            this.image = this.sprites.walk.image
            this.framesMax = this.sprites.walk.framesMax

          }
          break
          case 'walkleft':
             run.pause()
          if (this.image !== this.sprites.walkleft.image) {
            this.image = this.sprites.walkleft.image
            this.framesMax = this.sprites.walkleft.framesMax
            this.framesCurrent = 0
          }
          break
          case 'run':
          if (this.image !== this.sprites.run.image) {
            run.play()
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax
            this.framesCurrent = 0
          }
          break
          case 'runleft':
            
            run.play()
          if (this.image !== this.sprites.runleft.image) {
            this.image = this.sprites.runleft.image
            this.framesMax = this.sprites.runleft.framesMax
            this.framesCurrent = 0
          }
          break
        }
  }
  }

  const nadeko = new Sprite({

    position: {

      x: 600,

      y: 630

    },scale: 1,

    imageSrc: './images/nadegame/nadeidle.png',
    offset:{
      x:25,
      y:65
    },
    sprites: {

      idle: {

        imageSrc: './images/nadegame/nadeidle.png',
        framesMax: 6

      },
      idleleft: {


        imageSrc: './images/nadegame/nadeidle left.png',

        framesMax: 6

      },
      walk: {


        imageSrc: './images/nadegame/nadewalk.png',

        framesMax: 6

      },
      walkleft: {


        imageSrc: './images/nadegame/nadewalk left.png',

        framesMax: 6

      },
      run: {


        imageSrc: './images/nadegame/nadekowalkup.png',

        framesMax: 6

      },
      runleft: {


        imageSrc: './images/nadegame/nadekowalkup left.png',

        framesMax: 6

      }
      }

  })


class Background {
    constructor({
      position,
      imageSrc,
      scale = 1,
      name = undefined,
      index,
      speed = 1

    }) {
      this.position = position
      this.width = 50
      this.height = 80
      this.image = new Image()
      this.image.src = imageSrc
      this.scale = scale
      this.name = name
      this.index = index
      this.velocity = {
        x:0,
        y:0
      }
      this.speed = speed

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
  )




c.imageSmoothingEnabled = false;
      c.drawImage(this.image, this.position.x, this.position.y, this.image.width*this.scale, this.image.height*this.scale);
    }

    update() {
      if(!killscene&&!killscenefinish&&!climbdown){
        if(climbing){
            this.velocity.y = this.velocity.x *-1

        }
        if(this.velocity.x < 0){
            this.velocity.x += 0.1
        }else{this.velocity.x =0}
        if(this.velocity.y > 0){
            this.velocity.y -= 0.1
        }else{this.velocity.y=0}
        if(climbing){
            this.position.x += this.velocity.x*this.speed

            this.position.y += this.velocity.y *this.speed
        }else{

        this.position.x += this.velocity.x

        this.position.y += this.velocity.y
}
      if(this.name == 'ragikanb'){
        if(!killscene&&!killscenefinish&&climbdown){
          this.draw()
        }
      }else{this.draw()}


    }
    if(!killscene&&!killscenefinish&&climbdown){
      if(climbing){
        this.velocity.y = this.velocity.x *-1

    }
    if(this.velocity.x > 0){
        this.velocity.x -= 0.1
    }
    if(this.velocity.y < 0){
        this.velocity.y += 0.1
    }

    if(climbing){
        this.position.x += this.velocity.x*this.speed

        this.position.y += this.velocity.y *this.speed
    }else{

    this.position.x += this.velocity.x

    this.position.y += this.velocity.y
}

    this.draw()
  }
  }
  }

var backgroundshi = []


  var bottombg = new Background({
        position:{
          x:0,
          y:0
        },
        scale: 1.22,
        index:0,

imageSrc: './images/nadegame/nadegamebgtorigate.png',
name: 'bottombg'

    })
backgroundshi.push(bottombg)


    var bottombgg = new Background({
        position:{
          x:0,
          y:0
        },
        scale: 1.22,
        index:2,

imageSrc: './images/nadegame/nadegamebgtorigatebamboo.png',
name: 'bottombgg'

    })
    backgroundshi.push(bottombgg)

 var pointer = new Background({
      position:{
        x:(3954*3.33)+350,
        y:-11895+725
      },
      scale: 3,
      index:2,

imageSrc: './images/nadegame/pointer.png',
name: 'pointer'

  })
  backgroundshi.push(pointer)


  var shrinetop = new Background({
      position:{
        x:(3954*3.33)+325,
        y:-11895+725-995+97
      },

      scale: 1.5,
      index:1,

imageSrc: './images/nadegame/nadegamebgtoptorigate.png',
name: 'shrinetop'

  })
  backgroundshi.push(shrinetop)

  var shrinetopf = new Background({
      position:{
        x:(3954*3.33)+325,
        y:-11895+725-995+97
      },

      scale: 1.5,
      index:1,

imageSrc: './images/nadegame/nadegamebgtoptorigatebamboo.png',
name: 'shrinetopf'

  })
  backgroundshi.push(shrinetopf)

  var stairs1 = new Background({
        position:{
          x:canvas.width,
          y:(-304*3*1)+766
        },
        scale: 3,
        index:1,

imageSrc: './images/nadegame/stair1.png',
name: 'stairs1'

    })
    backgroundshi.push(stairs1)
    var stairs2 = new Background({
      position:{
        x:canvas.width,
        y:(-304*3*2)+766
      },
      scale: 3,
      index:1,

imageSrc: './images/nadegame/stair2.png',
name: 'stairs2'

  })
  backgroundshi.push(stairs2)
  var stairs3 = new Background({
    position:{
      x:canvas.width,
      y:(-304*3*3)+766
    },
    scale: 3,
    index:1,

imageSrc: './images/nadegame/stair3.png',
name: 'stairs3'

})
backgroundshi.push(stairs3)

var stairs4 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*4)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair4.png',
name: 'stairs4'

})
backgroundshi.push(stairs4)
var stairs5 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*5)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair5.png',
name: 'stairs5'

})
backgroundshi.push(stairs5)
var stairs6 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*6)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair6.png',
name: 'stairs6'

})
backgroundshi.push(stairs6)
var stairs7 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*7)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair7.png',
name: 'stairs7'

})
backgroundshi.push(stairs7)
var stairs8 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*8)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair8.png',
name: 'stairs8'

})
backgroundshi.push(stairs8)
var stairs9 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*9)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair9.png',
name: 'stairs9'

})
backgroundshi.push(stairs9)
var stairs10 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*10)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair10.png',
name: 'stairs10'

})
backgroundshi.push(stairs10)
var stairs11 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*11)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair11.png',
name: 'stairs11'

})
backgroundshi.push(stairs11)

var stairs12 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*12)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair12.png',
name: 'stairs12'

})
backgroundshi.push(stairs12)

var stairs13 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*13)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair13.png',
name: 'stairs13'

})
backgroundshi.push(stairs13)









var stairsgrass1 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*1)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/frontbamboo1.png',
name: 'stairsgrass1'

})
backgroundshi.push(stairsgrass1)
var stairsgrass2 = new Background({
position:{
  x:canvas.width,
  y:(-304*3*2)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo2.png',
name: 'stairsgrass2'

})
backgroundshi.push(stairsgrass2)
var stairsgrass3 = new Background({
position:{
x:canvas.width,
y:(-304*3*3)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo3.png',
name: 'stairsgrass3'

})
backgroundshi.push(stairsgrass3)

var stairsgrass4 = new Background({
position:{
x:canvas.width,
y:(-304*3*4)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo4.png',
name: 'stairsgrass4'

})
backgroundshi.push(stairsgrass4)
var stairsgrass5 = new Background({
position:{
x:canvas.width,
y:(-304*3*5)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo5.png',
name: 'stairsgrass5'

})
backgroundshi.push(stairsgrass5)
var stairsgrass6 = new Background({
position:{
x:canvas.width,
y:(-304*3*6)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo6.png',
name: 'stairsgrass6'

})
backgroundshi.push(stairsgrass6)
var stairsgrass7 = new Background({
position:{
x:canvas.width,
y:(-304*3*7)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo7.png',
name: 'stairsgrass7'

})
backgroundshi.push(stairsgrass7)
var stairsgrass8 = new Background({
position:{
x:canvas.width,
y:(-304*3*8)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo8.png',
name: 'stairsgrass8'

})
backgroundshi.push(stairsgrass8)
var stairsgrass9 = new Background({
position:{
x:canvas.width,
y:(-304*3*9)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo9.png',
name: 'stairsgrass9'

})
  backgroundshi.push(stairsgrass9)

  var stairsgrass10 = new Background({
    position:{
    x:canvas.width,
    y:(-304*3*10)+766
    },
    scale: 3,
    index:1,

    imageSrc: './images/nadegame/frontbamboo10.png',
    name: 'stairsgrass10'

    })
    backgroundshi.push(stairsgrass10)

    var stairsgrass11 = new Background({
      position:{
      x:canvas.width,
      y:(-304*3*11)+766
      },
      scale: 3,
      index:1,

      imageSrc: './images/nadegame/frontbamboo11.png',
      name: 'stairsgrass11'

      })
      backgroundshi.push(stairsgrass11)

      var stairsgrass12 = new Background({
        position:{
        x:canvas.width,
        y:(-304*3*12)+766
        },
        scale: 3,
        index:1,

        imageSrc: './images/nadegame/frontbamboo12.png',
        name: 'stairsgrass12'

        })
        backgroundshi.push(stairsgrass12)

        var stairsgrass13 = new Background({
          position:{
          x:canvas.width,
          y:(-304*3*13)+766
          },
          scale: 3,
          index:1,

          imageSrc: './images/nadegame/frontbamboo13.png',
          name: 'stairsgrass13'

          })
          backgroundshi.push(stairsgrass13)


          var ragikanb = new Background({
            position:{
            x:2050+600,
            y:0-600
            },
            scale: 2,
            index:1,

            imageSrc: './images/nadegame/ragikanb.png',
            name: 'ragikanb'

            })
            backgroundshi.push(ragikanb)





class Snakes {
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
    this.width = 200
    this.height = 40
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
    this.dead = false
  this.sprites = sprites
  this.color = 'red'
  for (const sprite in this.sprites) {
    sprites[sprite].image = new Image()
    sprites[sprite].image.src = sprites[sprite].imageSrc
  }
}

  draw() {
    // c.fillStyle = this.color
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // c.fillStyle = 'black'
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
    if(this.image == this.sprites.left.image&&this.dead){
      this.switchSprite('dead')
    }
    if(this.image == this.sprites.right.image&&this.dead){
      this.switchSprite('deadright')
    }
    if(this.velocity.x>0){this.switchSprite('right')}else if(this.velocity.x <0){this.switchSprite('left')}
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y


  }
  switchSprite(sprite) {
      switch (sprite) {
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
        case 'dead':
        if (this.image !== this.sprites.dead.image) {
          this.image = this.sprites.dead.image
          this.framesMax = this.sprites.dead.framesMax
          this.framesCurrent = 0
        }
        break
        case 'deadright':
        if (this.image !== this.sprites.deadright.image) {
          this.image = this.sprites.deadright.image
          this.framesMax = this.sprites.deadright.framesMax
          this.framesCurrent = 0
        }
        break

      }
}
}



class Killbg {
  constructor({
    position,
    imageSrc,
    scale = 2,
    name = undefined,
    index,
    speed = 1

  }) {
    this.position = position
    this.width = 50
    this.height = 80
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.name = name
    this.index = index
    this.velocity = {
      x:0,
      y:0
    }
    this.speed = speed

  }

  draw() {
    c.imageSmoothingEnabled = false
    c.drawImage(this.image, this.position.x, this.position.y, this.image.width*this.scale, this.image.height*this.scale);
  }
  update() {

    this.draw()
  }
}


const shrineback = new Killbg({
  position:{
    x:0,
    y:0
  },
  scale: 3,
  index:0,

imageSrc: './images/nadegame/nadegamebgshrine.png',
name: 'shrine'

})
const shrinefr = new Killbg({
position:{
  x:0,
  y:0
},
scale: 3,
index:0,

imageSrc: './images/nadegame/nadegamebgshrinebush.png',
name: 'shrinefr'

})
const snakes = []

function spawnSnakes() {


setInterval(() => {
if(killscenefinish){
const x = Math.random()*2
const y =  (Math.random() * 450) + 450
let yp
let xp
let vv

if(x<=1){
  xp = -200
  vv = 5
}else if(x<=2){
  xp = canvas.width
  vv = -5
}

snakes.push(
  new Snakes({
    position: {
          x: xp,
          y: y
        },scale: 3,
        imageSrc: './images/nadegame/snake.png',
    offset:{
      x:0,
      y:0
    },velocity:{x:vv,y:0},
    sprites: {
      left: {
        imageSrc: './images/nadegame/snake.png',
        framesMax: 8
      },
      right: {
        imageSrc: './images/nadegame/snakeright.png',
        framesMax: 8
      },
      dead: {
        imageSrc: './images/nadegame/snakedeadleft.png',
        framesMax: 1
      },
      deadright: {
        imageSrc: './images/nadegame/snake dead.png',
        framesMax: 1
      }

      }
  })
)
}
}, 500);
}


spawnSnakes()













let game = false
let gamestart = true
let gameend = false
let climbing = false
let climbdown = false
let offset = 0
let killscene = false
let killscenefinish = false

//Animation Loop
  function animate() {
    if(!gameend){
    if(game){ requestAnimationFrame(animate) }

    if(!killscene&&!killscenefinish&&!climbdown){
c.fillStyle = '#3a522f'
c.fillRect(0,0,canvas.width,canvas.height)


      if(stairs13.position.y >= 900-120){
        climbing = false

          backgroundshi.forEach((backgrounds) => {
        nadeko.velocity.x -= backgrounds.velocity.x/backgroundshi.length/1.2
        backgrounds.velocity.x = 0
        backgrounds.velocity.y = 0

        if(nadeko.position.x > canvas.width){
        killscene = true
        killscenefinish = true
        backgroundshi.forEach((backgrounds) => {backgrounds.velocity.x=0})
        nadeko.velocity.x = 0
        climbing = false
        }

          })
        climbing = false}
        if(stairs13.position.y >= 900-520&& stairs13.position.y <= 900-120){
          backgroundshi.forEach((backgrounds) => {backgrounds.velocity.x/=1.1});}

    //updating
    bottombg.update(); stairs1.update(); stairs2.update(); stairs3.update();stairs4.update();stairs5.update(); stairs6.update();
    stairs7.update();stairs8.update();stairs9.update(); stairs10.update();  stairs11.update(); stairs12.update(); stairs13.update();shrinetop.update()

    c.fillStyle = 'rgba(0,0,0,0.2)'
    c.fillRect(0,0,canvas.width,canvas.height)
    nadeko.update()
    ragikanb.update()

    bottombgg.update(); stairsgrass1.update(); stairsgrass2.update(); stairsgrass3.update();stairsgrass4.update();stairsgrass5.update(); stairsgrass6.update();
    stairsgrass7.update();stairsgrass8.update();stairsgrass9.update();stairsgrass10.update();stairsgrass11.update();stairsgrass12.update();stairsgrass13.update();pointer.update(); shrinetopf.update()



    if(stairs1.velocity.x<0&&stairs1.velocity.x>-50){
      nadeko.switchSprite('walk')
      nadeko.offset.x= 25
      nadeko.offset.y= 65
      // offset:{
      //   x:25,
      //   y:65
      // }
      }else if(stairs1.velocity.x<-50){nadeko.switchSprite('run')}else if(nadeko.velocity.x>0&&nadeko.velocity.x<50){nadeko.switchSprite('walk')
    }else if(
        nadeko.velocity.x>50){nadeko.switchSprite('run');}else{nadeko.switchSprite('idle')}




            if(stairs1.position.x < nadeko.position.x + nadeko.width){
              climbing = true
              }
            if(stairs1.position.x < nadeko.position.x + nadeko.width + 100&&stairs1.position.x > nadeko.position.x + nadeko.width){
                backgroundshi.forEach((backgrounds) => {backgrounds.velocity.x/1.2});
              }








              }


    if(killscene && killscenefinish){
      scorething.style.display = 'block'
      scorething.innerHTML = 'Snakes Killed: ' + score +'/10'
    snakes.forEach((snake, i) => {
      if(snake.position.x + snake.width <0 ){
        snakes.splice(i, 1)
      }
      if(snake.position.x  - snake.width>canvas.width){
        snakes.splice(i, 1)
      }
     })

    c.clearRect(0,0,canvas.width,canvas.height)
   shrineback.update()

   snakes.forEach((snake, i) => {
    snake.update()
   })
   shrinefr.update()
   snakes.forEach((snake) => {
    if(snake.dead){
      snake.color = 'blue'
    }
  })
  }
    if(score>=10){
      bbruh()

      }

      if(!killscene&&!killscenefinish&&climbdown){

        c.fillStyle = '#3a522f'
        c.fillRect(0,0,canvas.width,canvas.height)

             //updating
    bottombg.update(); stairs1.update(); stairs2.update(); stairs3.update();stairs4.update();stairs5.update(); stairs6.update();
    stairs7.update();stairs8.update();stairs9.update(); stairs10.update();  stairs11.update(); stairs12.update(); stairs13.update(); shrinetop.update()

    c.fillStyle = 'rgba(0,0,0,0.2)'
    c.fillRect(0,0,canvas.width,canvas.height)
    nadeko.update()
    ragikanb.update()

    bottombgg.update(); stairsgrass1.update(); stairsgrass2.update(); stairsgrass3.update();stairsgrass4.update();stairsgrass5.update(); stairsgrass6.update();
    stairsgrass7.update();stairsgrass8.update();stairsgrass9.update();stairsgrass10.update();stairsgrass11.update();stairsgrass12.update();stairsgrass13.update();  pointer.update(); shrinetopf.update()


    if(stairs1.velocity.x>0&&stairs1.velocity.x<50){
      nadeko.switchSprite('walkleft')
      nadeko.offset.x= 50
      nadeko.offset.y= 65
      }else if(stairs1.velocity.x>50){nadeko.switchSprite('runleft'); nadeko.offset.x= 80}else{nadeko.switchSprite('idleleft')}







                if(nadeko.position.x < pointer.position.x){
                  climbing = true
                }


                        if(stairs1.position.y <= 440 && stairs1.position.y > 0){
                          backgroundshi.forEach((backgrounds) => {backgrounds.velocity.x/1.2});
                        }

                        if(stairs1.position.y <= -120 ){
                          climbing = false

                        backgroundshi.forEach((backgrounds) => {
                          backgrounds.velocity.y = 0
                          nadeko.velocity.x -= backgrounds.velocity.x/backgroundshi.length
                          backgrounds.velocity.x = 0
                          if(nadeko.position.x + nadeko.width< 0){
                            //win
                            if(!gameend){
                              gameend = true
                            win()
                         }
                          }})
                        }




                    }

       }
}

function bbruh(){
  score=0
  setTimeout(() => {
    scorething.display = 'none'
    killscene = false
    killscenefinish = false
    climbdown = true
    climbing = false
    scorething.style.display = 'none'
    nadeko.position.x = 1200

  }, 1000);

}


canvas.addEventListener('mousedown', (event) => {
  snakes.forEach((snake, i) => {
   if(!snake.dead && event.offsetX > snake.position.x && event.offsetX < snake.position.x + snake.width && event.offsetY > snake.position.y && event.offsetY < snake.position.y + snake.height ){
     snake.velocity.x = 0
     snake.dead = true
     score++
      snakekill.currentTime = 0
      snakekill.play()
     
     
   }
 })
 }


 )



const press = document.querySelector('.press')
 window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case ' ':
      if(!gamestart && !game){

      pauset.style.display = 'block'
        game= true
        gamestart = true
        animate()
        press.style.display = 'none'
        timerf()

        climbing = false
        climbdown = false
        offset = 0
        killscene = false
        killscenefinish = false
      }
      break
    }
 })
window.addEventListener('keyup', (event) => {

    switch (event.key) {
      case ' ':
       if(game){
        if(!killscene&&!killscenefinish&&!climbdown){
        if(!climbing){
        backgroundshi.forEach((backgrounds) => {
                backgrounds.velocity.x -= 4
        })
        }
        if(climbing){
            backgroundshi.forEach((backgrounds) => {
                    backgrounds.velocity.x -= 4

            })
            }}

            if(!killscene&&!killscenefinish&&climbdown){
              if(!climbing){
                backgroundshi.forEach((backgrounds) => {
                        backgrounds.velocity.x += 4
                })
                }
                if(climbing){
                    backgroundshi.forEach((backgrounds) => {
                            backgrounds.velocity.x += 4

                    })
                    }
                  }}
        break
        case 'f':
          console.log(climbing)
          break
    }
  })


// c.scale(0.05,0.05)
// c.translate(1000,13000)


document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    animate()
  }, 100);

});

const endd = document.querySelector('.endgame')

const finaltime = document.querySelector('.scoretd')

function win(){
  game = false
  gamestart = false
  climbing = false
  climbdown = false
  offset = 0
  killscene = false
  killscenefinish = false
finaltime.innerHTML = time.toFixed(2)
endd.style.display = 'block'
yay.play()
scorething.style.display = 'none'

  press.style.display = 'block'
  pauset.style.display = 'none'
timer.style.display = 'block'
startdiv.style.display = 'none'
nadeko.position.x = 600
nadeko.position.y = 630
nadeko.velocity.x = 0
nadeko.velocity.y = 0

paused.style.display = 'none'


 nadeko.position.x = 600
nadeko.position.y = 630
nadeko.velocity.x = 0
nadeko.velocity.y = 0
animate()

}






function restart(){
  score = 0
scorething.style.display = 'none'
  endd.style.display = 'none'
  press.style.display = 'block'
  pauset.style.display = 'none'
timer.style.display = 'block'
startdiv.style.display = 'none'
nadeko.position.x = 600
nadeko.position.y = 630
nadeko.velocity.x = 0
nadeko.velocity.y = 0
gameend = false
paused.style.display = 'none'

 game = false
 gamestart = false
 climbing = false
 climbdown = false
 offset = 0
 killscene = false
 killscenefinish = false
animate()
time = 0
timer.innerHTML = 'Time: 0'




backgroundshi = []




 bottombg = new Background({
  position:{
    x:0,
    y:0
  },
  scale: 1.22,
  index:0,

imageSrc: './images/nadegame/nadegamebgtorigate.png',
name: 'bottombg'

})
backgroundshi.push(bottombg)


 bottombgg = new Background({
  position:{
    x:0,
    y:0
  },
  scale: 1.22,
  index:2,

imageSrc: './images/nadegame/nadegamebgtorigatebamboo.png',
name: 'bottombgg'

})
backgroundshi.push(bottombgg)

 pointer = new Background({
position:{
  x:(3954*3.33)+350,
  y:-11895+725
},
scale: 3,
index:2,

imageSrc: './images/nadegame/pointer.png',
name: 'pointer'

})
backgroundshi.push(pointer)


 shrinetop = new Background({
position:{
  x:(3954*3.33)+325,
  y:-11895+725-995+97
},

scale: 1.5,
index:1,

imageSrc: './images/nadegame/nadegamebgtoptorigate.png',
name: 'shrinetop'

})
backgroundshi.push(shrinetop)

 shrinetopf = new Background({
position:{
  x:(3954*3.33)+325,
  y:-11895+725-995+97
},

scale: 1.5,
index:1,

imageSrc: './images/nadegame/nadegamebgtoptorigatebamboo.png',
name: 'shrinetopf'

})
backgroundshi.push(shrinetopf)

 stairs1 = new Background({
  position:{
    x:canvas.width,
    y:(-304*3*1)+766
  },
  scale: 3,
  index:1,

imageSrc: './images/nadegame/stair1.png',
name: 'stairs1'

})
backgroundshi.push(stairs1)
 stairs2 = new Background({
position:{
  x:canvas.width,
  y:(-304*3*2)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair2.png',
name: 'stairs2'

})
backgroundshi.push(stairs2)
 stairs3 = new Background({
position:{
x:canvas.width,
y:(-304*3*3)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair3.png',
name: 'stairs3'

})
backgroundshi.push(stairs3)

 stairs4 = new Background({
position:{
x:canvas.width,
y:(-304*3*4)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair4.png',
name: 'stairs4'

})
backgroundshi.push(stairs4)
 stairs5 = new Background({
position:{
x:canvas.width,
y:(-304*3*5)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair5.png',
name: 'stairs5'

})
backgroundshi.push(stairs5)
 stairs6 = new Background({
position:{
x:canvas.width,
y:(-304*3*6)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair6.png',
name: 'stairs6'

})
backgroundshi.push(stairs6)
 stairs7 = new Background({
position:{
x:canvas.width,
y:(-304*3*7)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair7.png',
name: 'stairs7'

})
backgroundshi.push(stairs7)
 stairs8 = new Background({
position:{
x:canvas.width,
y:(-304*3*8)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair8.png',
name: 'stairs8'

})
backgroundshi.push(stairs8)
 stairs9 = new Background({
position:{
x:canvas.width,
y:(-304*3*9)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair9.png',
name: 'stairs9'

})
backgroundshi.push(stairs9)
 stairs10 = new Background({
position:{
x:canvas.width,
y:(-304*3*10)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair10.png',
name: 'stairs10'

})
backgroundshi.push(stairs10)
 stairs11 = new Background({
position:{
x:canvas.width,
y:(-304*3*11)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair11.png',
name: 'stairs11'

})
backgroundshi.push(stairs11)

 stairs12 = new Background({
position:{
x:canvas.width,
y:(-304*3*12)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair12.png',
name: 'stairs12'

})
backgroundshi.push(stairs12)

 stairs13 = new Background({
position:{
x:canvas.width,
y:(-304*3*13)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/stair13.png',
name: 'stairs13'

})
backgroundshi.push(stairs13)









 stairsgrass1 = new Background({
position:{
x:canvas.width,
y:(-304*3*1)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo1.png',
name: 'stairsgrass1'

})
backgroundshi.push(stairsgrass1)
 stairsgrass2 = new Background({
position:{
x:canvas.width,
y:(-304*3*2)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo2.png',
name: 'stairsgrass2'

})
backgroundshi.push(stairsgrass2)
 stairsgrass3 = new Background({
position:{
x:canvas.width,
y:(-304*3*3)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo3.png',
name: 'stairsgrass3'

})
backgroundshi.push(stairsgrass3)

 stairsgrass4 = new Background({
position:{
x:canvas.width,
y:(-304*3*4)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo4.png',
name: 'stairsgrass4'

})
backgroundshi.push(stairsgrass4)
 stairsgrass5 = new Background({
position:{
x:canvas.width,
y:(-304*3*5)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo5.png',
name: 'stairsgrass5'

})
backgroundshi.push(stairsgrass5)
 stairsgrass6 = new Background({
position:{
x:canvas.width,
y:(-304*3*6)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo6.png',
name: 'stairsgrass6'

})
backgroundshi.push(stairsgrass6)
 stairsgrass7 = new Background({
position:{
x:canvas.width,
y:(-304*3*7)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo7.png',
name: 'stairsgrass7'

})
backgroundshi.push(stairsgrass7)
 stairsgrass8 = new Background({
position:{
x:canvas.width,
y:(-304*3*8)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo8.png',
name: 'stairsgrass8'

})
backgroundshi.push(stairsgrass8)
 stairsgrass9 = new Background({
position:{
x:canvas.width,
y:(-304*3*9)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo9.png',
name: 'stairsgrass9'

})
backgroundshi.push(stairsgrass9)

 stairsgrass10 = new Background({
position:{
x:canvas.width,
y:(-304*3*10)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo10.png',
name: 'stairsgrass10'

})
backgroundshi.push(stairsgrass10)

 stairsgrass11 = new Background({
position:{
x:canvas.width,
y:(-304*3*11)+766
},
scale: 3,
index:1,

imageSrc: './images/nadegame/frontbamboo11.png',
name: 'stairsgrass11'

})
backgroundshi.push(stairsgrass11)

 stairsgrass12 = new Background({
  position:{
  x:canvas.width,
  y:(-304*3*12)+766
  },
  scale: 3,
  index:1,

  imageSrc: './images/nadegame/frontbamboo12.png',
  name: 'stairsgrass12'

  })
  backgroundshi.push(stairsgrass12)

   stairsgrass13 = new Background({
    position:{
    x:canvas.width,
    y:(-304*3*13)+766
    },
    scale: 3,
    index:1,

    imageSrc: './images/nadegame/frontbamboo13.png',
    name: 'stairsgrass13'

    })
    backgroundshi.push(stairsgrass13)


     ragikanb = new Background({
      position:{
      x:2050+600,
      y:0-600
      },
      scale: 2,
      index:1,

      imageSrc: './images/nadegame/ragikanb.png',
      name: 'ragikanb'

      })
      backgroundshi.push(ragikanb)
nadeko.switchSprite('idle')
      animate()
}
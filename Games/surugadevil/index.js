const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
var ehd = document.querySelector('#enemyHealth');
var phd =  document.querySelector('#playerHealth')
var black =  document.querySelector('.black')
c.imageSmoothingEnabled = false
canvas.width = 1600
canvas.height = 900
bloodcolor = `rgba(255,0,0,`

const ratio = innerWidth/innerHeight
		var gamediv = document.querySelector('.gamediv');
		
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












    var bgm = new Audio('./files/devilgame.mp3')		
    
    bgm.volume = 0.1
		bgm.loop = true
		var pauseout = new Audio('./files/pause out.wav')
    var pausein = new Audio('./files/pausein.wav')
    var takehit1 = new Audio('./files/takehit.wav')
    var takehit2 = new Audio('./files/takehit2.wav')
    var takehit3 = new Audio('./files/takehit3.mp3')
    var takehit4 = new Audio('./files/takehit4.wav')
    let sfxa = []
		sfxa.push(pauseout)
    sfxa.push(pausein)
    sfxa.push(takehit1)
    sfxa.push(takehit2)
    sfxa.push(takehit3)
    sfxa.push(takehit4)
    sfxa.forEach(element => {
			element.volume = 0.7
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















    const pauset = document.querySelector('.pause');
    const startd = document.querySelector('.startgame');
    function startgame(){
      black.style.opacity = 0;
      setTimeout(() => {
        black.style.display = 'none'
      }, 3000);
      bgm.play()
      changeColor()
      gamerun = true
      animate()
    pauset.style.display = 'block'
    startd.style.display = 'none'
    
    keys.d.pressed = true

    player.lastKey = 'd'
setTimeout(() => {
  keys.d.pressed = false
}, 600);
    }
    const paused = document.querySelector('.paused')
function pause(){
  bgm.pause()
  pausein.play()
  paused.style.display = 'block'
  gamerun = false
}
function resume(){
  bgm.play()
  pauseout.play()
  paused.style.display = 'none'
  gamerun = true
  animate()
}
const endd = document.querySelector('.endgame')

const winner = document.querySelector('.scoretd')
function restart(){  
  pauseout.play()
  document.location.reload()
}
function endgame(){
endd.style.display = 'block'
gamerun = false
pauset.style.display = 'none'
startd.style.display = 'none'
}


c.fillRect(0, 0, canvas.width, canvas.height)



const gravity = 0.7




const background = new Sprite({

  position: {

    x: 0,

    y: -40

  },scale: 3,

  imageSrc: './img/normal.png',
  imageSrcb: './img/blue.png',
  imageSrcr: './img/red.png',
  imageSrcp: './img/pink.png',
  imageSrcg: './img/green.png',
  imageSrcy: './img/yellow.png',
  imageSrcn: './img/normal.png',
  offset:{
    x:0,
    y:0
  }

})

let folder1 = '/normal'
let folder2 = '/green'
let folder3 = '/blue'
let folder4 = '/pink'
let folder5 = '/red'
let folder6 = '/yellow'
let hurt1 = ''
let hurt2 = 'h'
let hurt3 = 'hh'

const player = new Fighter({

  position: {

    x: 140,

    y: 0

  },

  velocity: {

    x: 0,

    y: 0

  },

  imageSrc: './img/kanbaru/normal/Idle.png',

  framesMax: 8,

  scale: 2,

  offset: {

    x: -20,

    y: -10

  },

  sprites: {

    idle: {
      
   imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Idle.png',
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Idle.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Idle.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Idle.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Idle.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Idle.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Idle.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Idle.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Idle.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Idle.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Idle.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Idle.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Idle.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Idle.png',
      offset:40,
      framesMax: 7,
      
    },

    run: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Run.png', 
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Run.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Run.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Run.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Run.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Run.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Run.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Run.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Run.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Run.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Run.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Run.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Run.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Run.png',
      framesMax: 8

    },

    jump: {
     imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Jump.png',
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Jump.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Jump.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Jump.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Jump.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Jump.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Jump.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Jump.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Jump.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Jump.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Jump.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Jump.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Jump.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Jump.png',
    
      framesMax: 2

    },

    fall: {
      
        imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Fall.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Fall.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Fall.png',
        imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Fall.png',
        imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Fall.png',
        imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Fall.png',
        imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Fall.png',
        imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Fall.png',
        imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Fall.png',
        imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Fall.png',
        imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Fall.png',
        imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Fall.png',
        imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Fall.png',
        imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Fall.png',
        
      framesMax: 2

    },

    attack1: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Attack1.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Attack1.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Attack1.png',
        imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Attack1.png',
        imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Attack1.png',
        imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Attack1.png',
        imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Attack1.png',
        imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Attack1.png',
        imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Attack1.png',
        imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Attack1.png',
        imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Attack1.png',
        imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Attack1.png',
        imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Attack1.png',
        imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Attack1.png',
        offset:30,
      framesMax: 4,
      atwidth:100,
      atoffset:40

    },

    takeHit: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Take hit.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Take hit.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Take hit.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Take hit.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Take hit.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Take hit.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Take hit.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Take hit.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Take hit.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Take hit.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Take hit.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Take hit.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Take hit.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Take hit.png',
      
      framesMax: 3

    },

    death: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Death.png',
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Death.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Death.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Death.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Death.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Death.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Death.png',      
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Death.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Death.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Death.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Death.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Death.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Death.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Death.png',
      offset:120,
      framesMax: 5

    },
    
    idleLeft: {
      
   imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Idle - left.png',
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Idle - left.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Idle - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Idle - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Idle - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Idle - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Idle - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Idle - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Idle - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Idle - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Idle - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Idle - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Idle - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Idle - left.png',
      framesMax: 7,
      offset:50

    },

    runLeft: {
     imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Run - left.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Run - left.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Run - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Run - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Run - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Run - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Run - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Run - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Run - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Run - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Run - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Run - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Run - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Run - left.png',
    
    
      framesMax: 8

    },

    jumpLeft: {
     imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Jump - left.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Jump - left.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Jump - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Jump - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Jump - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Jump - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Jump - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Jump - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Jump - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Jump - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Jump - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Jump - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Jump - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Jump - left.png',
    
      framesMax: 2

    },

    fallLeft: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Fall - left.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Fall - left.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Fall - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Fall - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Fall - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Fall - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Fall - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Fall - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Fall - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Fall - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Fall - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Fall - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Fall - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Fall - left.png',
     
      framesMax: 2

    },

    attack1Left: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Attack1 - left.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Attack1 - left.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Attack1 - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Attack1 - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Attack1 - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Attack1 - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Attack1 - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Attack1 - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Attack1 - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Attack1 - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Attack1 - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Attack1 - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Attack1 - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Attack1 - left.png',
    
      offset:90,
      framesMax: 4,
      atoffset:-70

    },

    takeHitLeft: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Take hit - left.png',
        imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Take hit - left.png',
        imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Take hit - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Take hit - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Take hit - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Take hit - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Take hit - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Attack1 - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Take hit - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Take hit - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Take hit - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Take hit - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Take hit - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Attack1 - left.png',
      
      framesMax: 3

    },

    deathLeft: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Death - left.png',
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Death - left.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Death - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Death - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Death - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Death - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Death - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Death - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Death - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Death - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Death - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Death - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Death - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Death - left.png',    
      framesMax: 5,
      offset:120,


    },
    
    attack2: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Attack2.png',
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Attack2.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Attack2.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Attack2.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Attack2.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Attack2.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Attack2.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Attack2.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Attack2.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Attack2.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Attack2.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Attack2.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Attack2.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Attack2.png',
      framesMax: 11,
      offset:120,
      atwidth:170,
      atoffset:50

    },
    attack2Left: {
      imageSrc: './img/kanbaru'+folder1+'/'+hurt1+'Attack2 - left.png',
      imageSrcn: './img/kanbaru'+folder1+'/'+hurt1+'Attack2 - left.png',
      imageSrch: './img/kanbaru'+folder1+'/'+hurt2+'Attack2 - left.png',
      imageSrcgh: './img/kanbaru'+folder2+'/'+hurt2+'Attack2 - left.png',
      imageSrcbh: './img/kanbaru'+folder3+'/'+hurt2+'Attack2 - left.png',
      imageSrcph: './img/kanbaru'+folder4+'/'+hurt2+'Attack2 - left.png',
      imageSrcrh: './img/kanbaru'+folder5+'/'+hurt2+'Attack2 - left.png',
      imageSrcyh: './img/kanbaru'+folder6+'/'+hurt2+'Attack2 - left.png',
      imageSrchh: './img/kanbaru'+folder1+'/'+hurt3+'Attack2 - left.png',
      imageSrcghh: './img/kanbaru'+folder2+'/'+hurt3+'Attack2 - left.png',
      imageSrcbhh: './img/kanbaru'+folder3+'/'+hurt3+'Attack2 - left.png',
      imageSrcphh: './img/kanbaru'+folder4+'/'+hurt3+'Attack2 - left.png',
      imageSrcrhh: './img/kanbaru'+folder5+'/'+hurt3+'Attack2 - left.png',
      imageSrcyhh: './img/kanbaru'+folder6+'/'+hurt3+'Attack2 - left.png',
      framesMax: 11,
      offset:130,
      atoffset:-160

    }

  },

  attackBox: {

    offset: {

      x: 100,

      y: 50

    },

    width: 160,

    height: 50

  }

})



const enemy = new Fighter({

  position: {

    x: 1400,

    y: 100

  },

  velocity: {

    x: 0,

    y: 0

  },

  color: 'blue',

  imageSrc: './img/araragi/normal/Idle - left.png',

  framesMax: 4,

  scale: 2,

  offset: {

    x: 0,

    y: 0

  },

  sprites: {

    idle: {
     imageSrc: './img/araragi'+folder1+'/'+hurt1+'Idle.png',
      imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Idle.png',
      imageSrch: './img/araragi'+folder1+'/'+hurt2+'Idle.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Idle.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Idle.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Idle.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Idle.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Idle.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Idle.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Idle.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Idle.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Idle.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Idle.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Idle.png',
      
            framesMax: 4,
            offset:0
    },

    run: {
     imageSrc: './img/araragi'+folder1+'/'+hurt1+'Run.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Run.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Run.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Run.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Run.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Run.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Run.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Run.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Run.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Run.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Run.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Run.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Run.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Run.png',
      framesMax: 8

    },

    jump: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Jump.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Jump.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Jump.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Jump.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Jump.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Jump.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Jump.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Jump.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Jump.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Jump.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Jump.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Jump.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Jump.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Jump.png',
      
      
      framesMax: 2

    },

    fall: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Fall.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Fall.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Fall.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Fall.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Fall.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Fall.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Fall.png',      
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Fall.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Fall.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Fall.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Fall.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Fall.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Fall.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Fall.png',
      
      
      framesMax: 2

    },

    attack1: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Attack1.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Attack1.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Attack1.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Attack1.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Attack1.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Attack1.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Attack1.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Attack1.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Attack1.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Attack1.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Attack1.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Attack1.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Attack1.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Attack1.png',
      
      framesMax: 8,
      offset:0,
      atwidth:100,
      atoffset:50

    },

    takeHit: {
      
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Take hit.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Take hit.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Take hit.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Take hit.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Take hit.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Take hit.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Take hit.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Take hit.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Take hit.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Take hit.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Take hit.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Take hit.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Take hit.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Take hit.png',
      
      framesMax: 3

    },

    death: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Death.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Death.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Death.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Death.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Death.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Death.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Death.png',        
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Death.png',     
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Death.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Death.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Death.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Death.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Death.png',      
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Death.png', 
      offset:0,
      framesMax: 6

    },
    idleLeft: {
     imageSrc: './img/araragi'+folder1+'/'+hurt1+'Idle - left.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Idle - left.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Idle - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Idle - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Idle - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Idle - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Idle - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Idle - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Idle - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Idle - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Idle - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Idle - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Idle - left.png',      
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Idle - left.png',     
      framesMax: 4,
      offset:100,

    },

    runLeft: {
     imageSrc: './img/araragi'+folder1+'/'+hurt1+'Run - left.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Run - left.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Run - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Run - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Run - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Run - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Run - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Run - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Run - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Run - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Run - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Run - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Run - left.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Run - left.png',
      
      framesMax: 8

    },

    jumpLeft: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Jump - left.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Jump - left.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Jump - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Jump - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Jump - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Jump - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Jump - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Jump - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Jump - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Jump - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Jump - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Jump - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Jump - left.png',      
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Jump - left.png',
      
      framesMax: 2

    },

    fallLeft: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Fall - left.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Fall - left.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Fall - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Fall - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Fall - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Fall - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Fall - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Fall - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Fall - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Fall - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Fall - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Fall - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Fall - left.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Fall - left.png',
      
      
      framesMax: 2

    },

    attack1Left: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Attack1 - left.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Attack1 - left.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Attack1 - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Attack1 - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Attack1 - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Attack1 - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Attack1 - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Attack1 - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Attack1 - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Attack1 - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Attack1 - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Attack1 - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Attack1 - left.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Attack1 - left.png',
      offset:70,
      framesMax: 8,
      atwidth:70,
      atoffset:-85

    },

    takeHitLeft: {
      
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Take hit - left.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Take hit - left.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Take hit - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Take hit - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Take hit - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Take hit - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Take hit - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Take hit - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Take hit - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Take hit - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Take hit - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Take hit - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Take hit - left.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Take hit - left.png',
      
      framesMax: 3

    },

    deathLeft: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Death - left.png',
        imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Death - left.png',
        imageSrch: './img/araragi'+folder1+'/'+hurt2+'Death - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Death - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Death - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Death - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Death - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Death - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Death - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Death - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Death - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Death - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Death - left.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Death - left.png',
      offset:250,
      framesMax: 6

    },
    
    attack2: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Attack2.png',
      imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Attack2.png',
      imageSrch: './img/araragi'+folder1+'/'+hurt2+'Attack2.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Attack2.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Attack2.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Attack2.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Attack2.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Attack2.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Attack2.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Attack2.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Attack2.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Attack2.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Attack2.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Attack2.png',
      framesMax: 9,
      offset:85,
      atwidth:220,
      atoffset:50

    },
    attack2Left: {
      imageSrc: './img/araragi'+folder1+'/'+hurt1+'Attack2 - left.png',
      imageSrcn: './img/araragi'+folder1+'/'+hurt1+'Attack2 - left.png',
      imageSrch: './img/araragi'+folder1+'/'+hurt2+'Attack2 - left.png',
      imageSrcgh: './img/araragi'+folder2+'/'+hurt2+'Attack2 - left.png',
      imageSrcbh: './img/araragi'+folder3+'/'+hurt2+'Attack2 - left.png',
      imageSrcph: './img/araragi'+folder4+'/'+hurt2+'Attack2 - left.png',
      imageSrcrh: './img/araragi'+folder5+'/'+hurt2+'Attack2 - left.png',
      imageSrcyh: './img/araragi'+folder6+'/'+hurt2+'Attack2 - left.png',
      imageSrchh: './img/araragi'+folder1+'/'+hurt3+'Attack2 - left.png',
      imageSrcghh: './img/araragi'+folder2+'/'+hurt3+'Attack2 - left.png',
      imageSrcbhh: './img/araragi'+folder3+'/'+hurt3+'Attack2 - left.png',
      imageSrcphh: './img/araragi'+folder4+'/'+hurt3+'Attack2 - left.png',
      imageSrcrhh: './img/araragi'+folder5+'/'+hurt3+'Attack2 - left.png',
      imageSrcyhh: './img/araragi'+folder6+'/'+hurt3+'Attack2 - left.png',
      framesMax: 9,
      offset:240,
      atwidth:50,
      atoffset:-220
    }

  },

  attackBox: {

    offset: {

      x: -170,

      y: 50

    },

    width: 170,

    height: 50

  }

})


background.image = background.imagen


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

  ArrowRight: {

    pressed: false

  },

  ArrowLeft: {

    pressed: false

  }
  
,
  ArrowUp: {

    pressed: false

  },
  ArrowDown: {

    pressed: false

  },space:{
    pressed:false
  }

}

enemy.lastKey = 'ArrowLeft'
player.lastkey = 'd'

player.isAttacking = false

    enemy.isAttacking = false
const both = [player,enemy]
let clr
let x


setInterval(() => {
x =  Math.random()*6
hurt()

}, 5000);

function hurt(){
  if(!enemy.dead&&!player.dead){
  if(enemy.health > 90){
    changeColor()
    }else if(enemy.health > 50){
      changeColorh()
      }else if(enemy.health > 0){
        changeColorhh()
        }}
    
}

let gamerun = false
let eda = true
let pda = true
let scrollLimit = 300
let scrollthing
let scrolln = 0
function animate() {
if(player.dead&& pda){
  player.switchSprite('dead');
  
  pda = false  
player.takeHit()
}
if(enemy.dead&& eda){
 
  enemy.switchSprite('dead');
  eda = false

  enemy.takeHit()
  
}

if(enemy.health>10&&enemy.health<100){
enemy.health +=0.01
}
  
ehd.style.width = enemy.health + '%'
phd.style.width = player.health + '%'
  
  c.fillRect(0, 0, canvas.width, canvas.height)
  
  background.update()

  c.fillStyle = 'rgba(255, 255, 255, 0.15)'

  c.fillRect(0, 0, canvas.width, canvas.height)

  player.update()

  enemy.update()
  bloodps.forEach((bloodp, i) => {
    if (bloodp.y >canvas.height){
      bloodps.splice(i, 1)
    } else {
      bloodp.update()
    }
  })
  if(gamerun){
    requestAnimationFrame(animate)}
if(player.velocity.x>5){
  player.velocity.x -= 1
}else if(player.velocity.x<-5){
  player.velocity.x += 1
}else{player.velocity.x = 0}
  

if(enemy.velocity.x>5){
  enemy.velocity.x -= 1
}else if(enemy.velocity.x<-5){
  enemy.velocity.x += 1
}else{enemy.velocity.x = 0}


  // player movement
 if (keys.a.pressed &&player.position.x +player.velocity.x> 30 && player.lastKey === 'a' && !player.isAttacking) {
    player.velocity.x = -5

    player.switchSprite('runLeft')

  } else if (keys.d.pressed &&player.position.x + player.width +player.velocity.x+ 10<canvas.width&& player.lastKey === 'd'&&!player.isAttacking) {
    player.velocity.x = 5

    player.switchSprite('run')

  } else if (player.lastKey === 'a'){
    player.switchSprite('idleLeft')

  }
  else{
    player.switchSprite('idle')

  }



  // jumping

if(keys.w.pressed && player.position.y  + player.height >  canvas.height  - 26&&!player.isAttacking){
  player.velocity.y = -20
}


  if (player.velocity.y < 0 && player.lastKey === 'a') {

    player.switchSprite('jumpLeft')

  }else if (player.velocity.y < 0 && player.lastKey === 'd') {

    player.switchSprite('jump')

  }else if (player.velocity.y > 0  && player.lastKey === 'a') {

    player.switchSprite('fallLeft')

  }
   else if (player.velocity.y > 0  && player.lastKey === 'd') {

    player.switchSprite('fall')

  }

  if(keys.space.pressed && player.attacks === 0 && !player.isAttacking ){
    player.attack()
    player.attacks ++
   }else if(keys.space.pressed && player.attacks === 1 && !player.isAttacking){
    player.attack2()
    player.attacks --
   }
  
if(player.position.x+player.width+player.velocity.x+30>canvas.width){
  player.velocity.x = 0
}
if(player.position.x+player.velocity.x-40<0){
  player.velocity.x = 0
}
if(enemy.position.x+enemy.width+enemy.velocity.x+30>canvas.width){
  enemy.velocity.x = 0
}
if(enemy.position.x+enemy.velocity.x-40<0){
  enemy.velocity.x = 0
}

  // Enemy movement
  
  if(enemy.velocity.x === 0 && enemy.velocity.y === 0 && enemy.lastKey === 'ArrowLeft'){
    enemy.switchSprite('runLeft')
  }
  if(enemy.velocity.x === 0 && enemy.velocity.y === 0 && enemy.lastKey === 'ArrowRight'){
    enemy.switchSprite('run')
  }
  
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'&&enemy.position.x > 10 &&!enemy.isAttacking) {
      enemy.velocity.x = -4
  
      enemy.switchSprite('runLeft')
            
  
  
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'&&enemy.position.x < canvas.width -60  &&!enemy.isAttacking) {
      enemy.velocity.x = 4
  
      enemy.switchSprite('run')
  
    }else if (enemy.lastKey === 'ArrowRight'){
      enemy.switchSprite('idle')
  
    }
    else{
      enemy.switchSprite('idleLeft')
  
    }
  
    if(keys.ArrowDown.pressed && enemy.attacks === 0 && !enemy.isAttacking){
      enemy.attack()
      enemy.attacks ++
     }else if(keys.ArrowDown.pressed && enemy.attacks === 1 && !enemy.isAttacking){
      enemy.attack2()
      enemy.attacks --
     }

  // jumping


  

  if(keys.ArrowUp.pressed && enemy.position.y  + enemy.height >  canvas.height  - 26  &&!enemy.isAttacking){
    enemy.velocity.y = -15
  }
  

  if (enemy.velocity.y < 0 && enemy.lastKey === 'ArrowRight') {

    enemy.switchSprite('jump')

  } else  if (enemy.velocity.y < 0 && enemy.lastKey === 'ArrowLeft') {

    enemy.switchSprite('jumpLeft')

  } else if (enemy.velocity.y > 0 && enemy.lastKey === 'ArrowRight') {

    enemy.switchSprite('fall')

  }else if (enemy.velocity.y > 0 && enemy.lastKey === 'ArrowLeft') {

    enemy.switchSprite('fallLeft')

  }






  // detect for collision & enemy gets hit
if(player.isAttacking){
  if (

    rectangularCollision({

      rectangle1: player,

      rectangle2: enemy

    }) &&

    player.isAttacking &&

    player.framesCurrent === 9&&player.attacks == 0

  ) {
    takehit3.play()
    enemy.takeHit()
    hurt()

    ehd.style.width = enemy.health + '%'
  }
  
}
if (

    rectangularCollision({

      rectangle1: player,

      rectangle2: enemy

    }) &&

    player.isAttacking &&

    player.framesCurrent === 1&&player.attacks ==1

  ) {
    
    takehit2.play()
 
    enemy.takeHit()

  }
  

 





  // this is where our player gets hit

  
if (

  rectangularCollision({

    rectangle1: enemy,

    rectangle2: player

  }) &&

  enemy.isAttacking &&

  enemy.framesCurrent === 6

) {let weird = Math.random()*2
  if(weird<1){
    takehit3.play();}else{takehit2.play()}
  player.takeHit()



}




}




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



// AI

setInterval(() => {
  if(!enemy.dead&&!enemy.isAttacking&&enemy.image != enemy.sprites.takeHit.image ||enemy.sprites.takeHitLeft.image){
  const x = Math.random()*10
  if(enemy.position.x > player.position.x+player.width + 30 && x <9.5){
    keys.ArrowLeft.pressed = true
    enemy.lastKey = 'ArrowLeft'
    if(x>9.3){
      keys.ArrowUp.pressed = true
    setTimeout(() => {
      keys.ArrowUp.pressed = false
    }, 100);
    }
  }else if(enemy.position.x+enemy.width + 30 < player.position.x && x <9.5){keys.ArrowRight.pressed = true;
    enemy.lastKey = 'ArrowRight';
  }else if(x >=9.5){keys.ArrowLeft.pressed = false;keys.ArrowRight.pressed = false;
}else{reached()}}else{keys.ArrowLeft.pressed = false;keys.ArrowRight.pressed = false;}
}, 300);

function reached(){
  if(!enemy.dead&&!enemy.isAttacking&&enemy.image != enemy.sprites.takeHit.image ||enemy.sprites.takeHitLeft.image){
  const v =Math.random()*10
  if(v<4.8){
    keys.ArrowDown.pressed = true
    setTimeout(() => {
      keys.ArrowDown.pressed = false
    }, 100);
  }else if(v>5&&v<7){
    keys.ArrowUp.pressed = true
    setTimeout(() => {
      keys.ArrowUp.pressed = false
    }, 100);
    if(enemy.lastKey = 'ArrowRight'){keys.ArrowRight.pressed = true;
      enemy.lastKey = 'ArrowRight';}else if(enemy.lastKey = 'ArrowLeft'){ keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'}
  }else{keys.ArrowLeft.pressed = false;keys.ArrowRight.pressed = false;}}
}






























window.addEventListener('keydown', (event) => {

  if (!player.dead) {

    switch (event.key) {

      case 'd':
        
        keys.d.pressed = true

        player.lastKey = 'd'
      
        break

      case 'a':

        keys.a.pressed = true

        player.lastKey = 'a'

        break

      case 'w':

        keys.w.pressed = true
        

        break

      case ' ':

        keys.space.pressed = true
  
        break
     
    }

  }



  if (!enemy.dead) {

    // switch (event.key) {

    //   case 'ArrowRight':

    //     keys.ArrowRight.pressed = true

    //     enemy.lastKey = 'ArrowRight'

    //     break

    //   case 'ArrowLeft':

    //     keys.ArrowLeft.pressed = true

    //     enemy.lastKey = 'ArrowLeft'

    //     break

    //   case 'ArrowUp':
       
    //     keys.ArrowUp.pressed = true


        

    //     break

    //     case 'ArrowDown':
       
    //       keys.ArrowDown.pressed = true
  
  
          
  
    //       break

    // }

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
        
      case ' ':

        keys.space.pressed = false
  
        break
  }



  // enemy keys

  // switch (event.key) {

  //   case 'ArrowRight':

  //     keys.ArrowRight.pressed = false

  //     break

  //   case 'ArrowLeft':

  //     keys.ArrowLeft.pressed = false

  //     break
      
  //     case 'ArrowUp':
       
  //       keys.ArrowUp.pressed = false
  //       break
      
  //     case 'ArrowDown':
       
  //       keys.ArrowDown.pressed = false
  //       break
  //       case 'b':
  //      console.log(player.health)
  //       break
        
  // }

})



function menu(){
  window.location.href = "../../index.html";
}

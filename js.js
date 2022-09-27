		var canvas = document.querySelector('.canvas');
		var topelement = document.querySelectorAll('.topelement');
		var topelementitem = document.querySelectorAll('.topelementitem');
		var games = document.querySelector('.games')
		var support = document.querySelector('.support')
		var credit = document.querySelector('.credits')
		var backb = document.querySelector('.back')
		var settingz = document.querySelector('.settings')
		var bgm1 = new Audio('./files/menu1.mp3')
		var bgm2 = new Audio('./files/menu2.mp3')
		let bgm
		var menuselect = new Audio('./files/menu back.wav')
		var gameselect = new Audio('./files/menu select.wav')
		var menuback = new Audio('./files/pause out.wav')
		var sfxd = document.querySelector('.sfx')
		var musicd = document.querySelector('.music')
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
}else if(sounds == 'off'){
	sfxd.innerHTML = 'Sound: OFF'
		
    sound = false
}
if(musics == 'on'|| musics == undefined){
    music = true
}else if(musics == 'off'){
	musicd.innerHTML = 'Music: OFF'
    music = false
	
}
		let sfx = []
		sfx.push(menuselect)
		sfx.push(gameselect)
		sfx.push(menuback)
		sfx.forEach(element => {
			element.volume = 0.2
		});	

		var bgw = Math.random()*2
		if(Math.random()*2 <=1){
			bgm = bgm1
		}else{
			bgm = bgm2
		}
		bgm.loop = true




function gamego(game){
	gameselect.play();
	if(game == 1){
		window.location.href = "./Games/hitagifall/index.html";
	}
	if(game == 2){		
		window.location.href = "./Games/hachikujiadventure/index.html";
	}
	if(game == 3){		
		window.location.href = "./Games/surugadevil/index.html";
	}
	if(game == 4){		
		window.location.href = "./Games/surugaballin/index.html";
	}
	if(game == 5){		
		window.location.href = "./Games/nadekospeedrun/index.html";
	}
	if(game == 6){		
		window.location.href = "./Games/tsubasaquiz/index.html";
	}
}








		var startd = document.querySelector('.spacetostart')		
		var loadingd = document.querySelector('.loading')
		var disclaimerd = document.querySelector('.disclaimer')


let loading = true

		var c = canvas.getContext('2d');
		var menudiv = document.querySelector('.menudiv');
		canvas.width =1600;
		canvas.height = 900;
		const ratio = innerWidth/innerHeight
		if(innerHeight>innerWidth){
			menudiv.style.transform ='scale('+ innerWidth/1600 +')'
	
		}
		if(ratio>1.777){
			menudiv.style.transform ='scale('+ innerHeight/900 +')'
	
		}
		if(ratio<=1.777){
			menudiv.style.transform ='scale('+ innerWidth/1600 +')'
		
		}

		addEventListener('resize', (event) => {
			
			const ratio = innerWidth/innerHeight
		if(innerHeight>innerWidth){
			menudiv.style.transform ='scale('+ innerWidth/1600 +')'
	
		}
		if(ratio>1.777){
			menudiv.style.transform ='scale('+ innerHeight/900 +')'
	
		}
		if(ratio<=1.777){
			menudiv.style.transform ='scale('+ innerWidth/1600 +')'
		
		}
		});
		document.addEventListener('keydown', function(event){
			if(event.key === "Escape"){
				back()
			}
			if(event.key === " "){
				if(!loading){
				start()}
			}
			if(event.key === "D"){
				removes()
			}
		});
		document.addEventListener('DOMContentLoaded', function(event){
			setTimeout(() => {
				loadingd.style.opacity = 0
				setTimeout(() => {
					loadingd.style.display = 'none'
					setTimeout(() => {						
						disclaimerd.style.opacity = '0'
						setTimeout(() => {			
						loading = false				
						disclaimerd.style.display = 'none'
						
						}, 1000);						
					}, 1000);
				}, 1000);
			}, 1000);
		})
function start(){
	if(music){
	bgm.play()}
startd.style.opacity = '0'
setTimeout(() => {
	startd.style.display = 'none'
}, 1000);
}
		function back(){
			if(sound){
				menuback.play()}
			
			topelementitem.forEach(element => {
				element.style.opacity = 0
				
				setTimeout(() => {
					element.style.display = 'none'
				}, 400);
			});
		}
		function gameson(){
			if(sound){
				menuselect.play()}
			games.style.display = 'block'
			setTimeout(() => {
				games.style.opacity = 1
				backb.style.opacity = 1
			}, 1);
			
			backb.style.display = 'block'
		}
		function supporton(){
			if(sound){
				menuselect.play()}
			support.style.display = 'block'
			setTimeout(() => {
				support.style.opacity = 1
				backb.style.opacity = 1
			}, 1);
			backb.style.display = 'block'
		}
		function crediton(){
			if(sound){
				menuselect.play()}
			credit.style.display = 'block'
			setTimeout(() => {				
				credit.style.opacity = 1
				backb.style.opacity = 1
			}, 1);
			backb.style.display = 'block'
		}
		function settingzon(){	if(sound){
			menuselect.play()}
			settingz.style.display = 'block'
			setTimeout(() => {
				settingz.style.opacity = 1
				backb.style.opacity = 1
			}, 1);
			backb.style.display = 'block'
		}
		
		function musictoggle(){
			sessionStorage.setItem('music','off');
			if(sound){
			menuselect.play()}
			if(music){
				music = false
				bgm.pause()				
musicd.innerHTML = 'Music: OFF'
			}else if(!music){
				
			sessionStorage.setItem('music','on');
				music = true
				bgm.play()					
musicd.innerHTML = 'Music: ON'
			}
		}
		
		function soundtoggle(){
			if(sound){
				sessionStorage.setItem('sound','off');
				sound = false
				sfx.forEach(element => {
					element.muted = true
				});		
sfxd.innerHTML = 'Sound: OFF'
			}else if(!sound){
				sessionStorage.setItem('sound','on');
				sound = true
				sfx.forEach(element => {
					element.muted = false
				});		if(sound){
					menuselect.play()}		
sfxd.innerHTML = 'Sound: ON'
			}
		}
		









		var canvas2 = document.querySelector('.canvas2');
		var c2 = canvas2.getContext('2d');
		canvas2.width =132;
		canvas2.height = 140;
		c2.fillRect(0,0,canvas2.width,canvas2.height)




		class Shinobu {
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
				c2.drawImage(
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
			  this.position.x += this.velocity.x
			  this.position.y += this.velocity.y  
			  }
			switchSprite(sprite) {
			
			  switch (sprite) {
				case 'sitting':
				  if (this.image !== this.sprites.sitting.image) {
					this.image = this.sprites.sitting.image
					this.framesMax = this.sprites.sitting.framesMax
					
				  }
				  break
				case 'side':
				  if (this.image !== this.sprites.side.image) {
					this.image = this.sprites.side.image
					this.framesMax = this.sprites.side.framesMax
				  }
				  break
				case 'stand':
				  if (this.image !== this.sprites.stand.image) {
					this.image = this.sprites.stand.image
					this.framesMax = this.sprites.stand.framesMax
					
				  }
				  break
				  case 'sword':
				  if (this.image !== this.sprites.sword.image) {
					this.image = this.sprites.sword.image
					this.framesMax = this.sprites.sword.framesMax
					this.framesCurrent = 0
				  }
				  break
				}
		  }
		  }
		  
		  
		  const shinobu = new Shinobu({
		  
			position: {
		  
			  x: 0,
		  
			  y: 0
		  
			},scale: 1,framesMax:2,
		  
			imageSrc: './images/shinomenu/sitting.png',
			offset:{
			  x:0,
			  y:0
			},
			sprites: {
		  
			  sitting: {
				
			 
				imageSrc: './images/shinomenu/sitting.png',
			
				framesMax: 2
		  
			  },
			  side: {
				
			 
				imageSrc: './images/shinomenu/shinoside.png',
			
				framesMax: 1
		  
			  },
		  
		  
			  stand: {
			   
				  imageSrc: './images/shinomenu/shinostand.png',
			  
			  
				framesMax: 2
		  
			  },
		  
			  sword: {
			   
				  imageSrc: './images/shinomenu/shinosword.png',
			  
				framesMax: 2
		  
			  }
			}
		  })
		  
const sp = Math.floor(Math.random()*3+1)

if(sp == 1){
	shinobu.switchSprite('sitting');
	canvas2.style.transform = 'scale(4)'
	canvas2.style.bottom = '300px'
}

if(sp == 2){
	shinobu.switchSprite('stand');
}
if(sp == 3){
	shinobu.switchSprite('sword');
}






































		
		var particleCount = 250;
		


		function LightParticle(x, y, radius, color,velocityx,velocityy) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.color = color;
      this.velocityx = velocityx
      this.velocityy = velocityy

			this.update = function() {
        this.x += this.velocityx
        this.y += this.velocityy
        if(this.x<0){
          this.x = Math.random()*canvas.width
          this.y = 0
        }
        if(this.y>canvas.height){
          this.x = canvas.width
          this.y = Math.random()*canvas.height
        }
				this.draw();
			};

			this.draw = function() {
				c.save();
				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
				c.shadowColor = this.color;
				// c.shadowBlur = 15;
				// c.shadowOffsetX = 0;
				// c.shadowOffsetY = 0;
				c.fillStyle = this.color;
				c.fill();
				c.closePath();
				c.restore();
			};
		}

		var lightParticles = [];

		var timer = 0;
		var opacity = 1;
		var speed = 0.0005;
		var colors = [
			"#FFF",
			"#FFF",
			"#FFF",
			"#FFF",
			"#FFF"
		];

		var initializeParticles;

		(initializeParticles = function() {
			for (var i = 0; i < particleCount; i++) {

				var randomColorIndex = Math.floor(Math.random() * 6);
				var randomRadius = Math.random() * 2;

				// Ensure particles are spawned past screen width and height so
				// there will be no missing stars when rotating canvas
				var x = Math.random() * canvas.width ;
				var y = Math.random() * canvas.height;
        var velocityx = -4
        var velocityy = 2
				lightParticles.push(new LightParticle(x, y, randomRadius, colors[randomColorIndex],velocityx=velocityx,velocityy=velocityy));
			}
		})();

		function animate() {
			c2.clearRect(0,0,canvas2.width,canvas2.height)
			shinobu.update()
			window.requestAnimationFrame(animate);
			for (var i = 0; i < lightParticles.length; i++) {
				lightParticles[i].update();
			}
      c.fillStyle = 'rgba(67, 80, 66,0.1)'
      c.fillRect(0,0,canvas.width,canvas.height)
			
		}


		animate();
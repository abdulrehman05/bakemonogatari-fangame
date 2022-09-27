class Sprite {
    constructor({
      position,
      imageSrc,
      imageSrcg,
      imageSrcr,
      imageSrcb,
      imageSrcy,
      imageSrcp,
      imageSrcn,

      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 }
    }) {
      this.position = position
      this.width = 60
      this.height = 150
      this.image = new Image()
      this.image.src = imageSrc
      this.imageg = new Image()
      this.imageg.src = imageSrcg
      this.imager = new Image()
      this.imager.src = imageSrcr
      this.imageb = new Image()
      this.imageb.src = imageSrcb
      this.imagey = new Image()
      this.imagey.src = imageSrcy
      this.imagep = new Image()
      this.imagep.src = imageSrcp
      this.imagen = new Image()
      this.imagen.src = imageSrcn
      this.scale = scale
      this.framesMax = framesMax
      this.framesCurrent = 0
      this.framesElapsed = 0
      this.framesHold = 5
      this.offset = offset
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
      
    }
  }
  
  class Fighter extends Sprite {
    constructor({
      position,
      velocity,
      color = 'red',
      imageSrc,
      scale = 1,
      framesMax = 1,
      offset = { x: 0, y: 0 },
      sprites,
      attackBox = { offset: {}, width: undefined, height: undefined }
    }) {
      super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset
      })
  
      this.velocity = velocity
      this.width = 50
      this.height = 300
      this.lastKey
      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y
        },
        offset: attackBox.offset,
        width: attackBox.width,
        height: attackBox.height
      }
      this.color = color
      this.isAttacking
      this.health = 100
      this.framesCurrent = 0
      this.framesElapsed = 0
      this.framesHold = 5
      this.sprites = sprites
      this.dead = false
      this.attacks = 0
  
      for (const sprite in this.sprites) {
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite].imageSrc
        sprites[sprite].imagen = new Image()
        sprites[sprite].imagen.src = sprites[sprite].imageSrcn
        sprites[sprite].imageh = new Image()
        sprites[sprite].imageh.src = sprites[sprite].imageSrch
        sprites[sprite].imagegh = new Image()
        sprites[sprite].imagegh.src = sprites[sprite].imageSrcgh
        sprites[sprite].imagebh = new Image()
        sprites[sprite].imagebh.src = sprites[sprite].imageSrcbh
        sprites[sprite].imageph = new Image()
        sprites[sprite].imageph.src = sprites[sprite].imageSrcph
        sprites[sprite].imagerh = new Image()
        sprites[sprite].imagerh.src = sprites[sprite].imageSrcrh
        sprites[sprite].imageyh = new Image()
        sprites[sprite].imageyh.src = sprites[sprite].imageSrcyh
        sprites[sprite].imagehh = new Image()
        sprites[sprite].imagehh.src = sprites[sprite].imageSrchh
        sprites[sprite].imageghh = new Image()
        sprites[sprite].imageghh.src = sprites[sprite].imageSrcghh
        sprites[sprite].imagebhh = new Image()
        sprites[sprite].imagebhh.src = sprites[sprite].imageSrcbhh
        sprites[sprite].imagephh = new Image()
        sprites[sprite].imagephh.src = sprites[sprite].imageSrcphh
        sprites[sprite].imagerhh = new Image()
        sprites[sprite].imagerhh.src = sprites[sprite].imageSrcrhh
        sprites[sprite].imageyhh = new Image()
        sprites[sprite].imageyhh.src = sprites[sprite].imageSrcyhh
      }
   
    }
  
    update() {
      if(this.health <1){
        this.dead = true
      }
      this.draw()
      this.banimateFrames()
  if(this.dead){
    this.takeHit
  }
      // attack boxes
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y
      if(this.position.x+this.width+this.velocity.x+30>canvas.width){
        this.velocity.x = 0
      }
      if(this.position.x+this.velocity.x-40<0){
        this.velocity.x = 0
      }
      // draw the attack box
  //     c.save()
  //     c.fillStyle = 'rgba(0,0,0,0.4)'
  //     c.fillRect(
  //       this.attackBox.position.x,
  //       this.attackBox.position.y,
  //       this.attackBox.width,
  //       this.attackBox.height
  //     )
  //     c.restore()
  //     c.save()
  //     c.fillStyle='red'
  //     c.fillRect(this.position.x,this.position.y,this.width,this.height)
  // c.restore()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
  
      // gravity function
      if (this.position.y + this.height + this.velocity.y >= canvas.height - 26) {
        this.velocity.y = 0
      } else this.velocity.y += gravity
    }
    banimateFrames() {
      this.framesElapsed++
  
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++
        } else {
          if(this.dead&&this.image == this.sprites.death.image || this.image == this.sprites.deathLeft.image){detWinner()
           return}else { this.framesCurrent = 0;}
          
        }
      }
    }
    
    attack() {
      if (this.lastKey === 'a' || this.lastKey === 'ArrowLeft' ){
      this.switchSprite('attack1Left')}
      else if (this.lastKey === 'd' || this.lastKey === 'ArrowRight' ){
      this.switchSprite('attack1')}
      this.isAttacking = true
    }
    attack2() {
      if (this.lastKey === 'a' || this.lastKey === 'ArrowLeft' ){
      this.switchSprite('attack2Left'); }
      else if (this.lastKey === 'd' || this.lastKey === 'ArrowRight' ){
      this.switchSprite('attack2');}
      this.isAttacking = true
    }
  
  
    takeHit() {
      this.health -= 1
      this.isAttacking = false
      if (this.health <=0  && (this.lastKey === 'd' || this.lastKey === 'ArrowRight') ) {
                this.switchSprite('death')
                this.dead = true
      } else if (this.health <=0 && (this.lastKey === 'a' || this.lastKey === 'ArrowLeft') ) {
        this.switchSprite('deathLeft')
        this.dead = true
      }
       else if (this.lastKey === 'a' || this.lastKey === 'ArrowLeft' ) {this.switchSprite('takeHitLeft');this.velocity.x += 10;this.velocity.y+=2
       bloodpart(this.position.y +60,this.position.x+25,bloodcolor,60,1)
      }
       else if (this.lastKey === 'd' || this.lastKey === 'ArrowRight' ) {this.switchSprite('takeHit');this.velocity.x -= 10;this.velocity.y-=2
       bloodpart(this.position.y +60,this.position.x+25,bloodcolor,60,-1)
      }

    }
  
    switchSprite(sprite) {
      if (this.image === this.sprites.death.image) {                
        return
      }
      if (this.image === this.sprites.deathLeft.image) {  
        return
      }
  
      // overriding all other animations with the attack animation
      if (
        this.image === this.sprites.attack1.image &&
        this.framesCurrent < this.sprites.attack1.framesMax - 1
      ){this.isAttacking = true;
                return;
        
       }else{this.isAttacking = false}
        if (
          this.image === this.sprites.attack1Left.image &&
          this.framesCurrent < this.sprites.attack1.framesMax - 1
        ){this.isAttacking = true;
          return;
  
 }else{this.isAttacking = false}
          if (
            this.image === this.sprites.attack2.image &&
            this.framesCurrent < this.sprites.attack2.framesMax - 1
          ){this.isAttacking = true;
            return;
    
   }else{this.isAttacking = false}
            if (
              this.image === this.sprites.attack2Left.image &&
              this.framesCurrent < this.sprites.attack2.framesMax - 1
            ){this.isAttacking = true;
              return;
      
     }else{this.isAttacking = false}
  
      // override when fighter gets hit
      if (
        this.image === this.sprites.takeHit.image &&
        this.framesCurrent < this.sprites.takeHit.framesMax - 1
      )
        return
        if (
          this.image === this.sprites.takeHitLeft.image &&
          this.framesCurrent < this.sprites.takeHit.framesMax - 1
        )
          return
  
      switch (sprite) {
        case 'idle':
          if (this.image !== this.sprites.idle.image) {
            
            this.offset.x = 10+ this.sprites.idle.offset
            this.image = this.sprites.idle.image
            this.framesMax = this.sprites.idle.framesMax
            this.framesCurrent = 0
          }
          break
        case 'run':
          if (this.image !== this.sprites.run.image) {            
            this.offset.x = 10+ this.sprites.idle.offset
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax
            this.framesCurrent = 0
          }
          break
        case 'jump':
          if (this.image !== this.sprites.jump.image) {
            this.image = this.sprites.jump.image
            this.framesMax = this.sprites.jump.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'fall':
          if (this.image !== this.sprites.fall.image) {
            this.image = this.sprites.fall.image
            this.framesMax = this.sprites.fall.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'attack1':
          if (this.image !== this.sprites.attack1.image) {
            this.attackBox.width = this.sprites.attack1.atwidth
            this.offset.x = 10+ this.sprites.attack1.offset

            
            this.attackBox.offset.x = this.sprites.attack1.atoffset
            this.image = this.sprites.attack1.image
            this.framesMax = this.sprites.attack1.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'takeHit':
          if (this.image !== this.sprites.takeHit.image) {
            this.image = this.sprites.takeHit.image
            this.framesMax = this.sprites.takeHit.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'death':
          if (this.image !== this.sprites.death.image) {
            this.image = this.sprites.death.image            
            this.offset.x = 10+ this.sprites.death.offset  
            this.framesMax = this.sprites.death.framesMax
            this.framesCurrent = 0
            this.health = 0
          }
          break
          case 'idleLeft':
          if (this.image !== this.sprites.idleLeft.image) {
            this.offset.x = 10+ this.sprites.idleLeft.offset
            this.image = this.sprites.idleLeft.image
            this.framesMax = this.sprites.idle.framesMax
            this.framesCurrent = 0
            
          }
          break
        case 'runLeft':
          if (this.image !== this.sprites.runLeft.image) {
            
            this.offset.x = 10+ this.sprites.idleLeft.offset
            this.image = this.sprites.runLeft.image
            this.framesMax = this.sprites.run.framesMax
            this.framesCurrent = 0
          }
          break
        case 'jumpLeft':
          if (this.image !== this.sprites.jumpLeft.image) {
            this.image = this.sprites.jumpLeft.image
            this.framesMax = this.sprites.jump.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'fallLeft':
          if (this.image !== this.sprites.fallLeft.image) {
            this.image = this.sprites.fallLeft.image
            this.framesMax = this.sprites.fall.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'attack1Left':
          if (this.image !== this.sprites.attack1Left.image) {
            
            this.attackBox.width = this.sprites.attack1.atwidth            
            this.attackBox.offset.x = this.sprites.attack1Left.atoffset
            this.offset.x = 10+ this.sprites.attack1Left.offset
            this.image = this.sprites.attack1Left.image
            this.framesMax = this.sprites.attack1.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'takeHitLeft':
          if (this.image !== this.sprites.takeHitLeft.image) {
            this.image = this.sprites.takeHitLeft.image
            this.framesMax = this.sprites.takeHit.framesMax
            this.framesCurrent = 0
          }
          break
  
        case 'deathLeft':
          if (this.image !== this.sprites.deathLeft.image) {
            this.image = this.sprites.deathLeft.image
            
            this.offset.x = 10+ this.sprites.deathLeft.offset   
            this.framesMax = this.sprites.death.framesMax
            this.framesCurrent = 0
            
            this.health = 0
          }
          break
          case 'attack2':
          if (this.image !== this.sprites.attack2.image) {
            
            this.offset.x = 10+ this.sprites.attack2.offset            
            this.attackBox.offset.x = this.sprites.attack2.atoffset
            this.attackBox.width = this.sprites.attack2.atwidth
            this.image = this.sprites.attack2.image
            this.framesMax = this.sprites.attack2.framesMax
            this.framesCurrent = 0
          }
          break
          case 'attack2Left':
          if (this.image !== this.sprites.attack2Left.image) {
            this.attackBox.width = this.sprites.attack2.atwidth
            this.attackBox.offset.x = this.sprites.attack2Left.atoffset
            this.offset.x = 10+ this.sprites.attack2Left.offset
            this.image = this.sprites.attack2Left.image
            this.framesMax = this.sprites.attack2Left.framesMax
            this.framesCurrent = 0
          }
          break
      }
    }
  }
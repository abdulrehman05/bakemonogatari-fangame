function rectangularCollision({ rectangle1, rectangle2 }) {

    return (

      rectangle1.attackBox.position.x + rectangle1.attackBox.width >=

        rectangle2.position.x &&

      rectangle1.attackBox.position.x <=

        rectangle2.position.x + rectangle2.width &&

      rectangle1.attackBox.position.y + rectangle1.attackBox.height >=

        rectangle2.position.y &&

      rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height

    )

  }
  function detWinner(){
    determineWinner({ player, enemy})
  }

  function determineWinner({ player, enemy}) {
if (player.health > enemy.health) {
winner.innerHTML = 'RAINY DEVIL'
    } else if (player.health < enemy.health) {      
winner.innerHTML = 'ARARAGI'
    }
endgame()
  }

  const pausebtns = document.querySelectorAll('.pedbtn'); 
  // pausebtns.forEach(button => {
  //   button.style.backgroundColor =";
  // });


  function changeColor() {
    if(gamerun){

      for (const sprite in enemy.sprites) {
        enemy.sprites[sprite].image = enemy.sprites[sprite].imagen
        }
        for (const sprite in player.sprites) {
          player.sprites[sprite].image = player.sprites[sprite].imagen
          } 

  bloodps.forEach((bloodp, i) => {
   bloodp.color = `rgba(255,0,0,`
  })
  bloodcolor = `rgba(255,0,0,`
  pausebtns.forEach(button => {
    button.style.backgroundColor ="red";
  });hc('red')
  background.image = background.imagen
}
}
 


function changeColorh() {
  if(gamerun){
  
    if(x > 0 && x<=1){
      for (const sprite in enemy.sprites) {
        enemy.sprites[sprite].image = enemy.sprites[sprite].imageh
        } 
      for (const sprite in player.sprites) {
        player.sprites[sprite].image = player.sprites[sprite].imageh
        } 
      bloodps.forEach((bloodp, i) => {
        bloodp.color = `rgba(255,0,0,`
       })
       pausebtns.forEach(button => {
    button.style.backgroundColor ="red";
  });hc('red')
bloodcolor = `rgba(255,0,0,`
  background.image = background.imagen  
  background.image.src = background.imagen.src

    }
    if(x > 1 && x<=2){
          for (const sprite in enemy.sprites) {
          enemy.sprites[sprite].image = enemy.sprites[sprite].imagebh
          } 
        for (const sprite in player.sprites) {
          player.sprites[sprite].image = player.sprites[sprite].imagebh
          } 
        bloodps.forEach((bloodp, i) => {
          bloodp.color = `rgba(127,209,238,`
         })
         pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(127,209,238,1)";
  });hc(`rgba(127,209,238,1)`)
bloodcolor = `rgba(127,209,238,`
  background.image = background.imageb  
  background.image.src = background.imageb.src
    }
    if(x > 2 && x<=3){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imagegh
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imagegh
      } 
    bloodps.forEach((bloodp, i) => {
      bloodp.color = `rgba(172,227,28,`
     })
     pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(172,227,28,1)";
  });hc(`rgba(172,227,28,1)`)
bloodcolor = `rgba(172,227,28,`
  background.image = background.imageg  
  background.image.src = background.imageg.src
    }
    if(x > 3 && x<=4){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imagerh
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imagerh
      } 
    bloodps.forEach((bloodp, i) => {
      bloodp.color = `rgba(255,0,0,`
     })
     
     pausebtns.forEach(button => {
    button.style.backgroundColor ="red";
  });hc(`red`)
bloodcolor = `rgba(255,0,0,`
  background.image = background.imager
  
  background.image.src = background.imager.src
    }
    if(x > 4 && x<=5){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imageph
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imageph
      } 
    
    bloodps.forEach((bloodp, i) => {
      bloodp.color = `rgba(255,179,192,`
     })
     
     pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(255,179,192,1)";
  });hc(`rgba(255,179,192,1)`)
bloodcolor = `rgba(255,179,192,`
  background.image = background.imagep  
  background.image.src = background.imagep.src
    }
    if(x > 5 && x<=6){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imageyh
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imageyh
      } 
    bloodps.forEach((bloodp, i) => {
      bloodp.color =`rgba(255,207,64,`
      
     })
     
     pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(255,207,64,1)";
  });hc(`rgba(255,207,64,1)`)
bloodcolor = `rgba(255,207,64,`
  background.image = background.imagey  
  background.image.src = background.imagey.src
    }
    
  }
}

function changeColorhh() {
  if(gamerun){



    if(x > 0 && x<=1){
      for (const sprite in enemy.sprites) {
        enemy.sprites[sprite].image = enemy.sprites[sprite].imagehh
        } 
      for (const sprite in player.sprites) {
        player.sprites[sprite].image = player.sprites[sprite].imagehh
        } 
      
  background.image = background.imagen
  

  bloodps.forEach((bloodp, i) => {
    bloodp.color =`rgba(255,0,0,`
   })
   
   pausebtns.forEach(button => {
    button.style.backgroundColor ="red";
  });hc(`red`)
  bloodcolor = `rgba(255,0,0,`
  background.image.src = background.imagen.src
    }
    if(x > 1 && x<=2){
          for (const sprite in enemy.sprites) {
          enemy.sprites[sprite].image = enemy.sprites[sprite].imagebhh
          } 
        for (const sprite in player.sprites) {
          player.sprites[sprite].image = player.sprites[sprite].imagebhh
          } 
        
  bloodps.forEach((bloodp, i) => {
    bloodp.color = `rgba(127,209,238,`
   })
   
   pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(127,209,238,1)";
  });hc(`rgba(127,209,238,1)`)
        bloodcolor = `rgba(127,209,238,`
  background.image = background.imageb
  
  background.image.src = background.imageb.src
    }
    if(x > 2 && x<=3){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imageghh
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imageghh
      }
    
  bloodps.forEach((bloodp, i) => {
    bloodp.color = `rgba(172,227,28,`
   })
   
   pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(172,227,28,1)";
  });hc(`rgba(172,227,28,1)`)
bloodcolor = `rgba(172,227,28,`
  background.image = background.imageg
  
  background.image.src = background.imageg.src
    }
    if(x > 3 && x<=4){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imagerhh
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imagerhh
      } 
    
    
  bloodps.forEach((bloodp, i) => {
    bloodp.color = `rgba(255,0,0,`
   })
   
   pausebtns.forEach(button => {
    button.style.backgroundColor ="red";
  });hc(`red`)
bloodcolor = `rgba(255,0,0,`
  background.image = background.imager
  
  background.image.src = background.imager.src
    }
    if(x > 4 && x<=5){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imagephh
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imagephh
      } 
    bloodps.forEach((bloodp, i) => {
      bloodp.color = `rgba(255,179,192,`
     })
     
   pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(255,179,192)";
  });hc(`rgba(255,179,192`)
bloodcolor = `rgba(255,179,192,1)`
  background.image = background.imagep
  
  background.image.src = background.imagep.src
    }
    if(x > 5 && x<=6){
      for (const sprite in enemy.sprites) {
      enemy.sprites[sprite].image = enemy.sprites[sprite].imageyhh
      } 
    for (const sprite in player.sprites) {
      player.sprites[sprite].image = player.sprites[sprite].imageyhh
      } 
    
    bloodps.forEach((bloodp, i) => {
      bloodp.color = `rgba(255,207,64,`
     })
     
   pausebtns.forEach(button => {
    button.style.backgroundColor ="rgba(255,207,64,1)";
  });hc(`rgba(255,207,64,1)`)
bloodcolor = `rgba(255,207,64,`
  background.image = background.imagey
  background.image.src = background.imagey.src
    }
  }
  }

  class bloodp {
    constructor(x, y, radius, color, velocity) {
      this.x = x
      this.y = y
      this.radius = radius
      this.color = color
      this.velocity = velocity
      this.ttl = 1000
      this.tranparency = 1
    }
  
    draw() {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
      c.fillStyle = this.color + this.tranparency + ')'
      c.fill()
      c.closePath()
    }
  
    update() {
      this.draw()
      this.x += this.velocity.x
      if(this.y<canvas.height){this.velocity.y+= 0.15}
      this.y += this.velocity.y
      if(this.velocity.x>0.05){
       this.velocity.x -= 0.005
      }
      if(this.velocity.x<0.05&&this.velocity.x>-0.05){
       this.velocity.x = 0
      }
      if(this.velocity.x<-0.05){
       this.velocity.x += 0.005
      }
    }
  }

  bloodps = []

  function bloodpart(positiony,positionx,color,amount,dir){
  const bloodpCount = amount
  for (let i = 0; i < bloodpCount; i++) {
    const bloodpradius = Math.random()*6
    const x = positionx
    const y = positiony
    direction = dir
    const pveloc = Math.random()*6+2
    bloodps.push(
      new bloodp(x, y, bloodpradius, color, {
        x:  pveloc*direction,
        y: Math.random()*-2
      })
    )
  }
}

var playerhealth = document.querySelector('#playerHealth')
var enemyhealth = document.querySelector('#enemyHealth')
function hc(color){

  enemyhealth.style.backgroundColor = color
  
  playerhealth.style.backgroundColor = color

}

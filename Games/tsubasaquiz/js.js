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

    function menu(){
      window.location.href = "../../index.html";
    }





    var bgm = new Audio('./files/quiz game.mp3')		    
    bgm.volume = 0.25
		bgm.loop = true		
 let musics = sessionStorage.getItem("music");
let sounds = sessionStorage.getItem("sound");
let sound 
let music

if(musics == 'on'|| musics == undefined){
    music = true
    bgm.muted = false
}else if(musics == 'off'){
    music = false
	bgm.muted = true
}
		

















let score

const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const button3 = document.querySelector('.btn3')
const button4 = document.querySelector('.btn4')
const questionbox = document.querySelector('.question')


const endd = document.querySelector('.endgame')

const scoretd = document.querySelector('.scoretd')
function endgame(){
  hane.style.opacity = '0'
endd.style.display = 'block';
finalscore = score
scoretd.innerHTML = finalscore
score = 0
button1.style.display = 'none';
button2.style.display = 'none';
button3.style.display = 'none';
button4.style.display = 'none';
questionbox.style.display = 'none';
}

button1.style.display = 'none';
button2.style.display = 'none';
button3.style.display = 'none';
button4.style.display = 'none';
questionbox.style.display = 'none';

const startd = document.querySelector('.startgame')
const hane = document.querySelector('.hanekawa')
function startgame(){
  bgm.play()
hane.style.opacity = '1'
startd.style.display = 'none';
button1.style.display = 'block';
button2.style.display = 'block';
button3.style.display = 'block';
button4.style.display = 'block';
questionbox.style.display = 'block';
}


function restart(){  
  hane.style.opacity = '1'
  endd.style.display = 'none';
button1.style.display = 'block';
button2.style.display = 'block';
button3.style.display = 'block';
button4.style.display = 'block';
questionbox.style.display = 'block';
correctans = 0
 
questionNo = 0
question = 0
questionchange(0)
}





const questions = [
 ['When did the first episode of Bakemonogatari anime air?','July 3, 2009','August 21, 2009','July 3, 2010','	September 25, 2009',1],
 ['How did Hachikuji die?','Cancer','Old Age','Fell off','A traffic Accident',4],
 ['what were Kanbaru and Senjougahara pair called?','Fire Sisters','Valhalla Combo','Baskemtbal','The BakeBallers',2],
 ['What is the name of the brand of Donuts that Araragi buys?','Mr Donut','Dunkin Donuts','Big Donuts','Donut Shop',1],
 ['How many episodes are in Bakemonogatari?','13','12 (condolences)','15','14',3],
 ['What is the first scene of Bakemonogatari?','Senjougahara Falling','Araragi Vamp trailer','Hanekawa Panties','Hanekawa Classroom scene',3], 
 ['What is the name of the dude with the Hawaiian shirt?','Brad','Pitt','Kaiki Deishu','Oshino Meme',4],
 ['In which arc does Senjougahara confess to Araragi?','Hitagi Crab','Tsubasa Cat','Suruga Monkey','Mayoi Snail',4],
 ['What is the name of the abandoned shrine?','Snake Shrine','Kita-Shirahebi Shrine','Snail Shrine','Cool Shrine',2], 
 ['What is the name of the Araragi&#39;s Sisters?','Karen and Tsukihi','Yotsugi and Tsukihi','Nadeko and Tsukihi','Karen and Yotsugi',1], 
 ['What did Nadeko do at the shrine?','Pray','Dance','Kill Snakes','Visit',3],
 ['Who put a curse on Nadeko?','Classmate','Friend','Teacher','Parents',1], 
 ['Who saved Senjougahara from her fall?','Only you can save yourself','Araragi','No one, She fell','Hanekawa',2],
 ['Who is Lesbian?','Kanbaru Suruga','Drake','Me','Senjougahara',1],
 ['What is the price of love?','Free','300 yen','460 yen','298 yen',4],
 ['What is the name of Araragi&#39;s school?','Ouran Private High',' Naoetsu Private High','Seton Gakuen','Karasuno High ',2],
 ['What happened during Golden Week?','Idk',' ','What?',' <div class="cat"></div>',4],
 ['Bakemonogatari is the first novel to have 50 billion copies sold.','True','False','This is the correct answer','Wrong answer',3],
 ['What do you know?','I know everything','I know nothing','You are the one who knows','I only know what i know',4 ]
]

 const totalquestions = questions.length
 let correctans = 0
 
 let questionNo = 0
 let question = 0
 function questionchange(questionNo){
  questionbox.innerHTML ='Q. ' + questions[questionNo][0]
  button1.innerHTML = questions[questionNo][1]
  button2.innerHTML = questions[questionNo][2]
  button3.innerHTML = questions[questionNo][3]
  button4.innerHTML = questions[questionNo][4]
 }
 questionchange(0)
 function answer(ans){
  if(ans===questions[questionNo][5]){
   correctans++
   console.log('correct')
   
  }else{
   console.log('incorrect')
  }
  if(questionNo!= totalquestions-1){
  setTimeout(() =>{questionNo+=1
  questionchange(questionNo)
}, 100)
  }else{
   questionfinish()
  }
 }
 let result
 function questionfinish(){
  result =( correctans/ totalquestions)*100
  score = result.toFixed(2) + '%'
  button1.style.display = 'none'
  
  button2.style.display = 'none'
  
  button3.style.display = 'none'
  
  button4.style.display = 'none'
  
  questionbox.style.display = 'none'
  endgame()
 }

 const loadingd = document.querySelector('.loading');
window.addEventListener('load',()=>{
  setTimeout(() => {
    loadingd.style.opacity = 0
    setTimeout(() => {
      loadingd.style.display = 'none'      
    }, 1000);
  }, 1000);
})

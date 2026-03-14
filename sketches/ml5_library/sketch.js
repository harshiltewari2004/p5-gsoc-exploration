let classifier;
let words=[
  "jimmy",
  "aaja"
];

let predictedWord=" ";

function preload(){
let options = {probabilityThreshold:0.7};
   classifier = ml5.soundClassifier(
  "https://teachablemachine.withgoogle.com/models/2fDCiUdlR/model.json",
  options
);
}
function setup() {
  createCanvas(650, 450);
  classifier.classifyStart(gotResult);
}
function gotResult(results){
predictedWord=results[0].label;
}
function displayWords(){
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(96);
  text("Say one of these words!",width/2,40);
  
  let x=125;
  let y=130;
  
  for(let i=0;i<words.length;i++){
    fill(158);
    text(words[i],x,y);
    y+=50;
    if((i+1)%6==0){
    x+=200;
    y=150;
    }
  }
  
}

function draw() {
  background(250);
  displayWords();
  
  if(predictedWord!==""){
  fill(211,107,255);
    textAlign(CENTER,CENTER);
    textSize(64);
    text(predictedWord,width/2,90);
  }
}
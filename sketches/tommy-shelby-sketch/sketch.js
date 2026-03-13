function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(230);
  
   
    fill(240, 210, 180);
    ellipse(200, 220, 160, 200);
  
    
    fill(40);
    arc(200, 150, 200, 120, PI, TWO_PI);
    rect(110, 150, 180, 20);
  
    
    fill(0);
    ellipse(170, 210, 8, 8);
    ellipse(230, 210, 8, 8);
  
    
    stroke(0);
    strokeWeight(3);
    line(155, 195, 185, 200);
    line(215, 200, 245, 195);
  
    
    strokeWeight(2);
    line(200, 215, 195, 240);
  
    
    line(180, 260, 220, 260);
  
    
    strokeWeight(4);
    line(220, 260, 260, 260);
  
    noFill();
    stroke(120);
    strokeWeight(2);
    arc(270, 240, 30, 40, HALF_PI, PI);
    arc(280, 220, 40, 50, HALF_PI, PI);
  }
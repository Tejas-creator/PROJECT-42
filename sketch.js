var iss, spacecraft, hasDocked;
var issImage, spacecraftImage1, spacecraft2,spacecraft3, spacecraft4, bg;
var Astro,AstroImg;
var TRY;

function preload() {
  issImage = loadImage("Images/iss.png");
  spacecraftImage1 = loadImage("Images/spacecraft1.png");
  spacecraft2 = loadImage("Images/spacecraft2.png");
  spacecraft3 = loadImage("Images/spacecraft3.png");
  spacecraft4 = loadImage("Images/spacecraft4.png");
  bg = loadImage("images/spacebg.jpg");
  AstroImg = loadImage("Images/Astro.png");
}

function setup() {
 canvas = createCanvas(1200,700);
  hasDocked = false;

  iss = createSprite(800,150,0,0);
  iss.addImage("iss",issImage);
  iss.scale = 0.7;
  
  spacecraft = createSprite(550,500,0,0);
  spacecraft.addImage("normal",spacecraftImage1);
  spacecraft.scale = 0.2;

  Astro = createSprite(380,350,10,10);
  Astro.addImage("Astro",AstroImg);
  Astro.scale = 0.7;

  TRY = createButton('Press me');

}

function draw() {
  background(bg);
  Astro.visible = false;
    
  
  TRY.position(200,200);
  TRY.mousePressed(()=>{
      console.log("sheesh");
      textSize(25);
      fill("red")
      text("NOICE",Math.round(random(20, 370)),100)
  });

  
  
  if(!hasDocked) {
    spacecraft.x += random(1,-1);

      if(keyDown("UP_ARROW")){
        spacecraft.y = spacecraft.y -2;
        spacecraft.addImage(spacecraft2);
      }
      if(keyWentUp("UP_ARROW")){
        spacecraft.addImage(spacecraftImage1);
      }

        
      if(keyDown("LEFT_ARROW")){
          spacecraft.addImage(spacecraft3);
        spacecraft.x = spacecraft.x - 1;
      }
      if(keyWentUp("LEFT_ARROW")){
        spacecraft.addImage(spacecraftImage1);
      }

        
      if(keyDown("RIGHT_ARROW")){
          spacecraft.addImage(spacecraft4);
        spacecraft.x = spacecraft.x + 1;
      }
      if(keyWentUp("RIGHT_ARROW")){
        spacecraft.addImage(spacecraftImage1);
      }

        
      if(keyDown("DOWN_ARROW")){
          spacecraft.addImage(spacecraft2);
      }
      if(keyWentUp("DOWN_ARROW")){
        spacecraft.addImage(spacecraftImage1);
      }

  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(40);
    fill("red")
    text("Docking Successful!", 600, 500);
    

    Astro.visible = true;

    textSize(40);
    fill("red")
    text("Mission Success!", 600, 550);
  }

  if(hasDocked === true){
    spacecraft.addImage(spacecraftImage1);
  }

  drawSprites();
}

var nuggetsIMG, nuggetsSprite, chocolateSprite,chocolateIMG;


function preload()
{
	nuggetsIMG=loadImage("nuggets1.png")
	chocolateIMG=loadImage("chocolate1.png")
}

function setup() {
	createCanvas(500, 500);

	nuggetsSprite=createSprite(180,250,50,50);
	nuggetsSprite.addImage(nuggetsIMG);


	chocolateSprite=createSprite(320,250,50,50);
	chocolateSprite.addImage(chocolateIMG);
		
		

}


function draw() {
 
  background(0);
  
  drawSprites();
 
}






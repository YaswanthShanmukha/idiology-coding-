//Create variables here
var dog,happydog;

var database;
var foodS;
var foodStock;

function preload(){
	//load images here
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  var dog = createSprite("250,250,10,10");
  dog = addImg("dogImg");
  dog.scale = 0.4;

  // database section
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
  background(46, 139, 87);
  //
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  drawSprites();
  //add styles here
  textSize("20"); 
  strokeWeight();
  stroke("red");

  text("Food Remaining:" + foodS, 250,480);
  text("Press up_arrow to feed drago the dog",250,0);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x 
  })
}



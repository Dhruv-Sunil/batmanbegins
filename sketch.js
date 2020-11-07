const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var thunder1,thunder2,thunder3,thunder4
var engine,world
var umbrella1
var drops = []
var rand1
var maxDrops=100
function preload(){
    thunder1 = loadImage("../thunderbolt/1.png")
    thunder2 = loadImage("../thunderbolt/2.png")
    thunder3 = loadImage("../thunderbolt/3.png")
    thunder4 = loadImage("../thunderbolt/4.png")
}

function setup(){
   engine = Engine.create()
   world = engine.world
   createCanvas(400,800)
   umbrella1 = new umbrella(200,500)
if (frameCount%150===0){
for (var i = 0;i <maxDrops;i++){
drops.push(new drop(random(0,400),random(0,400)))


}

}

}

function draw(){
 Engine.update(engine)
 background("black")  
 var rand1 = Math.round(random(1,4))
 if (frameCount% 80 ===0)
{
thunder = createSprite(random(10,370),random(10,30),10,10)
switch(rand1){
case 1: thunder.addImage(thunder1)
break
case 2: thunder.addImage(thunder2)
break
case 3: thunder.addImage(thunder3)
break
case 4: thunder.addImage(thunder4)
break
}
thunder.scale = 0.4
}
umbrella1.display()
for(var i = 0; i<maxDrops;i++){
drops[i].display1()
drops[i].updateY()
}


drawSprites()
}   


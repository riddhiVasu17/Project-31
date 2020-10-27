const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var top1, bottom1, left1, right1;
var ground1;
var plinko1;

var parties = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(700,700);
  
  engine = Engine.create();
  world = engine.world;

  //edges
  top1 = new edge(350, 5, 701, 20);
  bottom1 = new edge(350, 675, 701, 20);
  left1 = new edge(5, 350, 20, 701);
  right1 = new edge(695, 350, 20, 701);

  //ground
  ground1 = new ground(width/2, 691, 701, 20);

  for (var p = 70; p <= width-50; p = p + 80) {

    plinkos.push(new plinko(p, 75, 10));

  }

  for (var p = 30; p <= width-10; p = p + 80) {

    plinkos.push(new plinko(p, 155, 10));

  }

  for (var p = 70; p <= width-50; p = p + 80) {

    plinkos.push(new plinko(p, 235, 10));

  }

  for (var p = 30; p <= width-10; p = p + 80) {

    plinkos.push(new plinko(p, 310, 10));

  }

}

function draw() {
  background(0);  

  Engine.update(engine);

  for (var d = 0; d <= width; d = d + 80) {

    divisions.push(new division(d, height-divisionHeight/2, 10, 300));

  }

  for (var q = 0; q < plinkos.length; q++) {
    plinkos[q].display();
  }

  for (var q = 0; q < plinkos.length; q++) {
    plinkos[q].display();
  }

  for (var q = 0; q < plinkos.length; q++) {
    plinkos[q].display();
  }

  for (var q = 0; q < plinkos.length; q++) {
    plinkos[q].display();
  }


  if (frameCount%60 === 0) {
    parties.push(new party(random(width/2-10,width/2+10), 10, 10));
   
  }

  fill("white");
  ground1.display();

  for (var j = 0; j < parties.length; j++) {
    parties[j].display();
  }

  for (var e = 0; e < divisions.length; e++) {
    divisions[e].display();
  }

  fill("blue");
  top1.display();
  bottom1.display();
  left1.display();
  right1.display();
  
}
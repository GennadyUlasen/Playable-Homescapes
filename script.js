const Application = PIXI.Application,
  Container = PIXI.Container,
  loader = PIXI.Loader.shared,
  resources = PIXI.Loader.shared.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite,
  Rectangle = PIXI.Rectangle; 
  
  const app = new Application({ 
  with: 800,
  height: 435,   
  antialias: true, 
  transparent: false, 
  resolution: 1,
  }
  );
    
app.view.style.position = "absolute";
app.view.style.width = window.innerWidth + "px";
app.view.style.height = window.innerHeight + "px";
app.view.style.display = "block";

document.body.appendChild(app.view);
c = new Charm(PIXI);

loader
.add("images/atlas.json")
.add("images/stair_movie.json")
.add("images/heart.json")
.add("images/icons-stairs.json")

.load(setup);

let logo, ostin, fon, table, sofa, flower, globe, cover_01, book, btn, stairs, stair_01, hammer, okBtn, newStairOne, newStairTwo, newStairThree, gameScene, finalScene;



gameScene = new Container();
app.stage.addChild(gameScene);

finalScene = new Container();
app.stage.addChild(finalScene);
finalScene.visible = false;

function setup() {
  
const fonTexture = TextureCache["fon.png"];
fon = new Sprite(fonTexture);
fon.scale.set(0.68, 0.68)
gameScene.addChild(fon);

const tableTexture = TextureCache["table.png"];
table = new Sprite(tableTexture);
table.scale.set(0.68, 0.68);
table.x = 160;
table.y = 90;
gameScene.addChild(table);

const sofaTexture = TextureCache["sofa.png"];
sofa = new Sprite(sofaTexture);
sofa.scale.set(0.6, 0.6);
sofa.x = 20;
sofa.y = 190;
gameScene.addChild(sofa);

const globeTexture = TextureCache["globe.png"];
globe = new Sprite(globeTexture);
globe.scale.set(0.6, 0.6);
globe.x = 60;
globe.y = 50;
gameScene.addChild(globe);

const bookTexture = TextureCache["book.png"];
book = new Sprite(bookTexture);
book.scale.set(0.6, 0.6);
book.x = 330;
book.y = 10;
gameScene.addChild(book);

const flowerTexture = TextureCache["flower.png"];
flower = new Sprite(flowerTexture);
flower.scale.set(0.6, 0.6);
flower.x = 580;
flower.y = 20;
gameScene.addChild(flower);

const heartTexture = TextureCache["heart.png"];
heart = new Sprite(heartTexture);
heart.visible = false;
heart.scale.set(0.4, 0.4);
heart.x = 530;
heart.y = 160;
gameScene.addChild(heart);
c.slide(heart, 510, 160, 70, "smoothstep", true);

const ostinTexture = TextureCache["ostin.png"];
ostin = new Sprite(ostinTexture);
ostin.scale.set(0.65, 0.65)
ostin.x = 330;
ostin.y = 135;
gameScene.addChild(ostin);



const btnTexture = TextureCache["btn_05.png"];
btnOne = new Sprite(btnTexture);
btnOne.anchor.set(0.5, 0.5);
btnOne.x = 400;
btnOne.y = 380;
gameScene.addChild(btnOne);
c.breathe(
  btnOne,        
  1.025,         
  1.05,          
  45,
);
function gameLoop(){
  requestAnimationFrame(gameLoop);
  c.update();
  
}
gameLoop()


const logoTexture = TextureCache["logo.png"];
logo = new Sprite(logoTexture);
logo.scale.set(0.5, 0.5)
logo.x = 20;
logo.y = 10;
gameScene.addChild(logo);

const stairsTexture = TextureCache["stairs.png"];
stairs = new Sprite(stairsTexture);
stairs.x = 568;
stairs.y = 20;
stairs.scale.set(0.5, 0.5)
gameScene.addChild(stairs);



const hammerTexture = TextureCache["hammer.png"];
hammer = new Sprite(hammerTexture);
hammer.interactive = true;
hammer.cursor = "pointer"
hammer.on('mousedown', (event) => {
  heart.visible = false;
  iconOneStairs.visible = true;
  iconTwoStairs.visible = true;
  iconThreeStairs.visible = true;
  hammer.visible = false;
 });
hammer.scale.set(0.7, 0.7)
hammer.x = 600;
hammer.y = 130;
gameScene.addChild(hammer)
hammer.visible = false
function visibleHummer() {
  heart.visible = true;
  hammer.visible = true;
}
setTimeout(visibleHummer, 2000);

const iconStairsOneTexture = TextureCache["icon-stairs-one.png"];
iconOneStairs = new Sprite(iconStairsOneTexture);
iconOneStairs.x = 380;
iconOneStairs.y = 85;
iconOneStairs.scale.set(0.5, 0.5)
iconOneStairs.visible = false;
iconOneStairs.interactive = true;
touchstart = true;
iconOneStairs.cursor = "pointer";



const iconStairsTwoTexture = TextureCache["icon-stairs-two.png"];
iconTwoStairs = new Sprite(iconStairsTwoTexture);
iconTwoStairs.x = 440;
iconTwoStairs.y = 60;
iconTwoStairs.scale.set(0.5, 0.5)
iconTwoStairs.visible = false;
iconTwoStairs.interactive = true;
touchstart = true;
iconTwoStairs.cursor = "pointer"

const iconStairsThreeTexture = TextureCache["icon-stairs-three.png"];
iconThreeStairs = new Sprite(iconStairsThreeTexture);
iconThreeStairs.x = 500;
iconThreeStairs.y = 40;
iconThreeStairs.scale.set(0.5, 0.5);
iconThreeStairs.visible = false;
iconThreeStairs.interactive = true;
touchstart = true;
iconThreeStairs.cursor = "pointer"

const iconStairs = new Container();
iconStairs.addChild(iconOneStairs);
iconStairs.addChild(iconTwoStairs);
iconStairs.addChild(iconThreeStairs);
gameScene.addChild(iconStairs)

const newStairOneTexture = TextureCache["new_stair_one.png"];
newStairOne = new Sprite(newStairOneTexture);
newStairOne.x = 565;
newStairOne.y = 0;
newStairOne.scale.set(0.5, 0.5);
newStairOne.visible = false;
gameScene.addChild(newStairOne);


const newStairTwoTexture = TextureCache["new_stair_two.png"];
newStairTwo = new Sprite(newStairTwoTexture);
newStairTwo.x = 565;
newStairTwo.y = 0;
newStairTwo.scale.set(0.5, 0.5);
newStairTwo.visible = false;
gameScene.addChild(newStairTwo);


const newStairThreeTexture = TextureCache["new_stair_three.png"];
newStairThree = new Sprite(newStairThreeTexture);
newStairThree.x = 565;
newStairThree.y = 0;
newStairThree.scale.set(0.5, 0.5);
newStairThree.visible = false;
gameScene.addChild(newStairThree);


const okBtnTexture = TextureCache["ok-btn.png"];
okBtn = new Sprite(okBtnTexture);
okBtn.scale.set(0.75, 0.75);
okBtn.visible = false;
gameScene.addChild(okBtn);
okBtn.interactive = true;
touchstart = true;
okBtn.cursor = "pointer"


 iconOneStairs.on('click', stairMovie);
 let flag = true;
 function stairMovie () {
  if(flag == true){
  stairs.visible = false

  const stair_01Texture = TextureCache["stair_01.png"];
  stair_01 = new Sprite(stair_01Texture);
  stair_01.x = 580;
  stair_01.y = -150;
  stair_01.scale.set(0.5, 0.5);
  gameScene.addChild(stair_01);
  c.slide(stair_01, 580, 60, 30)
  
  const cover_01Texture = TextureCache["cover_01.png"];
  cover_01 = new Sprite(cover_01Texture);
  cover_01.x = 580;
  cover_01.y = -150;
  cover_01.scale.set(0.5, 0.5);
  gameScene.addChild(cover_01);
  c.slide(cover_01, 580, 60, 50)

  const support_01Texture = TextureCache["support_01.png"];
  support_01 = new Sprite(support_01Texture);
  support_01.x = 570;
  support_01.y = -260;
  support_01.scale.set(0.5, 0.5);
  gameScene.addChild(support_01);
  c.slide(support_01, 570, -10, 60)
  
  okBtn.visible = true;
  okBtn.x = 385;
  okBtn.y = 140;
  
  stair_02.visible = false;
  stair_03.visible = false;
  support_02.visible = false;
  support_03.visible = false;
  cover_02.visible = false;
  cover_03.visible = false;
}
}

iconTwoStairs.on('click', stairMovieTwo);

 function stairMovieTwo () {
  
  const stair_02Texture = TextureCache["stair_02.png"];
  stair_02 = new Sprite(stair_02Texture);
  stair_02.x = 580;
  stair_02.y = -150;
  stair_02.scale.set(0.5, 0.5);
  gameScene.addChild(stair_02);
  c.slide(stair_02, 580, 60, 30)
  
  const cover_02Texture = TextureCache["cover_02.png"];
  cover_02 = new Sprite(cover_02Texture);
  cover_02.x = 580;
  cover_02.y = -150;
  cover_02.scale.set(0.5, 0.5);
  gameScene.addChild(cover_02);
  c.slide(cover_02, 580, 60, 50)

  const support_02Texture = TextureCache["support_02.png"];
  support_02 = new Sprite(support_02Texture);
  support_02.x = 570;
  support_02.y = -260;
  support_02.scale.set(0.5, 0.5);
  gameScene.addChild(support_02);
  c.slide(support_02, 570, 10, 60)

  okBtn.visible = true;
  okBtn.x = 440;
  okBtn.y = 115;
  
  support_01.visible = false;
  stair_01.visible = false;
  cover_01.visible = false;
  stair_03.visible = false;
  support_03.visible = false;
  cover_03.visible = false;
};


iconThreeStairs.on('click', stairMovieThree);
 function stairMovieThree () {
  const stair_03Texture = TextureCache["stair_03.png"];
  stair_03 = new Sprite(stair_03Texture);
  stair_03.x = 580;
  stair_03.y = -150;
  stair_03.scale.set(0.5, 0.5);
  gameScene.addChild(stair_03);
  c.slide(stair_03, 580, 67, 30)
  
  const cover_03Texture = TextureCache["cover_03.png"];
  cover_03 = new Sprite(cover_03Texture);
  cover_03.x = 580;
  cover_03.y = -150;
  cover_03.scale.set(0.5, 0.5);
  gameScene.addChild(cover_03);
  c.slide(cover_03, 580, 60, 50)

  const support_03Texture = TextureCache["support_03.png"];
  support_03 = new Sprite(support_03Texture);
  support_03.x = 555;
  support_03.y = -260;
  support_03.scale.set(0.5, 0.5);
  gameScene.addChild(support_03);
  c.slide(support_03, 555, 0, 60)

  okBtn.visible = true;
  okBtn.x = 500;
  okBtn.y = 95;

  stair_01.visible = false;
  cover_01.visible = false;
  support_01.visible = false;
  stair_02.visible = false;
  support_02.visible = false;
  cover_02.visible = false;
}


okBtn.on('click', finalMovie)
function finalMovie() {
const finalTexture = TextureCache["final.png"];
finalSprite = new Sprite(finalTexture);
finalSprite.position.set(150, 12);
finalSprite.scale.set(0.45, 0.45);
finalScene.addChild(finalSprite);
finalScene.visible = true;
gameScene.visible = false;
music.play()
}
const music = PIXI.sound.Sound.from('sound/music.mp3');
}
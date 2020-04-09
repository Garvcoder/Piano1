var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create variables for all the KEYS. For example
// var keyC = createSprite(27,200,57,200);
var keyc = createSprite(45, 85, 20, 40);
var keyd = createSprite(155, 85, 20, 40);
var keye = createSprite(265, 85, 20, 40);
var keyf = createSprite(375, 85, 20, 40);
var keyg = createSprite(320, 255, 20, 40);
var keya = createSprite(100, 255, 20, 40);
var keyb = createSprite(210, 255, 20, 40);
var cb = createSprite(100, 150, 20, 40);
var db = createSprite(210, 150, 20, 40);
var fb = createSprite(322, 150, 20, 40);
var gb = createSprite(155, 325, 20, 40);
var ab = createSprite(265, 325, 20, 40);
keyc.shapeColor = "white";
keyd.shapeColor = "white";
keye.shapeColor = "white";
keyf.shapeColor = "white";
keyg.shapeColor = "white";
keya.shapeColor = "white";
keyb.shapeColor = "white";
cb.shapeColor = "black";
db.shapeColor = "black";
fb.shapeColor = "black";
gb.shapeColor = "black";
ab.shapeColor = "black";

function draw() {
  // background("red");
  background("red");
  
  
  // We will be creating just one octave. 
  // To do so we will need 7 white keys C D E F G A B
  // and 5 black keys. c# d# f# g# a#
  //add example
  
  // Btext("text", 0, 15);ONUS POINTS if you can set put up a text on top each key
  text("Sa", 30, 34);
  text("Re", 154, 34);
  text("Ga", 261, 34);
  text("Ma", 370, 34);
  text("Pa", 100, 204);
  text("Dha", 210, 204);
  text("Ni", 316, 204);
  
  
  //Write an if condition to play the note when sprite key is pressed
  //if(condition that sprite key is pressed){
  //  play the note
  //  }
  
  // Do the same for all 7 White KEYS
  if (mousePressedOver(keyc)) {
    playSound("assets/piano_middle_C.mp3", false);
  }
  if (mousePressedOver(keyd)) {
    playSound("assets/piano_D.mp3", false);
  }
  if (mousePressedOver(keye)) {
    playSound("assets/piano_E.mp3", false);
  }
  if (mousePressedOver(keyf)) {
    playSound("assets/piano_F.mp3", false);
  }
  if (mousePressedOver(keyg)) {
    playSound("assets/piano_G.mp3", false);
  }
  if (mousePressedOver(keya)) {
    playSound("assets/piano_A.mp3", false);
  }
  if (mousePressedOver(keyb)) {
    playSound("assets/piano_B.mp3", false);
  }
  // AND Black KEYS.
  if (mousePressedOver(cb)) {
    playSound("assets/piano_C_sharp.mp3", false);
  }
  if (mousePressedOver(db)) {
    playSound("assets/piano_D_sharp.mp3", false);
  }
  if (mousePressedOver(fb)) {
    playSound("assets/piano_F_sharp.mp3", false);
  }
  if (mousePressedOver(gb)) {
    playSound("assets/piano_G_sharp.mp3", false);
  }
  if (mousePressedOver(ab)) {
    playSound("assets/piano_A_sharp.mp3", false);
  }
  
  
  
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

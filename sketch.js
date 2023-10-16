var girl , girlImg , girl_out;
var ghost , ghostImg , ghost_jump;
var rock , rockImg , rockgroup;
var branch , branchImg , branchGroup;
var PLAY = 1;
var END = 0;
var backgroundImg;
var game_over , gameover_music , game_overImg;
var you_won;
var ground;
var spookymusic;

function preload(){
girlImg = loadImage("girl_running_1.png","girl_running_2.png");
girl_out = loadImage("girl_game_over.png")
ghostImg = loadImage("ghost-standing.png")
ghost_jump = loadImage("ghost-jumping.png")
backgroundImg = loadImage("background.png")
rockImg = loadImage("rock.png")
branchImg = loadImage("brach.png")
spookymusic = loadSound("spooky.wav" , "scary_music.mp3")
gameover_music = loadSound("gameover.mp3")
game_overImg = loadImage("gameOver.png")
}

function setup() {
 
}

function draw() {
 
}
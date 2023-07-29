// create new scene
let gameScene = new Phaser.Scene('Game');


// Load assets
gameScene.preload = function () {
    //Load images
    this.load.image('Monster_1', 'assets/Mon1.png');
};

// called once after preload ends
gameScene.create = function () {
    //create Monster sprite
    this.monster_sprite = this.add.sprite(config.width / 2, config.height / 2, 'Monster_1');
    this.monster_sprite.setScale(8,8);
};

// this is called 60 times a second
gameScene.update = function () {
    this.monster_sprite.y += 1;
}

// set the configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
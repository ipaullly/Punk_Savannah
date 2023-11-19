let gameSettings = {
  playerSpeed: 4,
}

let config = {
  width: 512,
  height: 512,
  backgroundColor: 0x000000,
  scene: [
    CutScene,
    Scene1, 
    Scene2,
    Scene3,
    Scene4
  ],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
}

let game = new Phaser.Game(config);
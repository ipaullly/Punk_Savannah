class CutScene extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  preload() {
    this.load.image("mainMenu", "assets/mainMenu.png");
    this.load.image("moran", "assets/moran.png");
    this.load.image("millenium_moran", "assets/millenium_moran.png");
 
    this.load.audio("music", ["assets/background.ogg", "assets/background.mp3"]);  
  }

  create() {
    this.background = this.add.tileSprite(
      0, 0, config.width, config.height, "mainMenu"
    );

    this.add.sprite(
      128, 
      config.height/2 + 128, 
      "moran"
    ).setScale(1.5);

    this.add.sprite(
      config.width - 32, 
      124, 
      "millenium_moran"
    );

    this.background.setOrigin(0, 0);
    this.add.text(
      200, 
      20, 
      "Savannah Punk",
      {
        fontSize: '20px'
      }
    );
    
    const clickButton = this.add.text(
      200, 
      60, 
      'Start Game', 
      { 
        backgroundColor: '#dae2da', 
        color: '#413114',
        padding: {
          x: 15,
          y: 10
        } 
      });
    clickButton.setInteractive();
    clickButton.on('pointerdown', () => {
      this.scene.start("bootGame");
    });  
  }
}
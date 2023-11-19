class SuccessPage extends Phaser.Scene {
  constructor() {
    super("successPg");
  }

  preload() {
    this.load.image("success", "assets/success.png");
    // this.load.image("moran", "assets/moran.png");
    this.load.image("millenium_moran", "assets/millenium_moran.png");
 
    this.load.audio("music", ["assets/background.ogg", "assets/background.mp3"]);  
  }

  create() {
    this.background = this.add.tileSprite(
      0, 0, config.width, config.height, "success"
    );

    this.add.sprite(
      config.width - 32, 
      124, 
      "millenium_moran"
    );

    this.background.setOrigin(0, 0);
    this.add.text(
      config.width/2, 
      20, 
      "Savannah Punk",
      {
        fontSize: '20px'
      }
    );
    let totalScore = localStorage.getItem('totalScore')?localStorage.getItem('totalScore'):0
    let totalLostCargo = localStorage.getItem('totalLostCargo')
      ? localStorage.getItem('totalLostCargo')
      : 0;

    this.add.text(
      config.width/2, 
      60, 
      `Total Score: ${totalScore}`,
      {
        fontSize: '16px'
      }
    );

    this.add.text(
      config.width/2, 
      100, 
      `Cargo Collected: ${totalLostCargo}/26`,
      {
        fontSize: '16px'
      }
    );

    const clickButton = this.add.text(
      config.width/2, 
      140, 
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
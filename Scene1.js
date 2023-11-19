class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/background.png");
    this.load.image("space-bg", "assets/space-bg.png");
    this.load.image("io_homeworld", "assets/io_homeworld.png");
    this.load.image("millenium_moran", "assets/millenium_moran.png");
    this.load.spritesheet("explosion", "spritesheets/explosion.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("ship", "spritesheets/ship.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("ship2", "spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16,
    });
    this.load.spritesheet("ship3", "spritesheets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("power-up", "spritesheets/power-up.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("player", "spritesheets/player.png", {
      frameWidth: 96,
      frameHeight: 156,
    });
    this.load.spritesheet("beam", "spritesheets/beam.png", {
      frameWidth: 96,
      frameHeight: 32,
    });
    this.load.bitmapFont("pixelFont", "assets/gd_boot.png", "assets/gd_boot.xml");

    this.load.audio("music", ["assets/background.ogg", "assets/background.mp3"]);
    this.load.audio("audio_explosion", ["assets/explosion.ogg", "assets/explosion.mp3"]);
    this.load.audio("audio_beam", ["assets/beam.ogg", "assets/beam.mp3"]);
    this.load.audio("audio_collision", ["assets/siren.ogg", "assets/siren.mp3"]);
    this.load.audio("audio_pickup", ["assets/pickup.ogg", "assets/pickup.mp3"]);    
  }

  create() {
    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1
    });


    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });


    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player", {
        start: 5,
        end: 8
      }),
      frameRate: 9,
      repeat: -1
    });
    this.add.text(20, 20, "Instructions");

    this.add.text(
      20, 
      60, 
      "Ole Punctum has lost his livestock carriers",
      {
        fontSize: '14px'
      }
    );
    this.add.text(
      20, 
      80, 
      "while transporting the herd ",
      {
        fontSize: '14px'
      }
    );
    this.add.text(
      20, 
      100, 
      "back from Io after a herding season.",
      {
        fontSize: '14px'
      }
    );
      this.add.text(
        20,
        140, 
        "Unfortunately rival clans",
        {
          fontSize: '14px',
        }
      );
      this.add.text(
        20,
        160, 
        "managed to capture Ole Punctum's carriers",
        {
          fontSize: '14px',
        }
      );
      this.add.text(
        20, 
        200, 
        "use LEFT & RIGHT keys to move the Millenium Moran",
        {
          fontSize: '14px',
        }
      );
      this.add.text(
        20, 
        220, 
        "to evade enemies and collect lost cargo",
        {
          fontSize: '14px',
        }
      );
      this.add.text(
        20, 
        260, 
        "use SPACEBAR to blast oncoming ships,",
        {
          fontSize: '14px',
        }
      );

      this.add.text(
        20, 
        300, 
        "getting hit by enemy ship -> - 100 points",
        {
          fontSize: '14px',
        }
      );
      this.add.text(
        20, 
        320, 
        "hitting enemy -> + 60 points",
        {
          fontSize: '14px',
        }
      );

      const clickButton = this.add.text(
        20, 
        340, 
        'Go to Game', 
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
        this.scene.start("spaceArea"); 
      });  

  }
}
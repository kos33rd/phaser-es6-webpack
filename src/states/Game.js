/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.physics.startSystem(Phaser.Physics.ARCADE)

    this.world.setBounds(0, 0, 1920, 1130)

    this.cursors = this.input.keyboard.createCursorKeys()

    //  A simple background for our game
    this.add.sprite(0, 0, 'background')

    this.cotstructGround()

    this.player = new Player({
      game: this.game,
      x: this.world.left + 10,
      y: this.world.bottom - 120,
      asset: 'player'
    })

    this.game.add.existing(this.player)
    this.camera.follow(this.player)
  }

  cotstructGround () {
    this.game.ground = this.add.group()
    this.game.ground.enableBody = true
    for (var index = 0; index < 39; index += 1) {
      var block = this.game.ground.create(index * 50, this.world.height - 50, 'block')
      block.body.immovable = true
    }
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 32, 32)
    }

    if (!this.player.alive) {
      var style = { font: "65px", fill: "#ff0000", align: "center" };
      var text = this.game.add.text(this.game.width / 2 - 150, this.game.height / 2, "YOU DIED", style);
      text.fixedToCamera = true

      // let text = this.game.add.text(this.world.centerX, this.world.centerY, 'YOU DIED', { font: '32px Arial', fill: '#ffffff', align: 'center' })
      // debugger
    }
  }
}

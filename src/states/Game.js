/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
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

    const cursor = this.game.input.keyboard.createCursorKeys();

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'player',
      cursor: cursor
    })

    this.game.add.existing(this.player)
    this.game.add.existing(this.mushroom)

    this.camera.follow(this.player)
    this.cotstructGround()
  }

  cotstructGround () {
    this.ground = this.add.group()
    this.ground.enableBody = true
    // this.ground.body.immovable = true
    for (var index = 0; index < 39; index += 1) {
      var block = this.ground.create(index * 50, this.world.height - 50, 'block')
      block.body.immovable = true
    }
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}

/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import BlockDamage from '../sprites/BlockDamage'
import Block from '../sprites/Block'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.physics.startSystem(Phaser.Physics.ARCADE)

    this.world.setBounds(0, 0, 1920, 1130)

    this.cursors = this.input.keyboard.createCursorKeys()

    //  A simple background for our game
    this.add.sprite(0, 0, 'background')

    this.game.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'player'
    })

    this.game.add.existing(this.game.player)
    this.camera.follow(this.game.player)

    this.cotstructGround()
  }

  cotstructGround () {
    this.game.ground = this.add.group()
    this.game.ground.enableBody = true

    for (var index = 0; index < 39; index += 1) {
      if (index < 10 || index > 17) {
        this.game.ground.add(new Block({
          game: this.game,
          x: index * 50,
          y: this.world.height - 50,
          asset: 'block'
        }))
      }
    }

    for (var indx = 10; indx < 18; indx += 1) {
      this.game.ground.add(new BlockDamage({
        game: this.game,
        x: indx * 50,
        y: this.world.height - 50
      }))
    }
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.game.player, 32, 32)
    }
  }
}

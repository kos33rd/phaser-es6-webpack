/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.physics.startSystem(Phaser.Physics.ARCADE)

    this.world.setBounds(0, 0, 1920, 1130)

    this.cursors = this.input.keyboard.createCursorKeys()

    //  A simple background for our game
    this.add.sprite(0, 0, 'background')

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
    this.camera.follow(this.mushroom)
    this.cotstructGround()
  }

  update () {
    if (this.cursors.left.isDown) {
      this.mushroom.x -= 4
    } else if (this.cursors.right.isDown) {
      this.mushroom.x += 4
    }

    if (this.cursors.up.isDown) {
      this.mushroom.y -= 4
    } else if (this.cursors.down.isDown) {
      this.mushroom.y += 4
    }

    this.world.wrap(this.mushroom, 0, true)
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

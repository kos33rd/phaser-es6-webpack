import Phaser from 'phaser'
import { controlPlayer } from '../controls/Player'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, cursor }) {
    super(game, x, y, asset)
    this.scale.setTo(0.11, 0.11)
    game.physics.arcade.enable(this)
    this.body.bounce.y = 0
    this.body.gravity.y = 800
    this.body.collideWorldBounds = true
    this.cursor = game.input.keyboard.createCursorKeys()

    this.animations.add('left', [8, 9, 10, 11], 10, true)
    this.animations.add('right', [12, 13, 14, 15], 10, true)

    this.animations.add('jump_left', [9], 10, true)
    this.animations.add('jump_right', [12], 10, true)

    this.maxHealth = 100
    this.health = this.maxHealth

    this.healthbar = this.game.add.sprite(10, 10, 'healthbar')
    this.healthbar.fixedToCamera = true
  }

  update () {
    this.game.world.wrap(this, 0, true)
    const hitPlatform = this.game.physics.arcade.collide(this, this.game.ground)
    controlPlayer(this.cursor, hitPlatform, this)
    this.healthbar.width = (this.health / this.maxHealth) * this.healthbar.texture.width
  }
}

import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y, 'finish')
    game.physics.arcade.enable(this)
    this.anchor.setTo(0)
    this.scale.setTo(0.25, 0.25)
  }

  update () {

  }
}

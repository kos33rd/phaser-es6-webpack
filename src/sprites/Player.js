import Phaser from 'phaser'
import { controlPlayer } from '../controls/Player'


export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset, cursor }) {
    super(game, x, y, asset)
    this.scale.setTo(0.1,0.1);
    game.physics.arcade.enable(this)
    this.body.bounce.y = 0.2
    this.body.gravity.y = 300
    this.body.collideWorldBounds = true
    this.cursor = cursor

    this.animations.add('left', [8, 9, 10, 11], 10, true);
    this.animations.add('right', [12, 13, 14, 15], 10, true);

  }

  update () {
    this.game.world.wrap(this, 0, true)
    controlPlayer(this.cursor, this)
  }
}

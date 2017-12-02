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

    this.animations.add('left', [1, 2, 3], 10, true);
    this.animations.add('right', [5, 6, 7, 8], 10, true);

  }

  update () {
    controlPlayer(this.cursor, this)
  }
}
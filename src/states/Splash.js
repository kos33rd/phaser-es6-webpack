import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    game.load.spritesheet('player', 'assets/images/player.png', 400, 600);
    this.load.image('block', 'assets/images/block-black.svg')
    this.load.image('background', 'assets/images/background-town.jpg')
  }

  create () {
    this.state.start('Game')
  }
}

/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Finish from '../sprites/Finish'
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
      x: this.world.left + 10,
      y: this.world.bottom - 120,
      asset: 'player'
    })

    this.finish = new Finish({
      game: this.game,
      x: this.world.right - 100,
      y: this.world.bottom - 150
    })

    this.camera.follow(this.game.player)
    this.game.add.existing(this.game.player)
    this.game.add.existing(this.finish)
    this.camera.follow(this.game.player)

    this.cotstructGround()
  }

  cotstructGround () {
    this.game.ground = this.add.group()
    this.game.ground.enableBody = true

    for (var index = 0; index < 39; index += 1) {
      if (index < 10 || index > 17) {
        var x = this.game.ground.add(new Block({
          game: this.game,
          x: index * 50,
          y: this.world.height - 50,
          asset: 'block'
        }))
        // var block = this.game.ground.create(index * 50, this.world.height - 50, 'block')
        // block.body.immovable = true
      }
    }

    for (var index = 10; index < 18; index += 1) {
      this.game.ground.add(new BlockDamage({
        game: this.game,
        x: index * 50,
        y: this.world.height - 50
      }))
    }
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.game.player, 32, 32)
    }

    if (this.game.physics.arcade.overlap(this.game.player, this.finish)) {
      const winnerText = this.game.add.text(this.game.width / 2 - 150, this.game.height / 2, "YOU'RE WINNER", { font: "65px Arial", fill: "#ffffff", align: "center" })
      winnerText.fixedToCamera = true
    }

    if (!this.game.player.alive && !this.gameOverText) {
      this.gameOverText = this.game.add.text(this.game.width / 2 - 150, this.game.height / 2, "YOU DIED", { font: "65px", fill: "#ff0000", align: "center" })
      this.gameOverText.fixedToCamera = true
    }
  }
}

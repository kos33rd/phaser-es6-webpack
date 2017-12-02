import Block from './Block'
import Pyrophobia from './deviations/Pyrophobia'

export default class extends Block {
  constructor ({ game, x, y }) {
    super({ game, x, y, asset: 'block-lava2' })
    this.damage = 0.5
    this.body.setSize(50, 20, 0, 30)

    this.animations.add('flowing', [0, 1, 2, 3], 8, true)
    this.animations.play('flowing')
  }

  hitDamage (block, player) {
    if (block.damage > 0) {
      player.damage(block.damage)
      player.addPhobia(Pyrophobia)
    }
  }

  update () {
    this.game.physics.arcade.overlap(this, this.game.player, this.hitDamage)
  }
}

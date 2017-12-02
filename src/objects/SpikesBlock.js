import Block from './Block'

export default class extends Block {
  constructor ({ game, x, y }) {
    super({ game, x, y, asset: 'block-spikes' })
    this.damage = 0.5
    this.body.setSize(50, 20, 0, 20)
  }

  hitDamage (block, player) {
    if (block.damage > 0) {
      player.damage(block.damage)
    }
  }

  update () {
    this.game.physics.arcade.overlap(this, this.game.player, this.hitDamage)
  }
}

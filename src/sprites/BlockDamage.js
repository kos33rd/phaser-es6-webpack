import Block from './Block'

export default class extends Block {
  constructor ({ game, x, y }) {
    super({ game, x, y, asset: 'block-lava2' })
    this.damage = 4

    this.animations.add('flowing', [0, 1, 2, 3], 8, true)
    this.animations.play('flowing')
  }

  update () {

  }
}

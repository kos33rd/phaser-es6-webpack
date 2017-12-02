import FireBlock from '../../objects/FireBlock'
import SpikesBlock from '../../objects/SpikesBlock'
import Block from '../../objects/Block'

const buildTiles = (game, world) => {

  const tiles = []

  for (var index = 0; index < 39; index += 1) {
    if (index < 10 || index > 17) {
      tiles.push(new Block({
        game: game,
        x: index * 50,
        y: world.height - 50,
        asset: 'block'
      }))
    }
  }

  for (var indx = 10; indx < 18; indx += 1) {
    tiles.push(new FireBlock({
      game: game,
      x: indx * 50,
      y: world.height - 50
    }))
  }

  tiles.push(new SpikesBlock({
    game: game,
    x: 12 * 50,
    y: world.height - 150,
    asset: 'block'
  }))


  for (var index = 15; index < 17; index += 1) {
    tiles.push(new Block({
      game: game,
      x: index * 50,
      y: world.height - 250,
      asset: 'block'
    }))
  }

  return tiles
}

export default buildTiles

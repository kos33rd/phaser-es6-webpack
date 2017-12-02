export const controlPlayer = (cursor, hitPlatform, player) => {
  //  Reset the players velocity (movement)
  player.body.velocity.x = 0

  if (cursor.left.isDown) {
    //  Move to the left
    player.body.velocity.x = -150

    if (hitPlatform) {
      player.animations.play('left')
    } else {
      player.animations.play('jump_left')
    }

  } else if (cursor.right.isDown) {
    //  Move to the right
    player.body.velocity.x = 150

    if(hitPlatform) {
      player.animations.play('right')
    } else {
      player.animations.play('jump_right')
    }
  } else {
    //  Stand still
    player.animations.stop()
    player.frame = 0
  }

  //  Allow the player to jump if they are touching the ground.
  if (cursor.up.isDown && player.body.touching.down && hitPlatform) {
    player.body.velocity.y = -350
  }
}

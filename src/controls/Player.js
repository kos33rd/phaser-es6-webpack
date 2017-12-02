const playerBaseRunSpeed = 150
const playerBaseJumpSpeed = 450

export const controlPlayer = (cursor, onPlatform, player) => {

  let runSpeed = playerBaseRunSpeed

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0

  if (cursor.left.isDown) {
    //  Move to the left

    if(cursor.left.shiftKey ) {
      runSpeed *= 5
    }
    player.body.velocity.x = -runSpeed

    if (onPlatform) {
      player.animations.play('left')
    } else {
      player.animations.play('jump_left')
    }

  } else if (cursor.right.isDown) {
    //  Move to the right

    if (cursor.right.shiftKey) {
      runSpeed *= 5
    }
    player.body.velocity.x = runSpeed

    if(onPlatform) {
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
  if (cursor.up.isDown && player.body.touching.down && onPlatform) {
    player.body.velocity.y = -playerBaseJumpSpeed
  }
}

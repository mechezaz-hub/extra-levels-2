scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    150,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`Exsplode`,
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite8, location7) {
    tiles.setWallAt(location7, false)
    tiles.setTileAt(location7, assets.tile`transparency16`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`transparency16`)
    info.changeScoreBy(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite7, location6) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite3, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite6, location5) {
    mySprite.say("Don't Panic! I'm Going To Level2! Toodoo From Little Monkey!", 2000)
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite5, location4) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite4, location3) {
    tiles.setWallAt(location3, false)
    tiles.setTileAt(location3, assets.tile`transparency16`)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.blizzard)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
    game.setGameOverMessage(false, "GAME OVER!")
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Monkey Standing`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)

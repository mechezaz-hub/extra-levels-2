scene.onOverlapTile(SpriteKind.Projectile, assets.tile`
        poison pit
        `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`
        transparency16
        `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    simplified.gravity_jump(mySprite)
    animation.runImageAnimation(mySprite, assets.animation`
        jump
        `, 150, true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
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
    animation.runImageAnimation(projectile, assets.animation`
            Exsplode
            `, 100, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`
            bounce
            `)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`
        bounce
        `, function on_overlap_tile2(sprite8: Sprite, location7: tiles.Location) {
    tiles.setWallAt(location7, false)
    tiles.setTileAt(location7, assets.tile`
        transparency16
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(mySprite, assets.animation`
            walk left
            `, 150, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        orange bauble
        `, function on_overlap_tile3(sprite2: Sprite, location2: tiles.Location) {
    tiles.setTileAt(location2, assets.tile`
        transparency16
        `)
    info.changeScoreBy(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        poison pit
        `, function on_overlap_tile4(sprite7: Sprite, location6: tiles.Location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite3: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(mySprite, assets.animation`
            walk right
            `, 150, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        chest1
        `, function on_overlap_tile5(sprite6: Sprite, location5: tiles.Location) {
    mySprite.say("Don't Panic! I'm Going To Level2! Toodoo From Little Monkey!", 2000)
    scene.setBackgroundImage(assets.image`
        background2
        `)
    tiles.setTilemap(tilemap`
        level2
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        chest2
        `, function on_overlap_tile6(sprite5: Sprite, location4: tiles.Location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`
        skyblock
        `, function on_overlap_tile7(sprite4: Sprite, location3: tiles.Location) {
    tiles.setWallAt(location3, false)
    tiles.setTileAt(location3, assets.tile`
        transparency16
        `)
})
let projectile : Sprite = null
let mySprite : Sprite = null
scene.setBackgroundImage(assets.image`
    background
    `)
tiles.setTilemap(tilemap`
    level1
    `)
mySprite = sprites.create(assets.image`
        Monkey Standing
        `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)

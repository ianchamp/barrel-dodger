controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000204010605020504010101030202010102040102`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight3,sprites.dungeon.floorMixed,sprites.dungeon.floorLight2,sprites.dungeon.floorLight5], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
mySprite.image.flipX()
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(randint(1000, 2000), function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . c c c c c c c c c c c . . 
        . . . c e e c e e e c e e c . . 
        . . . c e e c e e e c e e c . . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . c e e e c e e e c e e e c . 
        . . . c e e c e e e c e e c . . 
        . . . c e e c e e e c e e c . . 
        . . . c c c c c c c c c c c . . 
        `, randint(-150, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})

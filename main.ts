controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    peugeot_508_PSE.setImage(img`
        . . . . . . f f c c f f . . . . 
        . . . . . f f f 7 7 f 7 f . . . 
        . . . . f f f 7 f f 7 f f f . . 
        . . . f f f f f 7 f f f f f f . 
        . . . f f f f 7 f 7 f f f f f . 
        . . . 7 7 f f 7 7 7 7 f f 7 f . 
        . . . f f f f f f f f f f f 7 . 
        . . . f f f f f f f f f f 7 f . 
        . . . 7 7 f f c c c c f f f 7 . 
        . . . 7 7 f c b b b b c f 7 f . 
        . . . 7 7 f b b b b b b f f 7 . 
        . . . f f f f f f f f f f f f . 
        . . . f f d f f 7 7 f f d f f . 
        . . . f f 2 d 7 7 7 7 d 2 f f . 
        . . . f f f f f f f f f f f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    peugeot_508_PSE.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . . f c f 7 7 f f 7 7 f . 
        . . . . f c c f 7 f 7 f 7 f c f 
        . . d f f c c f 7 7 f f 7 7 c c 
        . d f f f c b f f f f f f f f c 
        . f f f f b f f b b b f b b f f 
        . f f f f f f b b b b f b b b f 
        . f f f f f f f f f f f f f f f 
        . f d d f f f 7 7 f f 7 7 f 7 f 
        . d d f f f 7 7 f f 7 7 f 7 7 f 
        . f f f f f 7 f f f 7 f f 7 7 f 
        . f f f f f f f f f f f f f f f 
        . . . f f b f f f f f f f b f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    peugeot_508_PSE.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f 7 7 f 7 7 f c 2 . . . 
        . . f f f 7 f f f 7 f c c 2 . . 
        . f f f f 7 f f 7 7 f c c f f d 
        . f f f f f f f f f f b c f f f 
        . f f f b b f b b b f f b f f f 
        . f f b b b f b b b b f f f f f 
        . f f f f f f f f f f f f f f f 
        . f f f f f 7 f f 7 f 7 f f d d 
        . f f f f 7 7 7 7 7 7 7 f f f d 
        . f f f f 7 f f 7 f 7 f f f f f 
        . f f f f f f f f f f f f f f f 
        . . f f d f f f f f f f d f f . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    peugeot_508_PSE.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f 7 7 7 f 7 . . . . 
        . . . . . f f 7 f 7 7 7 f . . . 
        . . . . . c f f f f f f c . . . 
        . . . . f c f 7 f f f f c f . . 
        . . . f f c 7 f 7 f f f c f f . 
        . . . f 7 c f 7 7 7 7 f c 7 f . 
        . . . 7 7 c f f f f f f c 7 7 . 
        . . . f f c f b b b b f c f f . 
        . . . 7 7 f b c c c c b f 7 7 . 
        . . . f 7 b c c c c c c b 7 f . 
        . . . f f f f f f f f f f f f . 
        . . . f f d f f 7 7 f f d f f . 
        . . . . f d d f 7 7 f d d f f . 
        . . . . f f d f 7 7 f d f f . . 
        . . . . . f f f f f f f f . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    Current_Road += 1
    if (Current_Road == 0) {
        tiles.setCurrentTilemap(tilemap`level0`)
    }
    if (Current_Road == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    if (Current_Road == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
    }
    if (Current_Road == 3) {
        game.gameOver(true)
    }
})
let peugeot_508_PSE: Sprite = null
let Current_Road = 0
Current_Road = 0
peugeot_508_PSE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f 7 7 f 7 7 f c 2 . . . 
    . . f f f 7 f f f 7 f c c 2 . . 
    . f f f f 7 f f 7 7 f c c f f d 
    . f f f f f f f f f f b c f f f 
    . f f f b b f b b b f f b f f f 
    . f f b b b f b b b b f f f f f 
    . f f f f f f f f f f f f f f f 
    . f f f f f 7 f f 7 f 7 f f d d 
    . f f f f 7 7 7 7 7 7 7 f f f d 
    . f f f f 7 f f 7 f 7 f f f f f 
    . f f f f f f f f f f f f f f f 
    . . f f d f f f f f f f d f f . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    tiles.placeOnTile(peugeot_508_PSE, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    tiles.setWallAt(value, false)
}
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    tiles.setWallAt(value, false)
}
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    tiles.setWallAt(value, false)
}
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    tiles.setWallAt(value, false)
}
scene.cameraFollowSprite(peugeot_508_PSE)
controller.moveSprite(peugeot_508_PSE)

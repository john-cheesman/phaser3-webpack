import Player from '../objects/player'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    preload() {}

    create() {
        console.log('game started')

        let config = {
            key: 'engineer_walk_down',
            frames: this.anims.generateFrameNumbers('engineer', {
                start: 0,
                end: 3
            }),
            repeat: -1,
            frameRate: 5
        }

        this.anims.create(config)
        let player = new Player(this, 100, 100, 'engineer', 0)
        this.add.existing(player)
        player.anims.play('engineer_walk_down')
    }
}

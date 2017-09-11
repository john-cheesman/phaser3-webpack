import 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    preload() {}

    create() {
        console.log('game started')
    }
}


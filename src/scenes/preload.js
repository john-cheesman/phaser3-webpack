import 'phaser'

export default class Preload extends Phaser.Scene {
    constructor() {
        super('preload')
    }

    preload() {}

    create() {
        console.log('preload started')
        this.scene.start('game')
    }
}


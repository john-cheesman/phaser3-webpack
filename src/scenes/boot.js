import 'phaser'

export default class Boot extends Phaser.Scene {
    constructor() {
        super('boot')
    }

    preload() {}

    create() {
        console.log('boot started')
        this.scene.start('preload')
    }
}


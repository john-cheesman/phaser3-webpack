import { Scene } from 'phaser'

export default class Boot extends Scene {
    constructor() {
        super('boot')
    }

    preload() {}

    create() {
        console.log('boot started')
        this.scene.start('preload')
    }
}


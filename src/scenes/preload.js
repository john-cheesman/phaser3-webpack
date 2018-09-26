import { Scene } from 'phaser'

export default class Preload extends Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('engineer', '/images/Engineer.png', { frameWidth: 32, frameHeight: 32, endFrame: 16 });
    }

    create() {
        console.log('preload started')
        this.scene.start('game')
    }
}


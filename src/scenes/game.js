import 'phaser'
import Player from '../objects/player'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    preload() {}

    create() {
        console.log('game started')

        let player = new Player(this, 0, 0)
    }
}

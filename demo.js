
import {Phaser} from "phaser.js";

export default function main() {
    let game = new Phaser.Game();

    game.state.add('tank-state', TankState, true);
}

class TankState extends Phaser.State {
    preload() {
        this.load.atlasJSONHash(
            'sprites',
            '/img/sprites.png',
            '/img/sprites.json'
        );
    }

    create() {
        let g = this.add.group();
        g.add(
            this.add.sprite(0, 0, 'sprites', 'body.png')
        );
        g.add(
            this.add.sprite(18, 85, 'sprites', 'turret.png')
        );

    }
}

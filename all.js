"use strict";

System.register("demo", ["phaser.js"], function (_export) {
    var phaser, Phaser, PIXI, p2;

    function main() {
        console.log(Phaser);
        console.log(PIXI);
        console.log(p2);
        console.log(phaser);
    }

    _export("default", main);

    return {
        setters: [function (_phaserJs) {
            phaser = _phaserJs.default;
            Phaser = _phaserJs.Phaser;
            PIXI = _phaserJs.PIXI;
            p2 = _phaserJs.p2;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=all.js.map

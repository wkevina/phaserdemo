

System.config({
    map: {
        'phaser.js': 'libs/phaser/build/phaser.js'
    },
    meta: {
        'phaser.js': {
            format: 'global'
        }
    }
});

window.addEventListener('load', function() {
    console.log('Loading');

    if (window.navigator.standalone == true) {
        $('.hide-fullscreen').addClass('hide');
    }

    System.import('demo').then(function(demo) {
        demo.default();
    });
});

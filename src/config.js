// Basic configurations
let config = {
    type: Phaser.AUTO,
    scene: [loader, playGame],
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 960,
        height: 550
    },
    physics: {
        default: 'arcade'
    }
};

// Initializes game on window load
window.onload = function() {
    game = new Phaser.Game(config);
}
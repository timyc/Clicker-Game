'use strict';
class loader extends Phaser.Scene {   
	constructor() {
        super({key: 'loader'});
    } 
    preload() {
    	this.createProgressbar(this.centerX(), this.centerY());
    	this.load.image('background', 'assets/images/background.png');
    	this.load.image('sidebar', 'assets/images/sidebar.png');
    	this.load.image('actionButton1', 'assets/images/actionButton1.png');
    }
    createProgressbar(x, y) {
        // size & position
        let width = 400;
        let height = 20;
        let xStart = x - width / 2;
        let yStart = y - height / 2;

        // border size
        let borderOffset = 2;

        let borderRect = new Phaser.Geom.Rectangle(
            xStart - borderOffset,
            yStart - borderOffset,
            width + borderOffset * 2,
            height + borderOffset * 2);

        let border = this.add.graphics({
            lineStyle: {
                width: 5,
                color: 0xaaaaaa
            }
        });
        border.strokeRectShape(borderRect);

        let progressbar = this.add.graphics();

        let updateProgressbar = function(percentage)
        {
            progressbar.clear();
            progressbar.fillStyle(0xffffff, 1);
            progressbar.fillRect(xStart, yStart, percentage * width, height);
        };
        this.load.on('progress', updateProgressbar);
        this.load.once('complete', function ()
        {

            this.load.off('progress', updateProgressbar);
            this.scene.start('playGame');

        }, this);
    }
    
    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }
};
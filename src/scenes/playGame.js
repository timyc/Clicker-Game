'use strict';
class playGame extends Phaser.Scene {   
    constructor() {
        super({key: 'playGame'});
    }
    create() {
    	var tCash = 0;
    	var tMultiplier = 1;
    	var cash = 0;
    	this.backgroundImage = this.add.sprite(this.centerX(), this.centerY(), 'background');
    	this.cashText = this.add.text(750, 16, 'Cash: ' + cash, { font: '20pt', fill: '#fff' });
    	this.sidebarImage = this.add.sprite(this.centerX() - 300, this.centerY(), 'sidebar');
    	this.actionB1 = this.add.sprite(this.centerX() - 300, this.centerY()-150, 'actionButton1').setInteractive();
    	this.actionB1.on('pointerdown', function () {
			cash += 1*tMultiplier;
			this.cashText.setText('Cash: ' + cash);
		}, this);
    }
    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }
};
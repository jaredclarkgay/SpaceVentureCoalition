const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#222',
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('ship', 'https://via.placeholder.com/200x100'); // Replace with a real asset
}

function create() {
    this.add.image(400, 300, 'ship');
    const clickText = this.add.text(350, 500, 'Click Me!', { fontSize: '32px', fill: '#fff' });
    clickText.setInteractive();
    clickText.on('pointerdown', () => alert('You clicked!'));
}

function update() {
    // Logic for the game loop
}


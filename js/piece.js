class OPiece {
    constructor() {
        this.width = 2;
        this.height = 2;
        this.posX = 0; // 0 <= posX <= 8
        this.posY = 0; // 0 <= posY <= 18
    }

    moveRight() {
        if (this.posX < 8) {
            this.posX += 2;
        }
    }

    moveLeft() {
        if (this.posX > 0) {
            this.posX -= 2;
        }
    }

    drop() {
        this.posY = 18;
    }

    isAtBottom() {
        return this.posY == 18;
    }
}
class Board { 
    constructor(ctx) {
      this.ctx = ctx;    
      this.grid = this.getEmptyBoard();
    } 

    getEmptyBoard() {
        return Array.from(
          {length: ROWS}, () => Array(COLS).fill(0)
        );
      }

    loadAndDraw() {
        // first draw the images
        for (let i = 0; i < LOGOS.length; i++) {
            // load image
            const img = new Image();
            img.src = LOGOS[i];
            
            // draw image
            // this.ctx.drawImage(img, i * 2 * BLOCK_SIZE, 18 * BLOCK_SIZE, 2 * BLOCK_SIZE, 2 * BLOCK_SIZE);
            img.onload = () => {
                this.ctx.drawImage(img, i * 2, 18, 2, 2);
            };
        }

        // next draw the O block
        playBoard.ctx.fillStyle = 'yellow';
        playBoard.ctx.fillRect(0, 0, 2, 2);
    }
  }
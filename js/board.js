class Board { 
    ctx;
    grid;
    piece;

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
        this.piece = new OPiece();
        this.drawPiece(this.piece);
    }

    drawPiece() {
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillRect(this.piece.posX, this.piece.posY, this.piece.width, this.piece.height);
        // this.grid[piece.posX][piece.posY] = 1;
        // this.grid[piece.posX + 1][0] = 1;
        // this.grid[piece.posX + 1][piece.posY + 1] = 1;
        // this.grid[0][piece.posY + 1] = 1;
    }

    erasePiece() {
        this.ctx.fillStyle = 'rgb(19, 19, 19)';
        this.ctx.fillRect(this.piece.posX, this.piece.posY, this.piece.width, this.piece.height);
    }

  }
const board = document.getElementById('board');
const ctx = board.getContext('2d');

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const playBoard = new Board(ctx);
playBoard.loadAndDraw();

function play() {
    document.getElementById('play').disabled = true;
    // console.table(playBoard.grid);
    document.addEventListener('keypress', (event) => {
        var code = event.code;
        if (code == "Space") {
            playBoard.erasePiece();
            playBoard.piece.drop();
            playBoard.drawPiece();
            // redirect
            index = playBoard.piece.posX / 2;
            window.location = LINKS[index];
        }
    })
    document.addEventListener('keydown', (event) => {
        var code = event.code;
        if (code == "ArrowLeft") {
            playBoard.erasePiece();
            playBoard.piece.moveLeft();
            playBoard.drawPiece();
        } else if (code == "ArrowRight") {
            playBoard.erasePiece();
            playBoard.piece.moveRight();
            playBoard.drawPiece();
        }
    })
  }

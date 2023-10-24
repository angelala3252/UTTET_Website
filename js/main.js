const board = document.getElementById('board');
const ctx = board.getContext('2d');

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

function play() {
    playBoard = new Board(ctx);
    console.table(playBoard.grid);
    playBoard.loadAndDraw();
  }

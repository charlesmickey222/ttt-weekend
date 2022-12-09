/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie;


/*------------------------ Cached Element References ------------------------*/

const boardEl = document.querySelector('.board');

const sqrEls = [];

for (let i =0; i<9; i++){
  sqrEls.push(document.querySelector(`#sq${i}`));
}
const statusMssg = document.querySelector('#status-message');


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init(){
  initBoard();
  turn = -1;
  winner = false;
  tie = false;
  render();
}

function initBoard(){
  board = [null,null,null,null,null,null,null,null,null];
}

function render(){
renderBoard();
renderMessage();
}

function renderBoard(){
  for (let i = 0; i < board.length; i++){
    sqrEls[i].innerText = board[i];
  }
}

function renderMessage(){
  if(winner === false && tie === false){

  }
}
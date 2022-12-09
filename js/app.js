/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie;


/*------------------------ Cached Element References ------------------------*/

const sqrEls = document.querySelector('.board');

const statusMssg = document.querySelector('#status-message');


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init(){
  initBoard();
  turn = -1;
  winner = false;
  tie = false;
  //render();
}

function initBoard(){
  board = [null,null,null,null,null,null,null,null,null];
}

function render(){
  
}
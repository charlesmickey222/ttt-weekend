/*-------------------------------- Constants --------------------------------*/
const winMssg = 'has won!';
const tieMssg = 'Its a tie!'
const activeMssg = 'The game is on!'
const winningCombos = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

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
  winner = {status:false, victor:'player 1'};
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
  if(winner.status === false && tie === false){
    statusMssg.innerText = activeMssg;
  }else if(tie === true){
    statusMssg.innerText = tieMssg;
  }else{
    statusMssg.innerText = `${winner['victor']} ${winMssg}`;
  }
}
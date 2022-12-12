/*-------------------------------- Constants --------------------------------*/
const winMssg = 'has won!';
const tieMssg = 'Its a tie!'
const activeMssg = 'The game is on!'
const winningCombos = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie;
let running = false;
/*------------------------ Cached Element References ------------------------*/
const boardEl = document.querySelector('.board');

const sqrEls = [];

for (let i =0; i<9; i++){sqrEls.push(document.querySelector(`#sq${i}`));}

const statusMssg = document.querySelector('#status-message');

const rstBtn = document.querySelector('#reset-button');
const startBtn = document.querySelector('#start-button');
//const startBtn = document.querySelector('#start-button');
/*----------------------------- Event Listeners -----------------------------*/
sqrEls.forEach(sqr =>{ sqr.addEventListener('click',function(){handleClick(sqr);})})

rstBtn.addEventListener('click', function(){reset();})

boardEl.addEventListener('load', init())
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
  for (let i = 0; i < board.length; i++){board[i] = sqrEls[i].innerText;}
}

function renderMessage(){
  if(winner.status === false && tie === false){
  }else if(tie === true){
    statusMssg.innerText = tieMssg;
  }else if (winner.status === true){
    statusMssg.innerText = `${winner['victor']} ${winMssg}`;
  }
}

function handleClick(evt){
placePiece(evt);
render();
checkForWinner();
checkTie();
render();
}

function placePiece(element){
    if(winner.status === false && element.innerText === ''){
      if (turn === -1){
        element.innerText = 'X';
        statusMssg.innerText = 'now O'
      }
      else if (turn === 1){
        element.innerText = 'O';
        statusMssg.innerText = 'now X'
      }
      switchTurn();
    }else{
      statusMssg.innerText = 'not so fast';
      renderMessage();
    }
}

function switchTurn(){
  if (winner.status === false){
    turn*=-1;
  }
}

function checkTie(){
  if(winner.status === true || board.some(sqr => {return sqr.innerText ==='null'})){tie = false;}
  else if(board.every(sqr =>{return sqr !== ''})){tie = true;}
}

function checkForWinner(){
  winningCombos.forEach(function(arr){
    let temp = [board[arr[0]],board[arr[1]],board[arr[2]]];
    if (temp.every(elm => {return elm === 'X'})||temp.every(elm => {return elm ==='O'})){
      winner.status = true;
      winner.victor = temp[0];
    }
  })
}

function reset(){
  resetBoard();
  init();
}

function resetBoard(){
  sqrEls.forEach(sqr =>{sqr.innerText = '';});
  statusMssg.innerText = '';
  renderBoard();
}
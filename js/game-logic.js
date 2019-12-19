//player one move types
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

//player one value amount
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

//player two move type
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

//player two value
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
     if(!moveOneType || !moveTwoType || !moveThreeType || !moveOneValue || !moveTwoValue || !moveThreeValue) {
         return;
     }

     if (!isValidMoveType(moveOneType) || !isValidMoveType(movetwoType) || !isValidMoveType(moveThreeType)) {
         return;
     }


};

const getRoundWinner = () => {

};
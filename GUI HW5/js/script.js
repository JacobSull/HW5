
/*Jacob Sullivan
Jacob_Sullivan@student.uml.edu
12/20/2022
HW5
script.js

This file serves as the function of the scrabble game. The board and rack are set here, using an associative array
There is a next word function to clear the board, keep the score, and get new letters up to 7
There is a restart function to start over the game, resetting the board, and associative array
JQuery Draggable and Droppable were used here to allow the tiles to move to and from rack and board. 
*/
// This was retrieved from Prof. Heines https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg" } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg" } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "img" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;

//array used for board pieces
var board = [];
board[0] = {"img" : "graphics_data/blank.png"};
board[1] = {"img" : "graphics_data/blank.png"};
board[2] = {"img" : "graphics_data/doubleword.png"};
board[3] = {"img" : "graphics_data/blank.png"};
board[4] = {"img" : "graphics_data/doubleword.png"};
board[5] = {"img" : "graphics_data/blank.png"};
board[6] = {"img" : "graphics_data/blank.png"};

var totalscore = 0; //global var for keeping track of total score

//calculate the score of the given word inside the board
function wordScore() {
    var score = 0;
    var double = 1;
    document.getElementById("currentWord").innerHTML = null;
    var parent = document.getElementById("board"); //get all the children of id board
    var children = parent.children;
    i = 0;
    while (children[i].firstChild != null) { //For each of these, get their first Child.
        var src = children[i].firstChild.src; //Check the first child's source value extracting the letter 
        var letter = src.match("Tile_(.*).jpg"); //regex to get letter
        document.getElementById("currentWord").innerHTML += letter[1];
        var value = ScrabbleTiles[letter[1]].value; //Get the value from ScrabbleTiles["that letter"]
        if(i == 2 || i == 4) //if doublewords, keep track and multiply score at the end
            double *= 2;
        score += value; 
        i++;
        if(i == 7) break; //if the board is filled up
    }
    score *= double;
    document.getElementById("score").innerHTML = score; //change value of current score
}
//to restart the game at any time
function restartGame() {
    totalscore = 0; 
    document.getElementById("totalscore").innerHTML = totalscore; //reset total score
    document.getElementById("score").innerHTML = totalscore; //reset current score
    document.getElementById("currentWord").innerHTML = null; //reset current word
    for(letter in ScrabbleTiles) {
        ScrabbleTiles[letter]["number-remaining"] = ScrabbleTiles[letter]["original-distribution"]; //reset array of scrabble characters
    }
    newTiles(true); //add new tiles to the hand
    resetBoard(); //remove any tiles from the board
}

//to continue the game with a new word
function nextWord() {
    newTiles(false); //add new tiles to the hand
    resetBoard(); //remove any tiles from the board
    score = document.getElementById("score").innerHTML; //add current score to total score
    totalscore += Number(score);
    document.getElementById("totalscore").innerHTML = totalscore;
    document.getElementById("score").innerHTML = 0; //reset current score
    document.getElementById("currentWord").innerHTML = null; //reset current word
}

// function to get a new hand of 7 cards
// takes parameter of reset, which is a boolean value that indicates whether this new hand is due to a new game
function newTiles(reset) {
    var remainingTiles = [];
    var rackTiles = [];
    for(letter in ScrabbleTiles) { //make new array with scrabble deck to account for lost tiles and multiple of the same letter
        for(i = 0; i < ScrabbleTiles[letter]["number-remaining"]; i++) {
            remainingTiles += letter;
        }
    }
    var rack = document.getElementById("rack"); 
    if(reset) { //if a new game occurs
        for(i = 0; i < 7; i++) {
            var rand = Math.floor(Math.random() * remainingTiles.length) + 1; //random number from 1 to 100.
            rackTiles += remainingTiles[rand]; //get a new random tile
            ScrabbleTiles[remainingTiles[rand]]["number-remaining"]--; 
            remainingTiles = remainingTiles.slice(0, rand) + remainingTiles.slice(rand + 1); //lower the total tile deck to account for tiles being now used 
        }
        while(rack.firstChild) //remove all of the rack
            rack.removeChild(rack.firstChild);
    }
    else {
        for(i = 0; i < 7 - $("#rack img").length; i++) { //only add tiles to get up to 7
            var rand = Math.floor(Math.random() * remainingTiles.length) + 1; //random number from 1 to 100.
            rackTiles += remainingTiles[rand]; //get a new random tile
            ScrabbleTiles[remainingTiles[rand]]["number-remaining"]--;
            remainingTiles = remainingTiles.slice(0, rand) + remainingTiles.slice(rand + 1); //lower the total tile deck to account for tiles being now used 
        }
    }
    for(i = 0; i < rackTiles.length; i++) { //add HTML for new rack
        var rackTile = "<img class=\"rackTile\" src=\"" + ScrabbleTiles[rackTiles[i]].img + "\"alt=racktile />"; //use image of the tile
        $('#rack').append(rackTile);
    }
    $(".rackTile").draggable({ //make racktile able to be dragged
    });
}

//function used to clear the board
function resetBoard() {
    var parent = document.getElementById("board");
    var children = parent.children; //get divs inside the board div
    for(i = 0; i < 7; i++) { //remove all tiles of the board
        if(children[i].firstChild != null) //make sure there is a tile to remove
            children[i].removeChild(children[i].firstChild);
    }
}

//creating the board, setting up the board and rack to be droppable
$(document).ready(function() {
    for(i = 0; i < board.length; i++) {
        var boardTile = "<div class=\"boardTile\" style=\"background-image: url(" + board[i].img + ")\" />"; //HTML for board squares
        $('#board').append(boardTile);
    }
    $(".boardTile").droppable({ //allows board tiles to be dropped onto
        drop: function(event, ui) {
            var droppedOn = $(this);
            $(ui.draggable).detach().css({top: 0, left: 0}).appendTo(droppedOn);
            wordScore(); //calculates score once drop is done
        }
    });
    $("#rack").droppable({  //allows rack to be dropped onto
        drop: function(event, ui) {
            var droppedOn = $(this);
            $(ui.draggable).detach().css({top: 0, left: 0}).appendTo(droppedOn);
            wordScore(); //calculates score once drop is done
        }
    });
    restartGame(); //restarts to set all values at 0
});
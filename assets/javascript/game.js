//CRYSTAL COLLECTOR GAME//

//VARIABLES//

var wins = 0;
var losses = 0;
var finalScore = 0;
var maxScore = 0;
var gem0 = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;

//RANDOMIZING THE NUMBER//
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

//GAME START//
$(document).ready(function() {

    maxScore = getRandomNum(19, 120);
    
    $("#scoreMatch").text("Your end score should not exceed: " + maxScore);

    //FUNCTION FOR USER WIN/LOSS//
    function userWin() {
        if (finalScore === maxScore) {
            wins++;
            $("#wins").text("Wins: " + wins);
        } else if (finalScore > maxScore) {
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
    }

    //GEM0 (CLICK EVENT)
    $("#gem0").on("click", function() {
        if (gem0 === 0) {
            gem0 = getRandomNum(1, 12);
        }
        finalScore += gem0;
        $("#score").text("Current score: " + finalScore);
        userWin();
    });

    //GEM1 (CLICK EVENT)
    $("#gem1").on("click", function() {
        if (gem1 === 0) {
            gem1 = getRandomNum(1, 12);
        }
        finalScore += gem1;
        $("#score").text("Current score: " + finalScore);
        userWin();
    });

    //GEM2 (CLICK EVENT)
    $("#gem2").on("click", function() {
        if (gem2 === 0) {
            gem2 = getRandomNum(1, 12);
        }
        finalScore += gem2;
        $("#score").text("Current score: " + finalScore);
        userWin();
    });

    //GEM3 (CLICK EVENT)
    $("#gem3").on("click", function() {
        if (gem3 === 0) {
            gem3 = getRandomNum(1, 12);
        }
        finalScore += gem3;
        $("#score").text("Current score: " + finalScore);
        userWin();
    });


    //RESET FUNCTION//
    function resetGame() {
        finalScore = 0;
        $("#score").text("Current score: " + finalScore);
        maxScore = getRandomNum(19, 120);
        $("#scoreMatch").text("Your end score should not suprass: " + maxScore);
        gem0 = 0;
        gem1 = 0;
        gem2 = 0;
        gem3 = 0;
    }
});

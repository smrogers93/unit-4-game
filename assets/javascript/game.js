$(document).ready(function () {
    var wins = 0
    var losses = 0
    var userScore = 0
    
    var crystalOne = Math.floor((Math.random() * 12) + 1)
    var crystalTwo = Math.floor((Math.random() * 12) + 1)
    var crystalThree = Math.floor((Math.random() * 12) + 1)
    var crystalFour = Math.floor((Math.random() * 12) + 1)
    var targetRandom = Math.floor((Math.random() * 102) + 19)
    
    $(".status-text").append("Wins: " + wins)
    $(".status-text").append(" Losses: " + losses)
    $(".random-number").append(targetRandom)
    $(".score").append(userScore)

    $(".crystal-one").on("click", function() {
        userScore = userScore + crystalOne;
        $(".score").text(userScore);
        if (userScore === targetRandom) {
            wins++;
            targetRandom = Math.floor((Math.random() * 102) + 19);
            userScore = 0;
        }
    })

    $(".crystal-two").on("click", function() {
        userScore = userScore + crystalTwo;
        $(".score").text(userScore);
        if (userScore === targetRandom) {
            wins++;
            $(".status-text").append("Wins: " + wins);
            $(".status-text").append(" Losses: " + losses);
            targetRandom = Math.floor((Math.random() * 102) + 19);
            userScore = 0;
        }
    })

    $(".crystal-three").on("click", function() {
        userScore = userScore + crystalThree;
        $(".score").text(userScore);
        if (userScore === targetRandom) {
            wins++;
            targetRandom = Math.floor((Math.random() * 102) + 19);
            userScore = 0;
        }
    })

    $(".crystal-four").on("click", function() {
        userScore = userScore + crystalFour;
        $(".score").text(userScore);
        if (userScore === targetRandom) {
            wins++;
            targetRandom = Math.floor((Math.random() * 102) + 19);
            userScore = 0;
        }
    })

 






})
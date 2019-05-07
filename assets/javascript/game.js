$(document).ready(function () {
    var wins = 0
    var losses = 0
    var userScore = 0
    var crystalTwo = $(".crystal-two")
    var crystalThree = $(".crystal-three")
    var crystalFour = $(".crystal-four")

    var crystalOne = Math.floor((Math.random() * 12) + 1)
    
    var targetRandom = Math.floor((Math.random() * 102) + 19)
    $(".status-text").append("Wins: " + wins)
    $(".status-text").append(" Losses: " + losses)
    $(".random-number").append(targetRandom)

    $(".score").append(userScore)

    $(".crystal-one").on("click", function() {
        userScore += crystalOne ;lj?  
        $(".score").append(userScore)
    })




})
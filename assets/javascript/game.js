var option = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var maxGuesses = 10;
var computerGuess = option[Math.floor(Math.random()*option.length)];
var guessesSoFar= [];


document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesSoFar.push(userguess);
    // guessSoFar.join


    if (maxGuesses > 1) {
        maxGuesses--; 
    

        console.log(userguess);
    
        
        console.log(computerGuess);



        if (userguess === computerGuess) {
            wins++;
        }

    
    }
    else {
        maxGuesses = 10;
        computerGuess = option[Math.floor(Math.random()*option.length)];
        guessesSoFar= [];
        losses++;
    }
    document.getElementById("wins").innerHTML = "wins:" + wins;

        document.getElementById("losses").innerHTML = "losses:" + losses; 
        
        document.getElementById("guessesLeft").innerHTML = "Guesses Left:" + maxGuesses;

        document.getElementById("guesses").innerHTML = "Your Guesses so far:" + guessesSoFar.join(", ");
}

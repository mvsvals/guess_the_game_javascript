function numberGuessingGame() {
    let play_again = true;

    while (play_again) {
        const endOfRange = parseInt(prompt('Enter the end of the range for the possible numbers: '))
        const randomNumber = Math.floor(Math.random() * endOfRange);

        let guess = null;
        let attempts = 0;
        let score = 0;
        let is_number_even = null;

        while (guess !== randomNumber) {
            guess = parseInt(prompt('Enter your guess:'), 10);
            is_number_even = (randomNumber % 2 == 0)
            attempts++;

            if (guess > randomNumber) {
                console.log("Too high! Try again.");
            } else if (guess < randomNumber) {
                console.log("Too low! Try again.");
                console.log(`Number is even is ${is_number_even}`);
            } else {
                console.log(`Congratulations! You guessed the number in ${attempts} attempts!`);
                score = (endOfRange - attempts) * 10
                console.log(`You score is ${score} points!`);
                break;
            }
            if (is_number_even) {
                console.log('Hint: Number is even');
            }
            else {
                console.log('Hint: Number is odd');
            }
        }

        const new_game_confirmation = prompt('Do you wish to play again? yes/no');
        if (new_game_confirmation === 'no') {
            console.log('Thanks for playing!');
            play_again = false;
        }
    }
}

numberGuessingGame();
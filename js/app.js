'use strict'

alert('Welcome to my About Me guessing game! Please answer the following questions with "yes" or "no (we accept variations such as "Y" or "N" as well).');
var score = 0;

// first question
var qDone = false;
while (qDone === false) {
    var guessAge = prompt('Do you think I\'m older than 30 years old?');
    var lowerCaseGuessAge = guessAge.toLowerCase();
    if (lowerCaseGuessAge === 'yes' || lowerCaseGuessAge === 'y') {
        alert('That is correct! I\'m 31 years old.');
        console.log('Answer is correct. Incrementing score variable.');
        qDone = true;
        score++;
    } else if (lowerCaseGuessAge === 'no' || lowerCaseGuessAge === 'n') {
        alert('That is incorrect! I\'m 31 years old. You are way too kind!');
        console.log('Answer is incorrect! Score remains the same.');
        qDone = true;
    } else {
        alert('That is not a valid input. Please try again.');
        console.log('q1Done remains false; therefore, the while loop will repeat the question');
    } 
}
console.log('Current score: ' + score);

// second question
var qDone = false;
while (qDone === false) {
    var guessWeight = prompt('Do you think I weigh over 200 pounds?');
    var lowerCaseGuessWeight = guessWeight.toLowerCase();
    if (lowerCaseGuessWeight === 'yes' || lowerCaseGuessWeight === 'y') {
        alert('That is correct! I\'m a budding Fatty McFat Fat at slightly over 200 pounds!');
        console.log('Answer is correct. Incrementing score variable.');
        qDone = true;
        score++;
    } else if (lowerCaseGuessWeight === 'no' || lowerCaseGuessWeight === 'n') {
        alert('That is incorrect! You are way too kind. I\'m a budding Fatty McFat Fat at slightly over 200 pounds!');
        console.log('Answer is incorrect! Score remains the same.');
        qDone = true; 
    } else {
        alert('That is not a valid input. Please try again.');
    }
}
console.log('Current score: ' + score);

// third question
var qDone = false;
while (qDone === false) {
    var guessHomeTown = prompt('Do you think I\'m from Seattle?');
    var lowerCaseGuessHomeTown = guessHomeTown.toLowerCase();
    if (lowerCaseGuessHomeTown === 'yes' || lowerCaseGuessHomeTown === 'y') {
        alert('That is incorrect! I\'m from Anchorage, Alaska.');
        console.log('Answer is incorrect! Score remains the same.');
        qDone = true;
    } else if (lowerCaseGuessHomeTown === 'no' || lowerCaseGuessHomeTown === 'n') {
    alert('That is correct! I\'m from Anchorage, Alaska.');
    console.log('Answer is correct. Incrementing score variable.');
    qDone = true;
    score++;
    } else {
        alert('That is not a valid input. Please try again.');
    }
}
console.log('Current score: ' + score);

// fourth question
var qDone = false;
while (qDone === false) {
    var guessIntlTravel = prompt('Do you think I\'ve been to at least 10 countries? ');
    var lowerCaseGuessIntlTravel = guessIntlTravel.toLowerCase();
    if (lowerCaseGuessIntlTravel === 'yes' || lowerCaseGuessIntlTravel === 'y') {
        alert('That is correct! I\'ve been to about 14 countries.');
        console.log('Answer is correct. Incrementing score variable.');
        qDone = true;
        score++;
    } else if (lowerCaseGuessIntlTravel === 'no' || lowerCaseGuessIntlTravel === 'n') {
    alert('That is incorrect! I\'ve been to 14 countries.');
    console.log('Answer is incorrect! Score remains the same.');
    qDone = true;
    } else {
        alert('That is not a valid input. Please try again.');
    }
}
console.log('Current score: ' + score);

// fifth question
var qDone = false;
while (qDone === false) {
    var guessLocalTravel = prompt('Do you think I\'ve been to at least 10 states?');
    var lowerCaseGuessLocalTravel = guessLocalTravel.toLowerCase();
    if (lowerCaseGuessLocalTravel === 'yes' || lowerCaseGuessLocalTravel === 'y') {
        alert('That is incorrect! I\'ve been to 9 states.');
        console.log('Answer is incorrect! Score remains the same.');
        qDone = true;
    } else if (lowerCaseGuessLocalTravel === 'no' || lowerCaseGuessLocalTravel === 'n') {
    alert('That is correct! I\'ve been to 9 states.');
    console.log('Answer is correct. Incrementing score variable.');
    qDone = true;
    score++;
    } else {
        alert('That is not a valid input. Please try again.');
    }
}

alert('Thank you for visiting my page! Your final score: ' + score + '\nGoodbye!');
console.log('Player earned a final score of ' + score + '.' + '\nThis concludes the JavaScript portion.');
'use strict'

alert('Welcome to my About Me guessing game! Please answer the following questions with "yes" or "no (we accept variations such as "Y" or "N" as well).');
var score = 0;

// first question
var q1Done = false;
while (q1Done === false) {
    var guessAge = prompt('Do you think I\'m older than 30 years old?');
    if (guessAge.toLowerCase() === 'yes' || guessAge.toLowerCase() === 'y') {
        alert('That is correct! I\'m 31 years old.');
        console.log('Answer is correct. Incrementing score variable.');
        q1Done = true;
        score++;
    } else if (guessAge.toLowerCase() === 'no' || guessAge.toLowerCase() === 'n') {
        alert('That is incorrect! I\'m 31 years old. You are way too kind!');
        console.log('Answer is incorrect! Score remains the same.');
        q1Done = true;
    } else {
        alert('That is not a valid input. Please try again.');
        console.log('q1Done remains false; therefore, the while loop will repeat the question');
    } 
}
console.log('Current score: ' + score);

// second question
var q2Done = false;
while (q2Done === false) {
    var guessWeight = prompt('Do you think I weigh over 200 pounds?');
    if (guessWeight.toLowerCase() === 'yes' || guessWeight.toLowerCase() === 'y') {
        alert('That is correct! I\'m a budding Fatty McFat Fat at slightly over 200 pounds!');
        console.log('Answer is correct. Incrementing score variable.');
        q2Done = true;
        score++;
    } else if (guessWeight.toLowerCase() === 'no' || guessWeight.toLowerCase() === 'n') {
        alert('That is incorrect! You are way too kind. I\'m a budding Fatty McFat Fat at slightly over 200 pounds!');
        console.log('Answer is incorrect! Score remains the same.');
        q2Done = true; 
    } else {
        alert('That is not a valid input. Please try again.');
    }
}
console.log('Current score: ' + score);

// third question
var q3Done = false;
while (q3Done === false) {
    var guessHomeTown = prompt('Do you think I\'m from Seattle?');
    if (guessHomeTown.toLowerCase() === 'yes' || guessHomeTown.toLowerCase() === 'y') {
        alert('That is incorrect! I\'m from Anchorage, Alaska.');
        console.log('Answer is incorrect! Score remains the same.');
        q3Done = true;
    } else if (guessWeight.toLowerCase() === 'no' || guessHomeTown.toLowerCase() === 'n') {
    alert('That is correct! I\'m from Anchorage, Alaska.');
    console.log('Answer is correct. Incrementing score variable.');
    q3Done = true;
    score++;
    } else {
        alert('That is not a valid input. Please try again.');
    }
}
console.log('Current score: ' + score);

// fourth question
var q4Done = false;
while (q4Done === false) {
    var guessHomeTown = prompt('Do you think I\'ve been to at least 10 countries? ');
    if (guessHomeTown.toLowerCase() === 'yes' || guessHomeTown.toLowerCase() === 'y') {
        alert('That is correct! I\'ve been to about 14 countries.');
        console.log('Answer is correct. Incrementing score variable.');
        q4Done = true;
        score++;
    } else if (guessWeight.toLowerCase() === 'no' || guessHomeTown.toLowerCase() === 'n') {
    alert('That is incorrect! I\'ve been to 14 countries.');
    console.log('Answer is incorrect! Score remains the same.');
    q4Done = true;
    } else {
        alert('That is not a valid input. Please try again.');
    }
}
console.log('Current score: ' + score);

// fifth question
var q5Done = false;
while (q5Done === false) {
    var guessHomeTown = prompt('Do you think I\'ve been to at least 10 states?');
    if (guessHomeTown.toLowerCase() === 'yes' || guessHomeTown.toLowerCase() === 'y') {
        alert('That is incorrect! I\'ve been to 9 states.');
        console.log('Answer is incorrect! Score remains the same.');
        q5Done = true;
    } else if (guessWeight.toLowerCase() === 'no' || guessHomeTown.toLowerCase() === 'n') {
    alert('That is correct! I\'ve been to 9 states.');
    console.log('Answer is correct. Incrementing score variable.');
    q5Done = true;
    score++;
    } else {
        alert('That is not a valid input. Please try again.');
    }
}

alert('Thank you for visiting my page! Your final score: ' + score + '\nGoodbye!');
console.log('Player earned a final score of ' + score + '.' + '\nThis concludes the JavaScript portion.');
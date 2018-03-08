'use strict'

alert('Welcome to my About Me guessing game! Please answer the following questions with "yes" or "no (we accept variations such as "Y" or "N" as well).');
var score = 0;

// first question
var qDone = false;
function firstQuestion() {
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
}

firstQuestion();

// second question
function secondQuestion() {
qDone = false;
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
}

secondQuestion();


// third question
function thirdQuestion() {
    qDone = false;
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
}

thirdQuestion();

// fourth question
function fourthQuestion() {
    qDone = false;
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
}

fourthQuestion();

// fifth question
function fifthQuestion() {
    qDone = false;
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
console.log('Current score: ' + score);
}

fifthQuestion();


// sixth question
function sixthQuestion() {
    qDone = false;
for (var i = 0; i < 4 && (qDone === false); i++) {
    var guessTotalCousins = prompt('How many of my cousins do you think live in Washington state currently (enter an integer number only: i.e. 0, 100) You have ' + (4 - i) + ' attempt(s) remaining. for this question.');
    while (isNaN(guessTotalCousins)) {
        guessTotalCousins = prompt('Invalid input. We will give you a chance to input an integer before docking attempts.\nHow many of my cousins do you think live in Washington state currently (enter an integer number only: i.e. 0, 100) You have ' + (4 - i) + ' attempt(s) remaining. for this question.');
    }
    var intGuessTotalCousins = parseInt(guessTotalCousins);
    console.log('User input: ' + guessTotalCousins);
    if (intGuessTotalCousins < 0) {
        alert('Sorry, but that\'s not how the world works. You can\'t have less than 0 cousins!');
        console.log('Answer is incorrect. Loop will continue.');
    } else if (intGuessTotalCousins === 1) {
        alert('That is incorrect! Your guess is too low.');
        console.log('Answer is incorrect. Loop will continue.');
    } else if (intGuessTotalCousins > 2) {
        alert('That is incorrect! Your guess is too high.');
        console.log('Answer is incorrect. Loop will continue.');
    } else if (intGuessTotalCousins === 2) {
        alert('That is correct! I have 2 (two) cousins living in Washington.');
        console.log('Answer is correct. Incrementing score variable and exit loop.');
        qDone = true;
        console.log(qDone);
        score++;
    }
}
console.log('Current score: ' + score);
}

sixthQuestion();


// seventh question
function seventhQuestion() {
    qDone = false;
var visitedStates = ["Oregon", "California", "Nevada", "New York", "South Carolina", "Florida", "Hawaii"];

/* Creating a new array and then turning each element to lower case. The lower case names are then pushed into the array. See README for code source */
var lowerCaseVisitedStates = [];
for (i = 0; i < visitedStates.length; i++) {
    lowerCaseVisitedStates.push(visitedStates[i].toLowerCase());
}
console.log(lowerCaseVisitedStates);

for (var i = 0; i < 6 && (qDone === false); i++) {
    var guessVisitedState = prompt('Can you guess a state that I have lived in besides Washington and Alaska? You have ' + (6 - i) + ' attempt(s) remaining for this question.');
    var lowerCaseGuessVisitedState = guessVisitedState.toLowerCase();
    console.log(lowerCaseGuessVisitedState);
    var guessInt = lowerCaseVisitedStates.indexOf(lowerCaseGuessVisitedState);
    console.log(guessInt);
    if (guessInt === -1) {
        alert('That was incorrect. Please try again!"');
    }
    else if (guessInt > -1) {
        alert('That was correct! Possible answers were the following: ' + visitedStates.join(', ') + '.');
        qDone = true;
        score++;
    }
}
console.log(score);
}

seventhQuestion();


// total
alert('Thank you for visiting my page! Your final score: ' + score + '\nGoodbye!');
console.log('Player earned a final score of ' + score + ' out of 7.' + '\nThis concludes the JavaScript portion.');
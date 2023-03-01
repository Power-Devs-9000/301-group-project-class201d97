'use strict';

//********** GLOBAL VARIABLES*/
let questionListKeys = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let questionDisplay = document.createElement('h2');
let startBtn = document.getElementById('startGame');
let userName = document.getElementById('user-information');
let questionBox = document.getElementById('question-box');
let answers = document.getElementById('solution-container');
let score = 0;
let questionIndex = 0;

let guestUser = new User('Ryan Eastman');


// !! Stretch Goals
// let attempts = 1;
// let randomQuestion = Math.floor(Math.random() * questionListKeys.length);
//********** CONSTRUCTOR FUNCTION(S) */

function User(name) {
  this.name = name;
  this.score = 0;
}

storeData(guestUser);


//********** HELPER FUNCTIONS*/

function startGame() {
  questionDisplay.id = 'questionDisplay';
  questionBox.appendChild(questionDisplay);
  renderQuestion();

  document.getElementById('intro').style.visibility = 'hidden';
}

function renderQuestion() {
  questionDisplay.textContent = questionList[questionListKeys[questionIndex]].question;
  renderAnswers();
}
function renderAnswers() {
  for (let i = 0; i < questionList[questionListKeys[questionIndex]].questionChoices.length; i++) {
    let answerChoices = document.createElement('div');
    answerChoices.id = 'answerChoices';
    answerChoices.textContent = questionList[questionListKeys[questionIndex]].questionChoices[i]; //
    answers.appendChild(answerChoices);

  }

}

//******* PROTOTYPE */



//*** EVENT HANDLER*** */

function handleStartGame() {
  startGame();
}
//********** LOCAL STORAGE STARTS HERE **********
//TODO: Convert data to a string and store it in local storage

function storeData(User) {
  //if (attempts === 0) {
  let stringifiedUsers = JSON.stringify(User);
  //console.log('User stringified >>>', stringifiedUsers);

  //TODO: Set stringified user name to local storage
  localStorage.setItem('User', stringifiedUsers);
}
// TODO: If there is anything in LS, return that data
function readData() { // What data is coming to us, what data can we manipulate
  // if (retrievedUsers) {
  //   for (let i = 0; i < retrievedUsers.length; i++) {
  //     let reconstructedUsers = new User(parsedUsers[i].name);
  //     reconstructedUsers.score = parsedUsers[i].score;
  //     User.push(reconstructedUsers);
  //   }
  // }
  let rawData = localStorage.getItem('User');
  console.log(rawData);

  let parsedData = JSON.parse(rawData);
  console.log(parsedData);

  return parsedData;
}
readData();

// function handleShowScore() {
//   if attempts === 0) {
//     scoreBtn.removeEventListener('click', handleShowScore);
//     renderSomething();
//   }
// }

//TODO: Retrieve the stringified user names from local storage
// let retrievedUsers = localStorage.getItem('playerArray'); // this is being done in my functions
// console.log('Retrieved User Name >>>', retrievedUsers);

// //TODO: Convert stringifiedUsers back to usable code
// let parsedUsers = JSON.parse(retrievedUsers);
// console.log('Parsed User Names >>>', parsedUsers);

//********** REBUILD W/CONSTRUCTOR FUNCTION **********

// *** EVENT HANDLER*** */
// TODO: Create function to have an on click effect attached to div elements within section

function clickHandler(event) {
  console.log(event.target.textContent);
  if (questionIndex === 0 && event.target.textContent === questionList.one.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 0 && event.target.textContent !== questionList.one.correct) {
    alert('Sorry, that was incorrect');
  }

  if (questionIndex === 1 && event.target.textContent === questionList.two.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 1 && event.target.textContent !== questionList.two.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 2 && event.target.textContent === questionList.three.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 2 && event.target.textContent !== questionList.three.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 3 && event.target.textContent === questionList.four.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 3 && event.target.textContent !== questionList.four.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 4 && event.target.textContent === questionList.five.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 4 && event.target.textContent !== questionList.five.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 5 && event.target.textContent === questionList.six.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 5 && event.target.textContent !== questionList.six.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 6 && event.target.textContent === questionList.seven.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 6 && event.target.textContent !== questionList.seven.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 7 && event.target.textContent === questionList.eight.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 7 && event.target.textContent !== questionList.eight.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 8 && event.target.textContent === questionList.nine.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 8 && event.target.textContent !== questionList.nine.correct) {
    alert('Sorry, that was incorrect!');
  }

  if (questionIndex === 9 && event.target.textContent === questionList.ten.correct) {
    alert('That was CORRECT!');
    score++;
    console.log(`User score is ${score}`);
  } else if (questionIndex === 9 && event.target.textContent !== questionList.ten.correct) {
    alert('Sorry, that was incorrect!');
  }


  if (questionIndex < 10) {
    questionIndex++;
  }

  if (questionIndex >= 10) {
    document.querySelectorAll('#answerChoices').forEach(element => element.remove());
    let gameOver = document.createElement('h1');
    gameOver.textContent = 'Thank you for playing our game, please enter your name!';
    answers.appendChild(gameOver);
    userName.style.visibility = 'visible';
    questionDisplay.style.visibility = 'hidden';
  }
  document.querySelectorAll('#answerChoices').forEach(element => element.remove()); // audrey told me to do it 2/28/23 @ 11:55
  renderQuestion();
}

// ****** FORM HANDLING */
// function handleFormSubmit(event) {
//   event.preventDefault();
//   let userName = event.target.userName.value;
//   console.log('user name submission working.');
// }



// ********** EXECUTABLE CODE */
//userName.addEventListener('submit', handleFormSubmit);
startBtn.addEventListener('click', handleStartGame);
answers.addEventListener('click', clickHandler);
userName.style.visibility = 'hidden'; // !! HIDE FORM AT START OF GAME, REAPPEAR AT COMPLETION


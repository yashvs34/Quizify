let readline = require("readline-sync");
let userName = readline.question("Enter your name: ");
let score = 0;

function checkAnswer(input, correctAnswer) {
  if (input === correctAnswer) {
    console.log("Correct😎");
    score++;
  } else {
    console.log("Incorrect");
  }
}

function showQuestionsAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1}. ${database.data[i].question}`);
    for (op in database.data[i].options) {
      console.log(`${[op]}: ${database.data[i].options[op]}`);
    }
    let input = readline.question("Enter your answer:");
    checkAnswer(input, database.data[i].correctAnswer);
  }
}

function showScore(leaderBoard, username, score) {
  leaderBoard.data.push({ [userName]: score });
  console.log(leaderBoard);
}

let database = {
  data: [
    {
      question:
        "let a = {}; let b = {} . What will be output of console.log(a==b) and console.log(a===b)?",
      options: {
        a: "False False",
        b: "False True",
        c: "True False",
        d: "True True",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign() method creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Reference Copy",
        d: "None of these",
      },
      correctAnswer: "b",
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

let leaderBoard = {
  data: [
    {
      Ashish: 3,
    },
    {
      Dipesh: 1,
    },
    {
      Arpit: 2,
    },
  ],
};

showQuestionsAndOptions(database);
showScore(leaderBoard, userName, score);

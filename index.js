var readlineSync = require("readline-sync");
let score = 0;
let userName = readlineSync.question("What's your name? ");
console.log("Welcome " + userName + " to Do you know Anshu?");

//Play Function
function play(question, answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Correct");
    score = score+1;
  }
  else{
    console.log("Wrong");
  }

  console.log("current score : ", score);
}

//Array of Objects
let questions = [
  {
  question: "Where does Anshu live? ",
  answer: "jammu"
  },
  {
  question: "What's her favourite color? ",
  answer: "cyan"
  }, 
  {
  question: "How many siblings does she have? ",
  answer: "2"
  },
  {
  question: "What's her birthday date? ",
  answer: "20"
  },
  {
    question: "Which is her favourite place? ",
    answer: "jaipur" 
    }
];

//Loop
for(i=0; i<questions.length; i++){
  var recentQuestion = questions[i];
  play(recentQuestion.question, recentQuestion.answer)
}

console.log("Great! Your final score is: ", score)

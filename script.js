const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let score=0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    score=0
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if(correct) {score++; console.log(score)}
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the name of SpongeBob\'s pet snail?',
        answers: [
          { text: 'Gary', correct: true },
          { text: 'Larry', correct: false },
          { text: 'Barry', correct: false },
          { text: 'Jerry', correct: false }
        ]
      },
      {
        question: 'Where does SpongeBob work?',
        answers: [
          { text: 'Krusty Krab', correct: true },
          { text: 'Chum Bucket', correct: false },
          { text: 'Sandy\'s Treedome', correct: false },
          { text: 'Goo Lagoon', correct: false }
        ]
      },
      {
        question: 'What instrument does Squidward play?',
        answers: [
          { text: 'Clarinet', correct: true },
          { text: 'Trumpet', correct: false },
          { text: 'Guitar', correct: false },
          { text: 'Flute', correct: false }
        ]
      },
      {
        question: 'What is the name of the underwater city where SpongeBob lives?',
        answers: [
          { text: 'Bikini Bottom', correct: true },
          { text: 'Coral City', correct: false },
          { text: 'Seaweed Town', correct: false },
          { text: 'Sandy Shoals', correct: false }
        ]
      },
      {
        question: 'What is the secret formula for the Krabby Patty?',
        answers: [
          { text: 'Nobody knows', correct: false },
          { text: 'Love', correct: true },
          { text: 'Seaweed', correct: false },
          { text: 'Plankton', correct: false }
        ]
      },
      {
        question: 'What is the name of the Krusty Krab\'s rival restaurant?',
        answers: [
          { text: 'Chum Bucket', correct: true },
          { text: 'Crabby Shack', correct: false },
          { text: 'Fishy Fries', correct: false },
          { text: 'Salty Seagull', correct: false }
        ]
      },
      {
        question: 'What does Patrick do for a living?',
        answers: [
          { text: 'Fry Cook', correct: false },
          { text: 'Artist', correct: false },
          { text: 'Rock Collector', correct: true },
          { text: 'Boat Driver', correct: false }
        ]
      },
      {
        question: 'What is the name of SpongeBob\'s teacher at boating school?',
        answers: [
          { text: 'Mrs. Puff', correct: true },
          { text: 'Mrs. Krabappel', correct: false },
          { text: 'Miss Finster', correct: false },
          { text: 'Ms. Frizzle', correct: false }
        ]
      },
      {
        question: 'What is the name of Plankton\'s computer wife?',
        answers: [
          { text: 'Karen', correct: true },
          { text: 'Susan', correct: false },
          { text: 'Linda', correct: false },
          { text: 'Pamela', correct: false }
        ]
      },
      {
        question: 'What is the name of the tough, squirrel scientist who lives underwater in a treedome?',
        answers: [
          { text: 'Sandy Cheeks', correct: true },
          { text: 'Samantha Squirrel', correct: false },
          { text: 'Suzie Nuts', correct: false },
          { text: 'Sarah Acorns', correct: false }
        ]
      },
      {
        question: 'What is the name of the restaurant that SpongeBob and Mr. Krabs open to sell pizza?',
        answers: [
          { text: 'Pizza Castle', correct: false },
          { text: 'Pizza Pete\'s', correct: false },
          { text: 'The Krusty Krab Pizza', correct: true },
          { text: 'SpongeBob\'s Pizza Emporium', correct: false }
        ]
      },
      {
        question: 'What is the name of Squidward\'s rival who is an arrogant octopus?',
        answers: [
          { text: 'Octo Thunder', correct: false },
          { text: 'Octavius Rex', correct: false },
          { text: 'Squilliam Fancyson', correct: true },
          { text: 'Squidly Diddly', correct: false }
        ]
      },
      {
        question: 'What is the famous catchphrase SpongeBob uses at the Krusty Krab?',
        answers: [
          { text: 'I\'m ready!', correct: false },
          { text: 'Aye aye, Captain!', correct: false },
          { text: 'No, this is Patrick!', correct: false },
          { text: 'Is mayonnaise an instrument?', correct: true }
        ]
      },
      {
        question: 'What is the name of the episode where SpongeBob and Patrick go on a camping trip?',
        answers: [
          { text: 'Nature Madness', correct: false },
          { text: 'Campfire Capers', correct: false },
          { text: 'The Great Outdoors', correct: false },
          { text: 'The Camping Episode', correct: true }
        ]
      },
      {
        question: 'What instrument does Squidward play in the episode "Band Geeks"?',
        answers: [
          { text: 'Flute', correct: false },
          { text: 'Tuba', correct: false },
          { text: 'Bagpipes', correct: true },
          { text: 'Accordion', correct: false }
        ]
      }
]
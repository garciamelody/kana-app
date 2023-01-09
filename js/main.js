const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const instructions = document.getElementById('description')
const qContainer = document.getElementById('questionContainer')
const questionsElement = document.getElementById('question')
const answerElement = document.getElementById('answerBtns')
const progressContainer = document.getElementById('progressContainer')
const progressText = document.querySelector('.progressText')
const progressBarFull = document.querySelector('.progressBarFull')

let shuffledQs, currentQIndex

const totalQuestions = 46
let questionCounter = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQIndex++
    setNextQuestion()
})

function startGame() {
    progressContainer.classList.remove('hide')
    questionCounter = 0
    startButton.classList.add('hide')
    instructions.classList.add('hide')
    shuffledQs = questions.sort(() => Math.random() - .5)
    currentQIndex = 0
    qContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQs[currentQIndex])
}

function showQuestion(question) {
    progressText.innerText = `Question ${questionCounter} of ${totalQuestions}`
    questionsElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerElement.appendChild(button)
    });
}

function resetState() {
    questionCounter ++
    nextButton.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQs.length > currentQIndex + 1){
        nextButton.classList.remove('hide')
        progressBarFull.style.width = `${(questionCounter/totalQuestions) * 100}%`
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        progressBarFull.style.width = `${(questionCounter/totalQuestions) * 100}%`
        startButton.addEventListener('click',() => {
          progressBarFull.style.width = '0%' 
        }) 
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'あ',
        answers: [
          { text: 'ア', correct: true },
          { text: 'ロ', correct: false },
          { text: 'ワ', correct: false },
          { text: 'オ', correct: false }
        ]
      },
      {
        question: 'い',
        answers: [
            { text: 'ソ', correct: false },
            { text: 'ノ', correct: false },
            { text: 'イ', correct: true },
            { text: 'エ', correct: false }
        ]
      },
      {
        question: 'う',
        answers: [
            { text: 'シ', correct: false },
            { text: 'ニ', correct: false },
            { text: 'ウ', correct: true },
            { text: 'ク', correct: false }
        ]
      },
      {
        question: 'え',
        answers: [
            { text: 'エ', correct: true },
            { text: 'セ', correct: false },
            { text: 'キ', correct: false },
            { text: 'ミ', correct: false }
        ]
      },
      {
        question: 'お',
        answers: [
            { text: 'キ', correct: false },
            { text: 'ヘ', correct: false },
            { text: 'コ', correct: false },
            { text: 'オ', correct: true }
        ]
      },
      {
        question: 'か',
        answers: [
            { text: 'オ', correct: false },
            { text: '力', correct: true },
            { text: 'ケ', correct: false },
            { text: 'ト', correct: false }
        ]
      },
      {
        question: 'き',
        answers: [
            { text: 'ケ', correct: false },
            { text: 'ナ', correct: false },
            { text: 'キ', correct: true },
            { text: 'メ', correct: false }
        ]
      },
      {
        question: 'く',
        answers: [
            { text: 'ヌ', correct: false },
            { text: 'ヘ', correct: false },
            { text: 'コ', correct: false },
            { text: 'ク', correct: true }
        ]
      },
      {
        question: 'け',
        answers: [
            { text: 'ケ', correct: true },
            { text: 'サ', correct: false },
            { text: 'カ', correct: false },
            { text: 'ク', correct: false }
        ]
      },
      {
        question: 'こ',
        answers: [
            { text: 'チ', correct: false },
            { text: 'ユ', correct: false },
            { text: 'コ', correct: true },
            { text: 'ロ', correct: false }
        ]
      },
      {
        question: 'さ',
        answers: [
            { text: 'ス', correct: false },
            { text: 'サ', correct: true },
            { text: 'イ', correct: false },
            { text: 'モ', correct: false }
        ]
      },
      {
        question: 'し',
        answers: [
            { text: 'ソ', correct: false },
            { text: 'ツ', correct: false },
            { text: 'シ', correct: true },
            { text: 'ン', correct: false }
        ]
      },
      {
        question: 'す',
        answers: [
            { text: 'ス', correct: true },
            { text: 'フ', correct: false },
            { text: 'ラ', correct: false },
            { text: 'ヒ', correct: false }
        ]
      },
      {
        question: 'せ',
        answers: [
            { text: 'サ', correct: false },
            { text: 'ネ', correct: false },
            { text: 'セ', correct: true },
            { text: 'ス', correct: false }
        ]
      },
      {
        question: 'そ',
        answers: [
            { text: 'ム', correct: false },
            { text: 'ン', correct: false },
            { text: 'セ', correct: false },
            { text: 'ソ', correct: true }
        ]
      },
      {
        question: 'た',
        answers: [
            { text: 'ヌ', correct: false },
            { text: 'タ', correct: true },
            { text: 'マ', correct: false },
            { text: 'ム', correct: false }
        ]
      },
      {
        question: 'ち',
        answers: [
            { text: 'ナ', correct: false },
            { text: 'モ', correct: false },
            { text: 'チ', correct: true },
            { text: 'テ', correct: false }
        ]
      },
      {
        question: 'つ',
        answers: [
            { text: 'ソ', correct: false },
            { text: 'ツ', correct: true },
            { text: 'コ', correct: false },
            { text: 'シ', correct: false }
        ]
      },
      {
        question: 'て',
        answers: [
          { text: 'キ', correct: false },
          { text: 'チ', correct: false },
          { text: 'テ', correct: true },
          { text: 'モ', correct: false }
        ]
      },
      {
        question: 'と',
        answers: [
          { text: 'ト', correct: true },
          { text: 'エ', correct: false },
          { text: 'キ', correct: false },
          { text: 'モ', correct: false }
        ]
      },
      {
        question: 'な',
        answers: [
          { text: 'メ', correct: false },
          { text: 'キ', correct: false },
          { text: 'ニ', correct: false },
          { text: 'ナ', correct: true }
        ]
      },
      {
        question: 'に',
        answers: [
          { text: 'メ', correct: false },
          { text: 'エ', correct: false },
          { text: 'ニ', correct: true },
          { text: 'ミ', correct: false }
        ]
      },
      {
        question: 'ぬ',
        answers: [
          { text: 'タ', correct: false },
          { text: 'ヌ', correct: true },
          { text: 'ヒ', correct: false },
          { text: 'ワ', correct: false }
        ]
      },
      {
        question: 'ね',
        answers: [
          { text: 'ネ', correct: true },
          { text: 'ス', correct: false },
          { text: 'ク', correct: false },
          { text: 'セ', correct: false }
        ]
      },
      {
        question: 'の',
        answers: [
          { text: 'ハ', correct: false },
          { text: 'ロ', correct: false },
          { text: 'ノ', correct: true },
          { text: 'コ', correct: false }
        ]
      },
      {
        question: 'は',
        answers: [
          { text: 'ハ', correct: true },
          { text: 'ロ', correct: false },
          { text: 'ヘ', correct: false },
          { text: 'マ', correct: false }
        ]
      },
      {
        question: 'ひ',
        answers: [
          { text: 'ウ', correct: false },
          { text: 'ケ', correct: false },
          { text: 'フ', correct: false },
          { text: 'ヒ', correct: true }
        ]
      },
      {
        question: 'ふ',
        answers: [
          { text: 'ウ', correct: false },
          { text: 'ワ', correct: false },
          { text: 'フ', correct: true },
          { text: 'ヒ', correct: false }
        ]
      },
      {
        question: 'へ',
        answers: [
          { text: 'ハ', correct: false },
          { text: 'ヘ', correct: true },
          { text: 'エ', correct: false },
          { text: 'ヒ', correct: false }
        ]
      },
      {
        question: 'ほ',
        answers: [
          { text: 'イ', correct: false },
          { text: 'チ', correct: false },
          { text: 'サ', correct: false },
          { text: 'ホ', correct: true }
        ]
      },
      {
        question: 'ま',
        answers: [
          { text: 'ム', correct: false },
          { text: 'レ', correct: false },
          { text: 'マ', correct: true },
          { text: 'ケ', correct: false }
        ]
      },
      {
        question: 'み',
        answers: [
          { text: 'ミ', correct: true },
          { text: 'ユ', correct: false },
          { text: 'ョ', correct: false },
          { text: 'エ', correct: false }
        ]
      },
      {
        question: 'む',
        answers: [
          { text: 'ム', correct: true },
          { text: 'ユ', correct: false },
          { text: 'エ', correct: false },
          { text: 'マ', correct: false }
        ]
      },
      {
        question: 'め',
        answers: [
          { text: 'ト', correct: false },
          { text: 'メ', correct: true },
          { text: 'エ', correct: false },
          { text: 'ナ', correct: false }
        ]
      },
      {
        question: 'も',
        answers: [
          { text: 'ホ', correct: false },
          { text: 'モ', correct: true },
          { text: 'ヌ', correct: false },
          { text: 'サ', correct: false }
        ]
      },
      {
        question: 'や',
        answers: [
          { text: 'レ', correct: false },
          { text: 'ソ', correct: false },
          { text: 'ヤ', correct: true },
          { text: 'イ', correct: false }
        ]
      },
      {
        question: 'ゆ',
        answers: [
          { text: 'ユ', correct: true },
          { text: 'ニ', correct: false },
          { text: 'コ', correct: false },
          { text: 'ヨ', correct: false }
        ]
      },
      {
        question: 'よ',
        answers: [
          { text: 'ロ', correct: false },
          { text: 'ミ', correct: false },
          { text: 'ヤ', correct: false },
          { text: 'ヨ', correct: true }
        ]
      },
      {
        question: 'ら',
        answers: [
          { text: 'ラ', correct: true },
          { text: 'レ', correct: false },
          { text: 'フ', correct: false },
          { text: 'ヒ', correct: false }
        ]
      },
      {
        question: 'り',
        answers: [
          { text: 'ソ', correct: false },
          { text: 'リ', correct: true },
          { text: 'ル', correct: false },
          { text: 'ン', correct: false }
        ]
      },
      {
        question: 'る',
        answers: [
          { text: 'レ', correct: false },
          { text: 'ス', correct: false },
          { text: 'ル', correct: true },
          { text: 'テ', correct: false }
        ]
      },
      {
        question: 'れ',
        answers: [
          { text: 'ス', correct: false },
          { text: 'フ', correct: false },
          { text: 'ワ', correct: false },
          { text: 'レ', correct: true }
        ]
      },
      {
        question: 'ろ',
        answers: [
          { text: 'ユ', correct: false },
          { text: 'ロ', correct: true },
          { text: 'コ', correct: false },
          { text: 'ニ', correct: false }
        ]
      },
      {
        question: 'わ',
        answers: [
          { text: 'ワ', correct: true },
          { text: 'ウ', correct: false },
          { text: 'ス', correct: false },
          { text: 'ヲ', correct: false }
        ]
      },
      {
        question: 'を',
        answers: [
          { text: 'ネ', correct: false },
          { text: 'フ', correct: false },
          { text: 'ヲ', correct: true },
          { text: 'ワ', correct: false }
        ]
      },
      {
        question: 'ん',
        answers: [
          { text: 'ソ', correct: false },
          { text: 'ケ', correct: false },
          { text: 'ツ', correct: false },
          { text: 'ン', correct: true }
        ]
      }
    ]

const startButton = document.getElementById("start-Btn")
const nextButton = document.getElementById("next-Btn")
const questionsContainerElement = document.getElementById("questions-container")

const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex



startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    console.log('Start')
    monkeypoop= 20;
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainerElement.classList.remove("hide")
    setNextQuestion()
    
    
    
    
  
}

function setNextQuestion(){
    resetState()
    
    showQuestion (shuffledQuestions[currentQuestionIndex]) 
    console.log("setquestion")

}


function showQuestion(question){
   
    questionElement.innerText= question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")

        if (answer.correct){
            button.dataset.correct= answer.correct
        }

        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
        console.log("showquestion")
    });    
    
}


function resetState() {
    nextButton.classList.add("hide")
    clearStatusClass(document.body)
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)

    }
    console.log("reset")
}



function selectAnswer(e){
    const selecetedButton = e.target
    const correct= selecetedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    
     } else {
         startButton.innerText = " Restart"
         startButton.classList.remove("hide")
     }
    
    nextButton.classList.remove("hide")
    console.log("answerEvents")
    }















function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")

    }
    console.log("statusClass")
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")

}



const questions = [
    {
        question: "Who is the best team in the NFC East",
        answers: [

            { text: " Eagles", correct: true},
            { text: " Giants", correct: false},
            { text: " Redskins", correct: false},
            { text: " Cowboys", correct: false},
        ]

        
    },
    
{
    question: "Which QB CAN'T throw past 30 yards?",
        answers: [

            { text: " Eli", correct: false},
            { text: " Dak", correct: true},
            { text: " Wentz", correct: false},
            { text: " Alex", correct: false},
        ]

        
    },

    {
        question: "Which movies stars a giant ape?",
            answers: [
    
                { text: " Twilight", correct: false},
                { text: " Avengers", correct: false},
                { text: " King Kong", correct: true},
                { text: " Cinderella", correct:false},
            ]
    
            
        },

{
    question: "How many double bonds are there in a benzene ring?",
        answers: [

            { text: " 1", correct: false},
            { text: " 2", correct: false},
            { text: " 3", correct: true},
            { text: " 4", correct: false},
        ]

        
    }


]







function countdown(){
    
     monkeypoop = monkeypoop - 1;
    if (monkeypoop < 20) {
        
        displayTimer.innerText = monkeypoop;
        
    }

    if (monkeypoop < 1 ){
        window.clearInterval(update);
        
    }
    
     update = setInterval("countdown()", 1000);
}



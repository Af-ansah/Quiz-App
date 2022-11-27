const coding= document.getElementById('coding-btn')
const football= document.getElementById('football-btn')
const music = document.getElementById('music-btn')

const  frontPage =document.querySelector('.category')
const  mainContainer=document.querySelector('.container')
const  questionContainerElement = document.getElementById('question-container')
const  startbutton= document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')
const checkbutton = document.getElementById('check-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')





coding.addEventListener('click', choosing)
football.addEventListener('click', choosing)
music.addEventListener('click', choosing)

function choosing (){
    
    
     frontPage.classList.add('hide') ;
    mainContainer.style.display= " block";
    
     startbutton.style.display= " block";

}

let shuffleQuestion ,currentQuestion

startbutton.addEventListener('click', starting)

nextbutton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})


function starting(){
    questionContainerElement.style.display= " block";

    // nextbutton.classList.remove('hide');
    // checkbutton.classList.remove('hide');
    startbutton.style.display= " none";

     shuffleQuestion = questions.sort(() => Math.random() - .5)
     currentQuestion = 0
    nextQuestion()
}




nextbutton.addEventListener('click', nextQuestion)

function nextQuestion(){
    resetState()
    showQuestion(shuffleQuestion[currentQuestion])
        

}

function showQuestion(question){
 questionElement.innerText = question.question
 question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText =answer.text
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
 });

}

function resetState(){
    clearStatusClass(document.body)
    nextbutton.classList.add('hide')
    while(answerButtonsElement.firstChild){
      answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
   })
   if(shuffleQuestion.length > currentQuestion + 1){
    nextbutton.classList.remove('hide')
   }else {
    startbutton.innerText = 'Restart'
    startbutton.style.display= " block";
   }
   
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else {
        element.classList.add('wrong') 
    }
}

function clearStatusClass(element){
    element.classList.remove('correct') 
    element.classList.remove('wrong')

}



const questions = [{
    question:'Which command will stop an infinite loop?',
    answer:[
        {text:'Alt-C', correct: false},
        {text:'Shift-C', correct :false},
        {text:'Esc',correct : false},
        {text:'Ctrl-C', correct : true}
    ]},
   {
    question:'_____ is the process of finding errors and fixing them within a program.',
    answer:[
    {text:'Compiling', correct: false},
    {text:' Executing', correct :false},
    {text:' Debugging', correct : true},
    {text:' Scanning ',correct : false}
]},
    
   {
    question:'A loop that never ends is referred to as a(n)_________.',
    answer:[
        {text:'While loop', correct: false},
        {text:' Infinite loop', correct :true},
        {text:' Recursive loop', correct : false},
        {text:' for loop ',correct : false}

    ]}

]
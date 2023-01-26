const football= document.getElementById('football-btn')



const  frontPage =document.querySelector('.category')
const  mainContainer=document.querySelector('.container')
const  questionContainerElement = document.getElementById('question-container')
const  startbutton= document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')
const checkbutton = document.getElementById('check-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')









function choosing (){
    frontPage.classList.add('hide') ;
    mainContainer.style.display= " block";
    
     startbutton.style.display= " block";

}
football.addEventListener('click', choosing)
// let shuffleQuestion ,currentQuestion

startbutton.addEventListener('click', codestarting)

nextbutton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})


function codestarting(){
    questionContainerElement.style.display= " block";

    startbutton.style.display= " none";

     shuffleQuestion = fquestions.sort(() => Math.random() - .5)

     console.log(shuffleQuestion);
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



const fquestions = [{
    question:'Which country won the world cup in 2021?',
    answer:[
        {text:'chelsea', correct: false},
        {text:'Real madrid', correct :false},
        {text:'Liverpool',correct : false},
        {text:'no world cup', correct : true}
    ]},


   {
    question:'What was the score in the Euro 2012 final?',
    answer:[
    {text:'2-0', correct: false},
    {text:' 3-0', correct :false},
    {text:' 4-0', correct : true},
    {text:' 5-0',correct : false}
   ]},
    
   {
    question:'Who won the Man of the Match award in the 2014 World Cup final?',
    answer:[
        {text:'Mario Goetze', correct: false},
        {text:' Sergio Aguero', correct :true},
        {text:' Lionel Messi', correct : false},
        {text:' Bastian Schweinsteiger ',correct : false}

    ]}

]

const categories= document.getElementById('cate-buttons')
const  frontPage =document.querySelector('.category')
const  mainContainer=document.querySelector('.container')
const  questionContainerElement = document.getElementById('question-container')
const  startbutton= document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')
const checkbutton = document.getElementById('check-btn')
const questionElement = document.getElementById('question')[0]
const answerButtonsElement = document.getElementById('answer-buttons')





categories.addEventListener('click', choosing)
function choosing (){
    
    
     frontPage.classList.add('hide') ;
    mainContainer.style.display= " block";
    
     startbutton.style.display= " block";

}

let shuffleQuestion ,currentQuestion

startbutton.addEventListener('click', starting)
function starting(){
    questionContainerElement.style.display= " block";

    nextbutton.classList.remove('hide');
    checkbutton.classList.remove('hide');
    startbutton.style.display= " none";

     shuffleQuestion = quesions.sort(() => Math.random() - .5)
     currentQuestion = 0
    nextQuestion()
}

nextbutton.addEventListener('click', nextQuestion)
function nextQuestion(){
    showQuestion(shuffleQuestion[currentQuestion])
        

}

function showQuestion(quesions){
 questionElement.innerText = quesion.quesion
}

const quesions = [{
    question:'Which command will stop an infinite loop?',
    answer:[
        {text:'Alt-C', correct: false},
        {text:'Shift-C', correct :false},
        {text:'Esc',correct : false},
        {text:'Ctrl-C', correct : true}
    ]}
]
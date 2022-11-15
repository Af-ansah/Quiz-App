const categories=document.getElementById('cate-buttons')
const  frontPage =document.querySelector('.category')
const  mainContainer=document.querySelector('.container')
const  questionContainerElement = document.querySelector('.hide')
const  startbutton= document.querySelector('.start-btn')

categories.addEventListener('click', cateChoose)
function cateChoose(){
    // categories.classList.add('hide')
    frontPage.classList.add('hide')
     mainContainer.classList.remove('hide')
    // questionContainerElement.classList.remove('hide')
    startbutton.classList.remove('hide')



}
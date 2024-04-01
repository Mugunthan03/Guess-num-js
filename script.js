let inputbox = document.getElementById('input')
let btn = document.getElementById('btn')
let guess =document.getElementById('guess')
let avl = document.getElementById('avl')
let result =document.getElementById('result')

var random = Math.floor(Math.random()*10)+1 
var attempts = 0


btn.addEventListener('click',function(){

    input = inputbox.value
    attempts++
    if(isNaN(input) || input < 1 || input > 10)
    {
       guess.innerHTML = 'Enter the valid number 😠'
   
      
    }
    else if(input > random)
    {
       guess.innerHTML = 'Guess is too high give a try buddy 😉'
       avl.innerHTML = `Attempts : ${attempts}`
    }
    else if(input < random )
    {
        guess.innerHTML = 'Guess is too low give a try buddy 😉' 
        avl.innerHTML = `Attempts : ${attempts}`
    }
    else
    {
        guess.innerHTML = 'Guess is correct 😎'
        avl.innerHTML = `The Attempted Guess: ${attempts}`
        result.innerHTML = `The Generated random no: ${random}`
        

    }
    inputbox.value =' ';
    inputbox.focus()


})


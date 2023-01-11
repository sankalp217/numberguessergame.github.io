const   minNum=document.querySelector('.min-num'),
        maxNum=document.querySelector('.max-num'),
        guessBtn=document.querySelector('#guess-btn'),
        guessInput=document.querySelector('#guess-input'),
        message=document.querySelector('.message'),
        //playAgain=document.querySelector('#play-again');
        playAgain=document.querySelector('#game');

// Assign min and max value
min = minNum.textContent=1;
max = maxNum.textContent=10;

let winningNum=getRandomNumber(min,max);
let guessLeft=3;

guessBtn.addEventListener('click',function(){
    let input=parseInt(guessInput.value);
    //console.log(input);

    //validate input
    if(isNaN(input) || input < min || input > max){

        //alert(`Please enter the number between ${min} and ${max}.`);
        setMessage(`Please enter the number between ${min} and ${max}`,'red');
        
        //console.log(`${input} is wrong`);
    }
    else{

        //Check winning
    if(input === winningNum){
        //game won
        
        //if guess match and win
        // guessInput.disabled=true;
        // guessInput.style.borderColor='green';
        // setMessage(`${input} is correct, You WIN !`,'green');

        gameover(true,`${input} is correct, You WIN !`,'green');

    }
    else{

        //Check left guesses
         guessLeft -= 1;
        
         if(guessLeft===0){

            //if guesses are over
            // guessInput.disabled=true;
            // guessInput.style.borderColor='red';
            // setMessage(`Game over & correct answer was ${winningNum}`,'red');

            gameover(false,`Game over, you lost! & Correct answer was ${winningNum}`);

         }
         else{

            //if some  guesses are left
            guessInput.value='';
            guessInput.style.borderColor='red';
            setMessage(`Your guess is incorrect, You left only ${guessLeft} guesses.`,'red');

         }
    }
    }
    
});

function setMessage(msg,color){
    message.textContent = msg;
    message.style.color=color;
}

function gameover(won,msg){

    let color;
    won=== true ? color='green' : color='red';

    guessInput.disabled=true;
    guessInput.style.borderColor=color;
    message.style.color=color;
    setMessage(msg);

    //play again
    guessBtn.value='play again';
    //guessBtn.id='play-again';
    guessBtn.className='';
    guessBtn.className +='play-again';
    guessBtn.style.borderColor='orange';

}

playAgain.addEventListener('mousedown',function(e){

    if(e.target.className ==='play-again'){

        window.location.reload();
        console.log('i am in play again mode');

    }
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(Math.floor(Math.random() * (max - min + 1) + min));
  }
  






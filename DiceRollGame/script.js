'use strict';

//const a=prompt("Enter : ");
//console.log(a);

const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let current0 = Number(document.querySelector('#current--0').textContent);
let current1 = Number(document.querySelector('#current--1').textContent);



const curScore0 = document.querySelector('#current--0');
const curScore1 = document.querySelector('#current--1');


score0Element.textContent = 0;
score1Element.textContent = 0;

let total0 = Number(score0Element.textContent);
let total1 = Number(score1Element.textContent);
console.log(total0,total1);

const diceElement = document.querySelector('.dice');
diceElement.classList.add('hidden');

//function to check which player is active
let isPlayer0_Active = function () { 
    return player0.classList.contains('player--active');
    
}

//function to switch berween players
const switchPlayer = function () { 
    
    if ( isPlayer0_Active()) {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
    } else { 
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
    }
}

//playerWinner function
const winner = function (total0,total1) { 
    if (total0 >= 50) { 
        player0.classList.add('player--winner');
        player0.classList.add('name');
        btnRoll.disabled = true;
    }
    if (total1 >= 50) { 
        player1.classList.add('player--winner');
        player1.classList.add('name');
        btnRoll.disabled = true;

    }
}

//RollButton Event
btnRoll.addEventListener('click', function () {
    let diceRollvalue = Math.trunc(Math.random() * 6) + 1;
    //console.log(diceRollvalue);
    diceImageFun(diceRollvalue);
    
});

//DiceRoll and CurrentScore Calculating Function
const diceImageFun = function (diceRollvalue) {
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceRollvalue}.png`;

    if (diceRollvalue === 1) {
        if (isPlayer0_Active()) {
            current0 = 0;
            curScore0.textContent = current0;
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
        } else {
            current1 = 0;
            curScore1.textContent = current1;
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
        }
    } else { 
        if (isPlayer0_Active()) {
            current0 += diceRollvalue;
            console.log(current0, typeof current0);
            curScore0.textContent = current0;
            
        } else {
            current1 += diceRollvalue;
            console.log(current1, typeof current1);
            curScore1.textContent = current1;

        }
    }

}


//HoldButton Event
btnHold.addEventListener('click', function () {
    if (isPlayer0_Active()) {
        total0 += current0;
        current0 = 0;
        curScore0.textContent = current0;
        winner(total0,total1);
        score0Element.textContent = total0;

    } else { 
        total1 += current1;
        current1 = 0;
        curScore1.textContent = current1;
        score1Element.textContent = total1;
        winner(total0,total1);
    }
    
    switchPlayer();
    
});
        

//NewButton Event
btnNew.addEventListener('click', function () {
    curScore0.textContent = 0;
    curScore1.textContent = 0;

    current0 = 0;
    current1 = 0;

    diceElement.classList.add('hidden');

    total0 = 0;
    total1 = 0;

    score0Element.textContent = 0;
    score1Element.textContent = 0;

    btnRoll.disabled = false;
    btnHold.disabled = false;
    
    if (player0.classList.contains('player--winner')) { 
        player0.classList.remove('player--winner');
        player0.classList.remove('name');
    }

    if (player1.classList.contains('player--winner')) { 
        player1.classList.remove('player--winner');
        player1.classList.remove('name');   
    }

    if (!isPlayer0_Active()) { 
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
    
    }
});
    

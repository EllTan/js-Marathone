const $btn = document.getElementById('btn-kick');
const $btnSuper = document.getElementById('btn-super');
const $btnAgain = document.getElementById('btn-again');

$btnSuper.disabled=true;
$btnAgain.disabled=true;

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    
}

$btn.addEventListener('click', function () {    
    console.log('Kick');
    changeHP(random(15), character);
    changeHP(random(15), enemy);
    if (character.damageHP<=50){
        $btnSuper.disabled=false;
    }  
    
});

$btnSuper.addEventListener('click', function(){        
    console.log('Super Shot');
    changeHP(randomSuper(12,35), character);
    changeHP(randomSuper(8,30), enemy);    

})

$btnAgain.addEventListener('click', function(){
    history.go(0);
})

function init(){
    console.log('Start Game!');
    renderHP(character);    
    renderHP(enemy);    
}

function renderHP(person){ 
    renderLife(person);
    renderProgressbarHP(person);
}

function changeHP(count, person){
    if (person.damageHP<count){
        person.damageHP=0;
        alert('Бедный ' + person.name + ' проиграл бой');
        $btn.disabled = true;
        $btnSuper.disabled = true;
        $btnAgain.disabled=false;
    } else{
        person.damageHP -= count;
    }
    
    renderHP(person);
}

function renderLife(person){    /* изменение значения HP*/
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbarHP(person){ /*перерисовка прогрессбара*/
    person.elProgressbar.style.width = person.damageHP + '%';
    
}

function randomSuper(numMin,numMax){
    randomMin = Math.ceil(Math.random()*numMin);
    randomMax = Math.ceil(Math.random()*numMax);
    if(randomMin<numMin){
        randomMin+=6;
    }
    if(randomMax>randomMin){
        result = randomMax-randomMin;
    } else {
        result = randomMin;
    }
    
    return result;
}

function random(num){
    console.log(Math.random);
    return Math.ceil(Math.random()*num) /*num для корректировки рандома. т.е можно выставить потолок. например random(20)*/
}

init();
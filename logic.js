const btn_up = document.querySelector('.up');
const btn_down = document.querySelector('.down');
const count = document.querySelector('.count_n');
var ini = 0;


btn_down.addEventListener('click', count);
btn_up.addEventListener('click', count);

function change_count_up(){
    let up = document.querySelector('.count_n').textContent = ++ini;
}

function change_count_down(){
    let down = document.querySelector('.count_n').textContent = --ini;
    
}
// un ejercicio interesante... y util
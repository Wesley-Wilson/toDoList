let addToDoButtom = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let todoid = 0;



addToDoButtom.addEventListener('click', function () {

    let div = document.createElement(`div`); 


    div.classList.add(`toDoItem`); 
    div.setAttribute('id', todoid); 
    toDoContainer.appendChild(div); 


    let paragraph = document.createElement(`p`); 
    let btnCheck = document.createElement(`button`); 
    let btnRemove = document.createElement(`button`);

    paragraph.classList.add(`paragraph-styling`); 
    btnCheck.classList.add(`btnCheck`); 
    btnRemove.classList.add(`btnRemove`); 

    paragraph.innerText = inputField.value; 
    btnCheck.innerText = "✔";
    btnRemove.innerText = "✖";

    let toDoItem = document.getElementById(todoid)
    toDoItem.appendChild(paragraph); 
    toDoItem.appendChild(btnCheck);
    toDoItem.appendChild(btnRemove);

    inputField.value = ""; 

    btnCheck.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "green";
    });

    btnRemove.addEventListener('click', function () {
        toDoContainer.removeChild(div);
    });

})

function addId() {
    todoid++;
}

let minutos = 25;
let segundos = 0;
let time;

let fase = "Foco";

function timer(){
    if (segundos == 0){
        minutos--;
        segundos = 60;
    }
    segundos--;
    if (minutos == 0 && segundos == 0 && fase == "Foco"){
        alert("Hora de Descansar!");
        minutos = 5;
        segundos = 0;
        fase = "Descansar";
    }
    if (minutos == 0 && segundos == 0 && fase == "Descansar"){
        alert("Hora de Voltar ao Foco!");
        minutos = 25;
        segundos = 0;
        fase = "Foco";
    }
    document.getElementById("timer").innerHTML = minutos + ":" + segundos;
    document.getElementById("status").innerHTML = fase;
}

function start(){
    time = setInterval(() => { timer(); }, 1000);
}

function stop(){
    clearInterval(time);
}

function reset(){
    minutos = 25;
    segundos = 00;
    document.getElementById("timer").innerHTML = minutos + ":" + segundos;
}


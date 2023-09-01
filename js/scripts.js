'use strict';
'use strict';

const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');


const uA = document.querySelector('#uA');
const uB = document.querySelector('#uB');
const uC = document.querySelector('#uC');
const uD = document.querySelector('#uD');

form.addEventListener('submit', function(event){
    event.preventDefault();
    alert('Fin!')


    let inputA = a.value;
    uA.innerHTML = inputA;

    let inputB = b.value;
    uB.innerHTML = inputB;
    
    let inputC = c.value;
    uC.innerHTML = inputC;
    
    let inputD = d.value;
    uD.innerHTML = inputD;

})



function clear(){
    document.querySelectorAll(input) = "";
}


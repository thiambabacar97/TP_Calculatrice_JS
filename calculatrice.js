let nbr1 = document.querySelector('#nbr1');
let nbr2 = document.querySelector('#nbr2');
let op  = document.querySelector('#op');
let test = document.querySelectorAll('div');
let link = document.querySelector("a");
let ShowResult =document.querySelector('#resultSuccess');    
let result = 0;

ShowResult.innerHTML =`Resultat : ${result}`;

function adition() {

    return parseInt(nbr1.value) + parseInt(nbr2.value);  
}
function division() {

    if (nbr1.value == 0 || nbr2.value == 0) {

        isInvalid(op);
    }
    else{
        isValid(op)
        return parseInt(nbr1.value) / parseInt(nbr2.value);
    }
      
 }
 function multiplucation() {
  
    return parseInt(nbr1.value) * parseInt(nbr2.value);  
 }
 function soustraction() {

    return parseInt(nbr1.value) - parseInt(nbr2.value);  
 }
 function calcule(operation){
   
    switch (operation) {
        case '+':
            result = adition();
            break;
        case '-':
            result = soustraction();
            break;
        case '*':
            result = multiplucation();
            break;
        case '/':
            result = division();
            break;
    } 

    if (isNaN(result)) {
console.log(result);

        ShowResult.classList.add('text-danger');
        ShowResult.innerHTML =`:)`;
    }
    else{
        ShowResult.classList.remove('text-danger');
        ShowResult.classList.add('text-success');
        ShowResult.innerHTML =`Resultat : ${result}`;
    }
 }

 function isValid(element){
   ShowResult.style.display ="block";
   element.classList.remove('is-invalid');
   element.classList.add('is-valid');
 }
 function isInvalid(element){

    ShowResult.classList.remove('text-success');
    ShowResult.classList.add('text-danger');
    ShowResult.innerHTML = ":)"
    element.classList.add('is-invalid');   
 }

function ecouteurInput1(){
    if ( nbr1.value === "") {

        isInvalid(nbr1);
    }
    else{

        isValid(nbr1);
        calcule(op.value);   
    }
}
function ecouteurInput2(){
    if ( nbr2.value === "") {

        isInvalid(nbr2);
    }
    else{

        isValid(nbr2);
        calcule(op.value);   
    }
}
function ecouteurSelect(){
    if ( op.value === "") {

        isInvalid(op);
    }
    else{

        isValid(op);
        calcule(op.value);   
    }
}


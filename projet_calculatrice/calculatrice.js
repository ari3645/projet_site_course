function multiplication(a,b){
    return a*b;
}

function addition(a,b){
    return a+b;
}

function soustraction(a,b){
    return a-b;
}

function division(a,b){
    if (b === 0) {
        return "Impossible de diviser par 0";
    } else {
        return a/b;   
    }

}

let nb1 = Number(nombre1.value);
let nb2 = Number(nombre2.value);
let operateur = operateur.value;
let resultat = 0;
alert(nb1);
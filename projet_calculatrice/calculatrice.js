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

let equation = document.getElementById("equation");

function ajouteroperation(valeur) {
    equation.value += valeur;
}

function reset() {
    equation.value = "";
}

function calculer(equation) {
    let nombre1 = "";
    let nombre2 = "";
    let operateur = "";
    let resultat = 0;
    let faire_calcul = false;
    let liste_operateurs = ["+","-","*","/"];
    let index_operateur = 0;
    // console.log(equation.value);
    
    for (let i = 0; i < equation.value.length; i++) { 
        // console.log(equation.value[i]);
        if (liste_operateurs.includes(equation.value[i])) {
            operateur = equation.value[i];
            index_operateur = i;
            faire_calcul = true;

        }
    }
    index_operateur = index_operateur + 1-1;
    if (faire_calcul === true) {
        for (j=0; j<index_operateur; j++) {
            // console.log(equation.value[j]);
            nombre1 = nombre1 + equation.value[j];
        }
        for (k=index_operateur+1; k<equation.value.length; k++) {
            // console.log(equation.value[k]);
            nombre2 = nombre2 + equation.value[k];
        }
    }

    nombre1 = parseInt(nombre1);
    nombre2 = parseInt(nombre2);
    // console.log(nombre1);
    // console.log(nombre2);
    if (operateur === "+") {
        resultat = addition(nombre1,nombre2);
    } else if (operateur === "-") {
        resultat = soustraction(nombre1,nombre2);
    } else if (operateur === "*") {
        resultat = multiplication(nombre1,nombre2);
    } else if (operateur === "/") {
        resultat = division(nombre1,nombre2);
    }

    console.log(resultat);
    return 0;
}
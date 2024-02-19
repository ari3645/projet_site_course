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

document.querySelector("html").addEventListener("click", function(){
    alert("Aïe, arrêtez de cliquer !!");
});

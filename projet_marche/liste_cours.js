let basket = []
let table = document.getElementById("tableau")
let prix = {pomme : 0.5, banane : 1.3, orange : 0.75, papaye : 1.7, kiwi : 0.6, courgette : 1.2, potiron : 1.2, mangue : 1.5, kiwi : 0.9, pasteque : 2.0}


function ajouterItem (basket, item) {

    if (item in basket){
        basket[item] += 1

    }else{
        basket.push(item)
        basket[item] = 1

    }
    let row = table.insertRow(1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerText = item
    cell2.innerText = basket[item]

    console.log(basket)
}

# Cours dev web : JS, web api fetch et json

## Début JS

 - Diés = balise titre. (Nombre de diés = taille du titre.)

 - Balise u permet de souligner.

 - Balise i permet de mettre en italique.

 Markdown = documentation d'un code.

 Github = Site web qui offre des services.

## Role JavaScript 
 Permet de rendre les pages dynamiques. 

 Permet de coder/travailler dans des environnements différents.

## Commande JS

Séléctionner des éléments par ID :

```sh
let element = document.getElementById("monID")
```
Séléctionner des éléments par classe :

```sh
let element = document.getElementByClassName("maClasse")
```

Séléctionner des éléments par balise :

```sh
let element = document.getElementByTagName("maBalise")
```

Changer le texte :

```sh
document.getElementById("monId").textContent = "Nouveau texte !";
```

Ajouter un écouteur d'évenements :
(Au moment ou cet évenement à lieu, on excécute une fonction)

```sh
document.getElementById("monBouton").addEventListener("click",function(){alert("Bouton cliqué !");
});
```
Callback = fonction passer en paramètre dans une autre fonction.

### Git 

Initialisé Git : 

```sh
Git init
```

Supprimer Git : supprimer le fichier .git

Savoir le statut de Git : 

```sh
git status
```

Commit = sauvegarde

Permet à Git de détecter les modifications de tout les fichiers du documents main : 

```sh
git add .
```

Faire une sauvegarde (en donnant un message) : 

```sh
git commit -m "first commit"
```

### Remarques

Balise script après le code html pour plus de performance.(Si fichier Js volumineux car code excécuter dans l'ordre)

Les fichiers commencant par un point sont des fichiers cachés

Lecture intéressante : Pro git by Scott Chacon
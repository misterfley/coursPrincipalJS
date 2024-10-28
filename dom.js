/*
Le DOM (document object model) est une interface de programmation pour les documents html(XML et SVG).
Il fournit une représentation structurée du document sous forme d'un arbre et définit la façon 
dont la structure peut être manipulée par le programme, en terme de style, de contenu ,
 et de dynamisme( gestionnaire d'évènements) de celle-ci.
Le DOM représente le document comme un ensemble de noeuds et d'objets possédant des propriétéset des méthodes
*/

//Comment récupérer un élément unique du DOM?
// Que ce soit un h1,un imput ,une div etc, c'est un objet js.

const titre = document.getElementById("titre");
console.log(titre);

// Autre façon de récupérer un élément unique.

const t = document.querySelector("#titre");
console.log(t);

//Comment récupérer plusieurs éléments  du DOM en même temps?

const items = document.getElementsByClassName("items");
console.log(items);

//Meilleure manière de récupérer plusieurs éléments
const items2 = document.querySelectorAll(".items");
console.log(items2);

//Autre utilisation de queryselector qui aura le même effet.
const items3 = document.querySelectorAll("ul>li");
console.log(items3);

//Attention !  ( Dans certains cas cela peut être utile)

const item4 = document.querySelector(".items");
console.log(item4);
// le queryselector normal sur une classe ayany plusieurs éléments ne retourne que le 1er.

//Comment modifier un élément ?

//Un élément étant un objet js, on peut le modifier à partir de ses propriétés et/ou de ses méthodes.

//ex 1 :
//Je veux modifier le texte à l'intérieur
titre.innerHTML = "titre modifié par JS";
/*
quelques exemples:
color, backgroundColor, border, flex, justifyContent
*/

//  Je veux changer la couleur du 2eme li
items2[1].style.color = "red";
items2[0].style.fontSize = "2em";

// <element.style. ->
//Comment changer de classe
items[2].classList.add("green");
//pour l'enlever
items[2].classList.remove("green");

//LES EVENEMENTS
/*
Un évènement est un signal envoyé par JS dans le DOM.
//Un evènement peut être déclenché par l'utilisateur ,
un clic de souris, le survol d'une zone de l'écran , 
la barre de scroll, la fin de chargement de la page etc
Ces évènements sont pilotés par le gestionnaire d'évènements de JS.
*/

//Comment marche le gestionnaire?
/*
1=> Ecoute de l'evenement(attente d'un click de la souris par ex)
2=> Detection de l'évènement
3=> Traite l'évènement -> lance le code de la fonction anonyme de l'écouteur
*/
const btn = document.getElementById("btn");
const lab = document.getElementById("lab");
btn.addEventListener("click", function () {
  items2[2].classList.toggle("red");
  // La méthode vérifie si la classe est dans l'élément.Si oui il l'enlève, si non il la rajoute.
});
const input = document.getElementById("input");
input.addEventListener("input", function () {
  let val = this.value;
  lab.innerHTML = val;
  console.log(val);
});

//Comment créer un élément dans une page html en js

const divParent = document.getElementById("divParent");

let nouvelElement = document.createElement("p");
divParent.appendChild(nouvelElement);
nouvelElement.innerHTML = "lorem ipsum";
nouvelElement.addEventListener("mouseover", function () {
  this.classList.toggle("green");
});
nouvelElement.addEventListener("mouseout", function () {
  this.classList.toggle("green");
});

const container = document.getElementById("container");
console.log(container);
for (let i = 1; i <= 10; i++) {
  let div = document.createElement("div");
  container.appendChild(div);
  div.innerHTML = `la div ${i}`;
  div.classList.add( "division" + i)
}

//hors sujet important


/*Pour un commentaire. Ce dernier permet de décrire
le code qui est  directement en dessous */

//Les  Variables
//elles permettent de garder en mémoire
// une ou les valeurs lors de l'éxecution d'un script.
//Pour déclarer une variable on utilise 2 mots clés.
//let , const et var.

const maxWheels = 4;
let carPower = 3000;
var model = "lamborghini";

//const

/*  
La déclaration const permet de créer une constante 
nommée accessible uniquement en lecture.
Une constante ne peut être redéclarée.
*/
const a = "bonjour";
//Quand la variable est déclarée, il n'y a plus besoin du mot clé.

//a='coucou';
/*On va avoir une erreur de réassignement de variable
(invalid assignment to const 'a' )
car celle ci est immuable.
*/

//let
let b = "salut les copains";
b = " hi, bitches";
//cela marche aussi, let n'est pas immuable.
//Attention, ne pas redéclarer une variable en let.

let c = "chat";
c = "chien"; //ok
//let c = "courgette"; ERREUR -> redéclaration de Let C.Ne pas mettre let une seconde fois pour la même variable quand on la change.

//var

//L'instruction var permet de déclarer une variable et éventuellement redéclarer sa valeur.
var z = 2;
z = 7;
var z = 47;

//Depuis l'ECMA script 6 (standardisation du js), il est fortement déconseillé de l'utiliser.

//Les types de variables.

//Les Nombres.

let k = 2;
let l = 3.54; // attention les virgules pour les nbres sont des points.
let m = -78;
let n = 4 / 3;

// Les chaines de caractère.

/* Elles permettent de stocker des mots ou des phrases.
 on les entoure de '',"", ou ``. 
 */
let aa = "coucou à l'autruche";
let bb = "coucou àl'autruche remix";
let cc = `coucou à l'autruche, j'insiste`;

//L'utilisation de `` permet la concaténation de variables directement dans les guillemets.

let nom = "groot";
let phrase = `je s'appelle ${nom}.`;
console.log(phrase);

//Les booléens.

let jeSuisVrai = true;
let JeSuisFaux = false;

//Les Tableaux.
/*Ils permettent de stocker une liste d'informations.
Cette dernière peut contenir n'importe quel autre type de variable(même un tableau dans un tableau).
Par défaut on utilise const pour les déclarer.
*/

const eleves = ["Alphonse", "Emma", "Jean michel"];
const dut = [8, true, "emma"];
//Comment récupérer nos éléments
//on peut les récupérer à partir de leur index, qui commence tjrs par 0.

//Pour récupérer Emma:
console.log(eleves[1]);
console.log(dut[2]);

//Les Objets.
/*  
Ils permettent de stocker des infos plus complexes qu'un simple tableau.
Imaginons pour le moment que les objets sont des tableaux mais avec des index nommés.

On appelle ça un système clé/valeur.
En général on utilise const pour déclarer un objet.*/
const eleve = {
  clef: "valeur",
  nom: "Michel",
  age: 18,
  notes: [10, 4, 15, 18, 2],
};

//Comment accéder aux valeurs?
console.log(eleve.nom);
console.log(eleve.notes[4]);
//Autre approche pour accéder aux propriétés, à eviter cependant.
console.log(eleve["notes"]);

//Undefined, null NaN
/*
undefined-> Quand on essaie d'acceder à une variable ou une valeur inexistante.
C'est souvent un résultat inattendu.
null-> Il représente une absence de valeur.
L'assignation d'une valeur nulle à une variable est intentionnelle.

NaN(Not a Number)->Résultat innatendu d'un calcul dont au moins un des composants n'est pas un nombre.
*/

//Typage Faible

const xx = 1;
const yy = "1";
console.log(xx + yy);
//xx lors de l'addition s'est converti en chaine de caractère.
console.log(xx * yy);
//yy lors de la multiplication s'est converti en number.
console.log("salut!!" * 3);
//NaN , cela n'a aucun sens de multiplier une string par un nombre.
console.log("43" < 100);
//false. 1000 est converti en chaine de caractère et il compare l'ordre alphabétique.

//Les conditions.

/*
Lorsqu'on souhaite écrire des algorithmes, il est important de pouvoir tester si une valeur est bien celle attendue.
Nous utiliserons donc le sytème de consition.

Une condition s'écrit avec le mot clé if qui va vérifier une égalité,une comparaison,un type de variable etc.

if(<bouléen>){
On passe ici si le code retourne true
}else{
on passe là si le code retourne false
}
*/

//Les opérateurs de comparaison.

/*
a == b -> a est égal à b.
a=== b. -> a ==b et on vérifie le type de b.
a>=b  -> a est supérieur ou égal à b.
a>b -> strictement supérieur.
a<=b.
a<b
a!=b-> a est différent de b
a!==b-> et n'a pas le même type.

On essaiera tant que possible d'éviter les == et les != car ces comparaisons se basent sur une conversion implicite des types ?
Cela peut créer des comportements inattendus.
*/

/*Egalités tout le temps fausses.
Ne JAMAIS FAIRE CA

{a: 1} =={a: 1}->false
{}=={} ->false.
[]==[] -> false.
Nan== Nan -> false
*/

/*ET et OU
if (<booleen> && <bouleen>)
ex: (50>14 && 98<119) -> (true && true)
true && true ->true
true && false ->false
false && false -> false

if (50 >55|| 98<119)-> if (false ||true)
true || true -> true
true|| false ->true
false || false -> false


//NON
!true->false
!false->true
*/
let age = 15;
let billet = true;
let tenueCorrecte = true;
if (age >= 18 && billet && tenueCorrecte) {
  console.log("Vous pouvez entrer, bonne soirée");
} else {
  console.log("Allez ouste,Rentrez chez vous!!");
}

let nombreDeroues = 6;
if (nombreDeroues === 1) {
  console.log("c'est un monocycle");
} else if (nombreDeroues === 2) {
  console.log("c'est un vélo ou une moto");
} else if (nombreDeroues === 3) {
  console.log("c'est un sidecar");
} else if (nombreDeroues === 4) {
  console.log("c'est une voiture");
} else {
  console.log("japooon");
}

//même exemple mais avec un switch

switch (nombreDeroues) {
  case 1:
    console.log("c'est un monocycle");
    break;
  case 2:
    console.log("c'est un vélo ou une moto");
    break;
  case 3:
    console.log("c'est un sidecar");
    break;
  case 4:
    console.log("c'est une voiture");
    break;
  default:
    console.log("japooon");
    break;
}

//ecriture ternaire
//Elle permet de simplifier un if/else
// a eviter sur les if complexes.

let age2 = 19;
let phrase2 = age2 >= 18 ? "majeur" : "mineur";
console.log("vous êtes " + phrase2);

// La portée des variables

if (age2 >= 18) {
  let pp = 3;
}
//console.log(pp);  on aura  une erreur,let pp existe que dans la condition si dessus.

//les variables ont une portée limitée et n'existent que dans le bloc où elles sont définies.

let aaa = 5;
if (true) {
  console.log(aaa);
  aaa = 47;
}
console.log(aaa);

//En revanche une variable peut être lue dans les blocs enfants

//Attention au comportement du var. Il a pour portée
//la fonction qui le contient, s'il est dans le script principal,on peut accéder à var n'importe où
//cela peut créer des comportements inattendus

//Les Boucles

/*Elles permettent de répéter une certaine logique suivant une condition précise.
Il existe plusieurs manières de créer des boucles.


*/

// La boucle while
/*  
while(<condition>){
//code à répéter}
<condition> -> tant que cette condition n'est pas satisfaite ,la boucle continuera.

*/
let i = 0;
while (i < 5) {
  console.log("je compte" + i + " avec la boucle while");
  i++;
}

// do-while
let j = 0;
do {
  console.log("je compte" + j + " avec la boucle do-while");
  if (j === 1) {
    break;
  }
  j++;
} while (j < 5);

// Boucle for

//Elle permet d'éxecuter un code un certain nombre de fois en précisant manuellement
//l'intervalle pour lequel on souhaite faire la boucle, elle présente une notation plus concise que la while.

for (let i = 0; i < 3; i++) {
  console.log("je compte" + i + " avec la boucle for");
}

//for-of

const fruits = ["fraise", "framboise", "cerise", "litchi"];

for (fruit of fruits) {
  console.log(fruit);
}
//avec while
let q = 0;
while (q <= 10) {
  let result = 7 * q;
  console.log(`7*${q}=${result}  avec while`);
  q++;
}
//avec for
for (let z = 0; z <= 10; z++) {
  //let result = 7 * z;
  if (z !== 5) {
    //console.log(`7 x ${z}=${result} mais avec for`);
    console.log(`7x${z}=${z * 7} mais avec for`);
  }
}

const nombres = [3, 7, 12, 5, 20, 8];
let result = 0;
for (nombre of nombres) {
  console.log(nombre);
  result += nombre; // result= result +number;
  console.log(`la somme est ${result}.`);
}

/*let message = parseInt(prompt("Devine le nombre entre 1 et 10 :"));
console.log(message);
let secretNumber = Math.ceil(Math.random()*10);

if (message !== secretNumber){
do {
  message = parseInt(prompt("Presque... Essaie encore"));
  if(message>10 || message<1){ 
    do{
      message = parseInt(prompt("choisis un chiffre entre 1 et 10!!!!!"));}
      while (message>10 || message<1);
    }
 
} while (message !== secretNumber);
}
alert ("c'est bien ça");*/

/*
if(message<secretNumber){console.log("le chiffre est supérieur")
 }else if(message>secretNumber){console.log("le chiffre est inférieur")}
*/

// Les Fonctions

/* On va être très rapidement amenés à répéter une même logique plusieurs fois. 
Pour remédier à ce problème, il est possible d'écrire des fonctions.

function<nome de la fonction en pascalCase(argument1,argument2,etc)

PS : certaines fonctions ne nécessitent aucun argument ,d'autres plusieurs.
*/
// Exemple de fonction sans arguments
function coucou() {
  console.log("coucou");
}
//on a juste déclaré la fonction.
//Il ne se passera rien dans la console.
//Pour que ça marche, on doit appeler la fonction.

coucou();
function saluer(nom) {
  console.log("Salut" + nom + "!");
}
saluer("Momo");
saluer("Jean");

// Le retour
/*
Il y a un concept essentiel sur les fonctions: les valeurs de retour.
Certaines fonctions ne renvoient pas de valeurs significatives(fonctions vides).
D'autres le font.
Il est important de comprendre quelles sont leurs valeurs.
*/
function add(nbr1, nbr2) {
  return nbr1 + nbr2;
}
let addition = add(2, 34);
console.log(addition);
//autres exemples de fonctions qui retournent(natives de js):
let hasard = Math.random();

const tab = ["voiture", "tire", "caisse"];
let voitureIndex = tab.indexOf("caisse");
// celle ci est une peu plus complexe que les précédentes,car en cas  cas d'echec ,elle retourne la valeur -1.

//Les fonctions d'objets.

//Les fonctions d'un objet (dans tous les langages) s'appellent une méthode.

// exemple
const compteEnBanque = {
  id: "564446466646454",
  proprio: "Jean-Michel Lamouche",
  comptes: [3459.12, 12474.56, 9841.47],
  total() {
    let total = 0;
    for (compte of this.comptes) {
      total += compte;
    }
    return total;
  },
};

let totalCompte = compteEnBanque.total();
console.log(totalCompte);

//Timer

/*
Il y a 2 types de timers
le setTimeout  et le setInterval
*/

//Le setTimeout est un timer qui s'execute UNE SEULE FOIS!
setTimeout(function(){
  console.log("coucou");
 
} ,3000)
//coucou va s'afficher

//Pour controler le timer faut le mettre dans une variable.
const timer= setTimeout(function(){
  console.log("coucou2");
  
},3000)

//Cette fonction empêche le lancement du timer:
clearTimeout(timer)

// setInterval
/*
Contrairement au setTimeout, il va lancer un compteur toutes les x millisecondes.
*/
//Avec une fonction fléchée
let count= 0;
const timer2 = setInterval (()=> {
  console.log(`C'est le cycle: ${count}`);
  count++;
  
},1000)
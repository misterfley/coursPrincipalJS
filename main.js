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


if (age2 >=18){
    let pp=3
}
//console.log(pp);  on aura  une erreur,let pp existe que dans la condition si dessus.

//les variables ont une portée limitée et n'existent que dans le bloc où elles sont définies.

let aaa=5;
if(true){
    console.log(aaa)
    aaa=47
}
console.log(aaa)
//En revanche une variable peut être lue dans les blocs enfant

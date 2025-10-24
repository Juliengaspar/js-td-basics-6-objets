/*****************************
 * 029-2 - Boucles pour parcourir des objets
 */

// 2. Boucle for/in pour parcourir des objets

/*
for(const prop in objet) {
  console.log(prop + " : " + objet[prop]);
}   
*/

/*
EXERCICE 1 : 
Parcours l'objet mesFruits pour afficher, pour chacun des fruits, "Le fruit … coûte … €"
*/
//boucle forin pour voir tous les propreiters
//const toto = [] tableaux indice car il n'y a pas di'ndi
console.log('forin')
const mesFruits = {
  "Pomme": 1.3,
  "Poire": 0.5,
  "Ananas": 3
};

// Écris ton code ici
//attention aux nom des constantes
//"Pomme" === Pomme
for (const mesFruitsKey in mesFruits) {
  console.log(mesFruits[mesFruitsKey]);
  console.log(`Le fruit ${mesFruitsKey} coûte ${mesFruits[mesFruitsKey]} €`)
}
console.log("forin obj2")
/*
EXERCICE 2 :
Parcours l'objet fruit pour afficher chacune de ses propriétés avec, pour chacune, sa valeur
*/
const fruits = {
  "Nom": "Pomme",
  "Prix": 0.3,
  "Couleur": "Verte",
  "Variété": "Golden"
};

// Écris ton code ici
//boucle forin pour voir tous les propreiters
//const toto = [] tableaux indice car il n'y a pas di'ndi
console.log('forin')
for (const fruitKey in fruits) {
  console.log(` le  ${fruitKey} = ${fruits[fruitKey]}`)

}
// Un mot est un objet de type String => ceci fonctionne également…
/*
EXERCICE 3 :
Parcours le mot "Bonjour" pour afficher séparément chacune de ses lettres
*/
console.log("afficher séparément chacune de ses lettres")
const mot = "Bonjour";

// Écris ton code ici
for (const motKey in mot) {
  console.log(` mot ${motKey} = ${mot[motKey]}`)
}
/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/


const bmi={
    nomJohn : 'John',
    nomMark : 'Mark',
    poidsJohn : parseInt(prompt('entrez le poids de John en KG')),
    tailleJohn: parseInt(prompt('entrez la taille de John en M')),
    poidsMark : parseInt(prompt('entrez le poids de Mark en KG')),
    tailleMark: parseInt(prompt('entrez la taille de Mark en M')),





    calculeBMIJohn(){
        return this.poidsJohn / (this.tailleJohn * this.tailleJohn);    },

    calculeBMIMark(){

        return this.poidsMark / (this.tailleMark * this.tailleMark);    },

    init(){
        const bmiJohn = this.calculeBMIJohn();
        const bmiMark = this.calculeBMIMark();
        if (bmiJohn > bmiMark) {
            console.log(`Le BMI de ${this.nomJohn} (${bmiJohn.toFixed(2)}) est supérieur à celui de ${this.nomMark} (${bmiMark.toFixed(2)}).`);
        } else if (bmiJohn === bmiMark) {
            console.log(`Le BMI de ${this.nomJohn} et de ${this.nomMark} sont égaux (${bmiJohn.toFixed(2)}).`);
        } else {
            console.log(`Le BMI de ${this.nomMark} (${bmiMark.toFixed(2)}) est supérieur à celui de ${this.nomJohn} (${bmiJohn.toFixed(2)}).`);
        }

    }
}

bmi.init();

class Bmi {
    nom;
    poids ;
    taille;
    bmi


    constructor(nom, poids, taille,bmi) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
        this.bmi = bmi;
    }

    calculeBMI(){
        return this.poids / (this.taille * this.taille);
    }
}
const BmiJohn = new Bmi();
const BmiMark = new Bmi();

BmiMark.nom = "Mark";
BmiJohn.nom = "John";
BmiJohn.poids =  parseInt(prompt('entrez le poids de John en KG'));
BmiJohn.taille = parseInt(prompt('entrez la taille de John en M'));
BmiMark.poids  = parseInt(prompt('entrez le poids de Mark en KG'));
BmiMark.taille= parseInt(prompt('entrez la taille de Mark en M'));
BmiJohn.bmi= BmiJohn.poids / (BmiJohn.taille * BmiJohn.taille);
BmiMark.bmi= BmiMark.poids / (BmiMark.taille * BmiMark.taille);
if (BmiJohn.bmi > BmiMark.bmi) {
    console.log(`Le BMI de ${BmiJohn.nom} (${BmiJohn.bmi}) est supérieur à celui de ${BmiMark.nom} (${BmiJohn.bmi}).`);
} else if (BmiJohn.bmi === BmiMark.bmi) {
    console.log(`Le BMI de ${BmiJohn.nom} et de ${BmiMark.nom} sont égaux (${BmiJohn.bmi(2)}).`);
} else {
    console.log(`Le BMI de ${BmiMark.nom} (${BmiMark.bmi}) est supérieur à celui de ${BmiJohn.nom} (${BmiJohn.bmi}).`);
}

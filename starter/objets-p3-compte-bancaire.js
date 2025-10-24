/*
OBJETS - PRÉPA 3 : Modélisation d'un compte bancaire
1. Crée un objet compte qui a :
   - une propriété titulaire valant "Alex"
   - une propriété solde valant initialement 0 ;
   - une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif)
     au solde du compte ;
   - une méthode decrire() renvoyant la description du compte.
2. Utilise cet objet pour
   - afficher sa description,
   - le créditer de 250,
   - puis le débiter de 80,
   - et enfin afficher de nouveau sa description.
*/
const compteBancaire = {
    titulaire : 'Alex',
    solde : 0,
  crediter(monatantPasse){
      this.solde +=  monatantPasse;
  },
    decrire(){
        return `${this.titulaire} a pour solde ${this.solde}!`
    }
}
console.log(compteBancaire.decrire());
compteBancaire.crediter(250);
compteBancaire.crediter(-80);
console.log(compteBancaire.decrire());

console.log("avec une class")

class CompteBancaireClasse {
    titulaire;
    solde;


    constructor(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    }
    crediter2(monatantPasse){
        this.solde +=  monatantPasse;
    }
    decrire2(){
        console.log(`${this.titulaire} a pour solde ${this.solde}!`);
    }
}
const CompteBancaireUser = new CompteBancaireClasse();
CompteBancaireUser.titulaire = 'Alex';
CompteBancaireUser.solde = 1000;
CompteBancaireUser.crediter2(250);
CompteBancaireUser.decrire2();
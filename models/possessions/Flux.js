// dateDebut = 01/01/2024
// montant = 400_000
// jour = 1
import Possession from "./Possession.js";
export default class Flux {
  // Si salaire => +
  // Si train de vie => -
  constructor(
    // possesseur,
    valeur,
    dateDebut,
    dateFin,
    jour,
    // source,
    // destination,
  ) {
    this.valeur = valeur;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.jour = jour;
    // this.source = source; // null || Compte
    // this.destination = destination; // Compte
  }

  getValeur(date) {
    // TODO: calculer le montant total du flux en prenant compte du jour de versement
    // calcul différence entre date et date debut
    const differenceDate = {
      annee: date.getFullYear() - this.dateDebut.getFullYear(),
      mois: date.getMonth() - this.dateDebut.getMonth(),
    };

    // calcul montant total
    let valeurTotal = 0;
    if (differenceDate.annee > 0 || differenceDate.mois > 0) {
      valeurTotal =
        this.valeur * differenceDate.mois +
        this.valeur * differenceDate.annee * 12;
    }
    if (date.getDate() >= this.jour) {
      valeurTotal += this.valeur;
    }

    return valeurTotal;
  }
}

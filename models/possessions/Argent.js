import Possession from "./Possession.js";
import TYPES from "../../constante.js";

export default class Argent extends Possession {
  constructor(
    possesseur,
    libelle,
    valeur,
    dateDebut,
    dateFin,
    tauxAmortissement,
    type,
  ) {
    super(possesseur, libelle, valeur, dateDebut, dateFin, tauxAmortissement);
    try {
      if (!Object.values(TYPES).includes(type)) {
        throw new Error("Type d'argent invalide");
      }
      this.type = type;
    } catch (e) {
      console.log(TYPES);
    }
  }

  getValeur(date) {
    if (this.dateFin != null) {
      if (date >= this.dateDebut && date <= this.dateFin) {
        return this.valeur;
      }
    } else {
      return date >= this.dateDebut ? this.valeur : 0;
    }
  }
}

import { describe } from "mocha";
import { assert } from "chai";
import Flux from "../models/possessions/Flux.js";
import Argent from "../models/possessions/Argent.js";
import Personne from "../models/Personne.js";

describe('Test de la classe "Flux"', () => {
  const dateDebut = new Date("2024-01-01");
  const personne = new Personne("personne");
  const trainDeVie = new Argent(
    personne,
    "argent",
    400_000,
    dateDebut,
    null,
    0,
    "Espece",
  );
  const salaire = new Argent(
    personne,
    "argent",
    500_000,
    dateDebut,
    null,
    0,
    "Espece",
  );
  const compteCourant = new Argent(
    personne,
    "argent",
    200_000,
    dateDebut,
    null,
    0,
    "Courant",
  );
  const fluxSortant = new Flux(
    trainDeVie.getValeur(dateDebut),
    dateDebut,
    null,
    1,
  );
  const fluxEntrant = new Flux(
    salaire.getValeur(dateDebut),
    dateDebut,
    null,
    31,
  );

  describe("test pour les flux sortant (train de vie)", () => {
    it("valeur du flux a la date du debut", () => {
      assert.equal(
        fluxSortant.getValeur(dateDebut),
        trainDeVie.getValeur(dateDebut),
      );
    });
    it("valeur du flux apres 4 mois", () => {
      assert.equal(
        fluxSortant.getValeur(new Date("2024-04-01")),
        trainDeVie.getValeur(new Date("2024-04-01")) * 4,
      );
    });
    it("valeur du flux apres 2 ans", () => {
      assert.equal(
        fluxSortant.getValeur(new Date("2026-04-01")),
        trainDeVie.getValeur(new Date("2026-04-01")) * 28,
      );
    });
  });

  describe("test pour les flux entrant (salaire)", () => {
    it("valeur du flux a la date du debut", () => {
      assert.equal(fluxEntrant.getValeur(dateDebut), 0);
    });
    it("valeur du flux 1 jour avant la fin du mois", () => {
      assert.equal(fluxEntrant.getValeur(new Date("2024-01-30")), 0);
    });
    it("valeur du flux apres 2 ans", () => {
      assert.equal(
        fluxEntrant.getValeur(new Date("2026-01-01")),
        salaire.getValeur(new Date("2026-01-01")) * 24,
      );
    });
  });
});

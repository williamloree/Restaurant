/*
╔═══════════════╗
║TEST DE RECETTE║
╚═══════════════╝
*/
import Waiter from "../../entity/Waiter";

let waiter: Waiter;

describe("SCOPE Waiter", () => {
  it("nous allons créer un nouveau serveur et verifier que son chiffre d'affaire est bien a 0", () => {
    waiter = new Waiter();
    expect(waiter.turnOver).toBe(0);
  });

  it("Maintenant nous allons lui faire prendre une commande de 100 € et vérifier que son chiffre d'affaire a augmenté", () => {
    waiter.addCommand(100.0);
    expect(waiter.turnOver).toBe(100);
  });

  it("On lui fait prendre une seconde commande de 50€ et nous allons vérifier que son chiffre d'affaire augmente du bon montant", () => {
    waiter.addCommand(50.0)
    expect(waiter.turnOver).toBe(150);
  });

  it("Si nous créons un nouveau serveur il doit avoir son chiffre d'affaire a 0", () => {
    waiter = new Waiter();
    expect(waiter.turnOver).toBe(0);
  });
});

/*
╔═════════════╗
║TEST UNITAIRE║
╚═════════════╝
*/

import waiterGenerator from "../../utilities/waiter.generator";
import Waiter from "../../entity/Waiter";

describe("SCOPE Waiter", () => {
  it("Create waiter and his turnOver equal 0", () => {
    // ÉTANT DONNÉ un nouveau serveur
    // QUAND on récupére son chiffre d'affaires
    let waiter = new Waiter();
    // ALORS celui-ci est à 0
    expect(waiter.turnOver).toBe(0);
  });

  it("Waiter take one order", () => {
    // ÉTANT DONNÉ un nouveau serveur
    let waiterGen = new waiterGenerator();
    // QUAND il prend une commande
    let waiters = waiterGen.Generator(1);
    for (const waiter of waiters) {
      waiter.addCommand(100.0);
    }
    // ALORS son chiffre d'affaires est le montant de celle-ci
    expect(waiters[0].turnOver).toBe(100);
  });

  it("Waiter take two order", () => {
    // ÉTANT DONNÉ un serveur ayant déjà pris une commande
    let waiterGen = new waiterGenerator();
    // QUAND tous les serveurs prennent une commande d'un montant Y
    let waiters = waiterGen.Generator(1);
    for (const waiter of waiters) {
      waiter.addCommand(100.0);
      waiter.addCommand(50.0);
    }
    // ALORS son chiffre d'affaires est la somme des deux commandes
    expect(waiters[0].turnOver).toBe(150);
  });
});

import Restaurant from "../entity/Restaurant";
import Waiter from "../entity/Waiter";
import Franchise from "../entity/Franchise";

describe("SCOPE chiffre d'affaires", () => {
  // SCOPE Serveur
  it("create waiter and his turnOver equal 0", () => {
    // ÉTANT DONNÉ un nouveau serveur
    // QUAND on récupére son chiffre d'affaires
    let waiter = new Waiter();
    // ALORS celui-ci est à 0
    expect(waiter.turnOver).toBe(0);
  });

  it("waiter take one order", () => {
    // ÉTANT DONNÉ un nouveau serveur
    let waiter = new Waiter();
    // QUAND il prend une commande
    waiter.addCommand(100);
    // ALORS son chiffre d'affaires est le montant de celle-ci
    expect(waiter.turnOver).toBe(100);
  });

  it("waiter take two order", () => {
    // ÉTANT DONNÉ un serveur ayant déjà pris une commande
    let waiter = new Waiter();
    waiter.addCommand(100);
    // QUAND il prend une nouvelle commande
    waiter.addCommand(50);
    // ALORS son chiffre d'affaires est la somme des deux commandes
    expect(waiter.turnOver).toBe(150);
  });

  // CAS(X = 2;)
  // CAS(Y = 1.0)
  it("restaurant has 2 servers and each server has $ 1 turnover", () => {
    // ÉTANT DONNÉ un restaurant ayant X serveurs
    let restaurant = new Restaurant();
    for (let index = 0; index < 2; index++) {
      let waiter = new Waiter();
      restaurant.addWaiter(waiter);
      // QUAND tous les serveurs prennent une commande d'un montant Y
      waiter.addCommand(1.0);
    }
    // ALORS le chiffre d'affaires de la franchise est X * Y
    restaurant.calTurnOver();
    expect(restaurant.turnOverGlobal).toBe(2);
  });

  // CAS(X = 2;)
  // CAS(Y = 1.0)
  it("the restaurant has 100 servers and each server has $2 turnover", () => {
    // ÉTANT DONNÉ un restaurant ayant X serveurs
    let restaurant = new Restaurant();
    for (let index = 0; index < 100; index++) {
      let waiter = new Waiter();
      restaurant.addWaiter(waiter);
      // QUAND tous les serveurs prennent une commande d'un montant Y
      waiter.addCommand(2.0);
    }
    // ALORS le chiffre d'affaires de la franchise est X * Y
    restaurant.calTurnOver();
    expect(restaurant.turnOverGlobal).toBe(200);
  });

  //SCOPE FRANCHISE
  it("SCOPE franchise global turnOver", () => {
    //  ÉTANT DONNÉ une franchise ayant X restaurants de Y serveurs chacuns
    let franchise = new Franchise();
    for (let index = 0; index < 1; index ++) {
      let restaurant = new Restaurant();
      franchise.addRestaurant(restaurant);
      for (let index = 0; index < 1; index ++) {
        let waiter = new Waiter();
        restaurant.addWaiter(waiter);
        waiter.addCommand(2.0);
      };
    };
    expect 
    // 	QUAND tous les serveurs prennent une commande d'un montant Z
    // 	ALORS le chiffre d'affaires de la franchise est X * Y * Z
    // 	CAS(X = 0; X = 1; X = 2; X = 1000)
    // 	CAS(Y = 0; Y = 1; Y = 2; Y = 1000)
    // 	CAS(Z = 1.0)
  });
});

import Restaurant from "../entity/Restaurant";
import Waiter from "../entity/Waiter";
import Franchise from "../entity/Franchise";

describe.skip("SCOPE Serveur", () => {
  it("Create waiter and his turnOver equal 0", () => {
    // ÉTANT DONNÉ un nouveau serveur
    // QUAND on récupére son chiffre d'affaires
    let waiter = new Waiter();
    // ALORS celui-ci est à 0
    expect(waiter.turnOver).toBe(0);
  });

  it("Waiter take one order", () => {
    // ÉTANT DONNÉ un nouveau serveur
    let waiter = new Waiter();
    // QUAND il prend une commande
    waiter.addCommand(100);
    // ALORS son chiffre d'affaires est le montant de celle-ci
    expect(waiter.turnOver).toBe(100);
  });

  it("Waiter take two order", () => {
    // ÉTANT DONNÉ un serveur ayant déjà pris une commande
    let waiter = new Waiter();
    waiter.addCommand(100);
    // QUAND il prend une nouvelle commande
    waiter.addCommand(50);
    // ALORS son chiffre d'affaires est la somme des deux commandes
    expect(waiter.turnOver).toBe(150);
  });
})

describe.skip("SCOPE Restaurant", () => {
  // CAS(X = 2;)
  // CAS(Y = 1.0)
  it("Restaurant has 2 servers and each server has $ 1 turnover", () => {
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
  // CAS(X = 100;)
  // CAS(Y = 2.0)
  it("The restaurant has 100 servers and each server has $2 turnover", () => {
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
})

describe.skip("SCOPE Franchise", () => {
  // 	CAS(X = 1)
  // 	CAS(Y = 1)
  // 	CAS(Z = 3.0)
  it("The franchise includes 1 restaurant with 1 waiter who has $ 2 in turnover", () => {
    //  ÉTANT DONNÉ une franchise ayant X restaurants de Y serveurs chacuns
    let franchise = new Franchise();
    for (let index = 0; index < 1; index++) {
      let restaurant = new Restaurant();
      franchise.addRestaurant(restaurant);
      for (let index = 0; index < 1; index++) {
        let waiter = new Waiter();
        // 	QUAND tous les serveurs prennent une commande d'un montant Z
        restaurant.addWaiter(waiter);
        waiter.addCommand(3.0);
      }
    }
    franchise.calTurnOver();
    expect(franchise.turnOverFranchise).toBe(3);
  });
  
  // 	CAS(X = 1)
  // 	CAS(Y = 3)
  // 	CAS(Z = 3)
  it("The franchise includes 3 restaurants with 3 servers who have $ 1 in turnover", () => {
    //  ÉTANT DONNÉ une franchise ayant X restaurants de Y serveurs chacuns
    let franchise = new Franchise();
    for (let index = 0; index < 3; index++) {
      let restaurant = new Restaurant();
      franchise.addRestaurant(restaurant);
      for (let index = 0; index < 3; index++) {
        let waiter = new Waiter();
        // 	QUAND tous les serveurs prennent une commande d'un montant Z
        restaurant.addWaiter(waiter);
        waiter.addCommand(1.0);
      }
    }
    franchise.calTurnOver();
    expect(franchise.turnOverFranchise).toBe(9);
  });

  // 	CAS(X = 1)
  // 	CAS(Y = 1000)
  // 	CAS(Z = 1000)
  it("The franchise includes 1000 restaurants with 1000 servers who have $ 1 in turnover", () => {
    //  ÉTANT DONNÉ une franchise ayant X restaurants de Y serveurs chacuns
    let franchise = new Franchise();
    for (let index = 0; index < 1000; index++) {
      let restaurant = new Restaurant();
      franchise.addRestaurant(restaurant);
      for (let index = 0; index < 1000; index++) {
        let waiter = new Waiter();
        // 	QUAND tous les serveurs prennent une commande d'un montant Z
        restaurant.addWaiter(waiter);
        waiter.addCommand(1.0);
      }
    }
    franchise.calTurnOver();
    expect(franchise.turnOverFranchise).toBe(1000000);
  });
});

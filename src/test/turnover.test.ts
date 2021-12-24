import test from "ava";
import Restaurant from "../entity/Restaurant";
import Waiter from "../entity/Waiter";
import Franchise from "../entity/Franchise";
import waiterGenerator from "../utilities/waiter.generator";
import restaurantGenerator from "../utilities/restaurant.generator";

test("Create waiter and his turnOver equal 0", (t) => {
  // ÉTANT DONNÉ un nouveau serveur
  // QUAND on récupére son chiffre d'affaires
  let waiterGen = new waiterGenerator();
  let waiters = waiterGen.Generator(1);
  // ALORS celui-ci est à 0
  t.is(waiters[0].turnOver, 0);
});

test("Waiter take one order", (t) => {
  // ÉTANT DONNÉ un nouveau serveur
  let waiterGen = new waiterGenerator();
  // QUAND il prend une commande
  let waiters = waiterGen.Generator(1);
  for (const waiter of waiters) {
    waiter.addCommand(100.0);
  }
  // ALORS son chiffre d'affaires est le montant de celle-ci
  t.is(waiters[0].turnOver, 100);
});

test("Waiter take two order", (t) => {
  // ÉTANT DONNÉ un serveur ayant déjà pris une commande
  let waiterGen = new waiterGenerator();
  // QUAND tous les serveurs prennent une commande d'un montant Y
  let waiters = waiterGen.Generator(1);
  for (const waiter of waiters) {
    waiter.addCommand(100.0);
    waiter.addCommand(50.0);
  }
  // ALORS son chiffre d'affaires est la somme des deux commandes
  t.is(waiters[0].turnOver, 150);
});

test("Restaurant has 2 servers and each server has $ 1 turnover", (t) => {
  // ÉTANT DONNÉ un restaurant ayant X serveurs
  let restaurant = new Restaurant();
  let waiterGen = new waiterGenerator();
  // QUAND tous les serveurs prennent une commande d'un montant Y
  let waiters = waiterGen.Generator(2);
  for (const waiter of waiters) {
    restaurant.addWaiter(waiter);
    waiter.addCommand(1.0);
  }
  // ALORS le chiffre d'affaires de la franchise est X * Y
  restaurant.calTurnOver();
  t.is(restaurant.turnOverGlobal, 2);
});

test("The restaurant has 100 servers and each server has $2 turnover", (t) => {
  // ÉTANT DONNÉ un restaurant ayant X serveurs
  let restaurant = new Restaurant();
  let waiterGen = new waiterGenerator();
  // QUAND tous les serveurs prennent une commande d'un montant Y
  let waiters = waiterGen.Generator(100);
  for (const waiter of waiters) {
    restaurant.addWaiter(waiter);
    waiter.addCommand(2.0);
  }
  // ALORS le chiffre d'affaires de la franchise est X * Y
  restaurant.calTurnOver();
  t.is(restaurant.turnOverGlobal, 200);
});

// 	CAS(X = 1)
// 	CAS(Y = 1)
// 	CAS(Z = 3.0)
test("The franchise includes 1 restaurant with 1 waiter who has $ 2 in turnover", (t) => {
  let franchise = new Franchise();
  let restaurantGen = new restaurantGenerator();
  let waiterGen = new waiterGenerator();
  let restaurants = restaurantGen.Generator(1);
  for (const restaurant of restaurants) {
    franchise.addRestaurant(restaurant);
    let waiters = waiterGen.Generator(1);
    for (const waiter of waiters) {
      restaurant.addWaiter(waiter);
      waiter.addCommand(3.0);
    }
  }
  franchise.calTurnOver();
  t.is(franchise.turnOverFranchise, 3);
});

// 	CAS(X = 3)
// 	CAS(Y = 3)
// 	CAS(Z = 1.0)
test("The franchise includes 3 restaurants with 3 servers who have $ 1 in turnover", (t) => {
  let franchise = new Franchise();
  let restaurantGen = new restaurantGenerator();
  let waiterGen = new waiterGenerator();
  let restaurants = restaurantGen.Generator(3);
  for (const restaurant of restaurants) {
    franchise.addRestaurant(restaurant);
    let waiters = waiterGen.Generator(3);
    for (const waiter of waiters) {
      restaurant.addWaiter(waiter);
      waiter.addCommand(1.0);
    }
  }
  franchise.calTurnOver();
  t.is(franchise.turnOverFranchise, 9);
});

// 	CAS(X = 1000)
// 	CAS(Y = 1000)
// 	CAS(Z = 2.0)
test("The franchise includes 1000 restaurants with 1000 servers who have $ 3 in turnover", (t) => {
  let franchise = new Franchise();
  let restaurantGen = new restaurantGenerator();
  let waiterGen = new waiterGenerator();
  let restaurants = restaurantGen.Generator(1000);
  for (const restaurant of restaurants) {
    franchise.addRestaurant(restaurant);
    let waiters = waiterGen.Generator(1000);
    for (const waiter of waiters) {
      restaurant.addWaiter(waiter);
      waiter.addCommand(3.0);
    }
  }
  franchise.calTurnOver();
  t.is(franchise.turnOverFranchise, 3000000);
});

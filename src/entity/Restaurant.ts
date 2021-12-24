import Waiter from "./Waiter";

class Restaurant {
  waiters: Waiter[];
  turnOverGlobal: number;

  constructor(waiters = [],turnOverGlobal = 0){
    this.waiters = waiters
    this.turnOverGlobal = turnOverGlobal
  }

  addWaiter(waiter: Waiter) {
    this.waiters.push(waiter);
  }

  calTurnOver() {
    for (const waiter of this.waiters) {
      this.turnOverGlobal = this.turnOverGlobal + waiter.order;
    }
  }
}

export default Restaurant;

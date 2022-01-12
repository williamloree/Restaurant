import Waiter from "./Waiter";
import Table from "./Table";
import Master from "./Master";
import tableGenerator from "../utilities/table.generator";

class Restaurant {
  tables: Table[];
  master: Master;
  waiters: Waiter[];
  turnOverGlobal: number;

  constructor(nbTables = 0, waiters = [], turnOverGlobal = 0) {
    let tableGen = new tableGenerator();
    this.tables = tableGen.Generator(nbTables);

    this.master = new Master(this.tables);

    this.waiters = waiters;
    this.turnOverGlobal = turnOverGlobal;
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

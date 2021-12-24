import Waiter from "../entity/Waiter";
import waiterGenerator from "../utilities/waiter.generator";
import * as assert from "assert";

describe("SCOPE Waiter", () => {
  it.only("Create waiter and his turnOver equal 0", () => {
    // ÉTANT DONNÉ un nouveau serveur
    // QUAND on récupére son chiffre d'affaires
    let waiterGen = new waiterGenerator();
    let waiters = waiterGen.Generator(1);
    // ALORS celui-ci est à 0
    assert.equal(waiters[0].turnOver, 12);
  });

});

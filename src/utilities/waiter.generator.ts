import Restaurant from "../entity/Restaurant";
import Waiter from "../entity/Waiter";

class waiterGenerator {
  Generator = (number: number) => {
    let waiters : Waiter[] = []
    for (let index = 0; index < number; index++) {
      const waiter = new Waiter(`Serveur${index}`);
      waiters.push(waiter)
    }
    return waiters
  };

}

export default waiterGenerator;

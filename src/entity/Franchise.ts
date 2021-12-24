import Restaurant from "./Restaurant";

class Franchise {
  restaurants: Restaurant[] = [];
  turnOverFranchise: number = 0;
  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
  }

  calTurnOver() {
    for (const restaurant of this.restaurants) {
      for (const waiter of restaurant.waiters) {
        this.turnOverFranchise = this.turnOverFranchise + waiter.order;
      }
    }
  }
}

export default Franchise;

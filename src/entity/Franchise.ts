import Restaurant from "./Restaurant";

class Franchise {
  restaurants: Restaurant[];
  turnOverFranchise: number;

  constructor(restaurants = [],turnOverFranchise = 0){
    this.restaurants = restaurants
    this.turnOverFranchise = turnOverFranchise
  }

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

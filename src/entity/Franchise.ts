import Restaurant from "./Restaurant";

class Franchise {
  restaurants: Restaurant[] = [];
  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
  }
}

export default Franchise;

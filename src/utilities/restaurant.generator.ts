import Restaurant from "../entity/Restaurant";

class restaurantGenerator {
  Generator = (number: number) => {
    let restaurants : Restaurant[] = []
    for (let index = 0; index < number; index++) {
      const restaurant = new Restaurant();
      restaurants.push(restaurant)
    }
    return restaurants
  };
}
export default restaurantGenerator;

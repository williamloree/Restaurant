import Restaurant from "../entity/Restaurant";
import Server from "../entity/Server";

describe("SCOPE chiffre d'affaires", () => {
  //  SCOPE Restaurant
  // 	ÉTANT DONNÉ un restaurant ayant X serveurs
  // 	QUAND tous les serveurs prennent une commande d'un montant Y
  // 	ALORS le chiffre d'affaires de la franchise est X * Y
  // 	CAS(X = 0; X = 1; X = 2; X = 100)
  // 	CAS(Y = 1.0)
  it("SCOPE Restaurant 2", () => {
    let restaurant = new Restaurant();
    // let server = new Server();
    // let server2 = new Server();
    for (let index = 0; index < 2; index++) {
      
      let server = new Server();
      restaurant.addServer(server);
      server.addCommand(1);
      
    }
    restaurant.CA();
    expect(restaurant.CAglobal).toBe(2)
  });

  it("SCOPE Restaurant 100", () => {
    let restaurant = new Restaurant();
    // let server = new Server();
    // let server2 = new Server();
    for (let index = 0; index < 100; index++) {
      
      let server = new Server();
      restaurant.addServer(server);
      server.addCommand(1);
      
    }
    
    restaurant.CA();
    expect(restaurant.CAglobal).toBe(100)
  });
});

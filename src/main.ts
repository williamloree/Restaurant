
    let restaurant = new Restaurant();
    let server = new Server();
    let server2 = new Server();
    restaurant.addServer(server);
    restaurant.addServer(server2);
    server.addCommand(50);
    server2.addCommand(100);
    restaurant.CA();
    expect(restaurant.CAglobal).toBe(150)
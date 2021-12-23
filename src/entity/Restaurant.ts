import Server from "./Server";

class Restaurant {
  servers: Server[] = [];
  CAglobal: number  = 0;

  addServer(server: Server) {
    this.servers.push(server);
  }

  CA() {
      for (const server of this.servers) {
        this.CAglobal = this.CAglobal + server.command; 
      }
  }
}

export default Restaurant;

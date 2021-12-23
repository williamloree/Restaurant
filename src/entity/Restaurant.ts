import Server from "./Server";

class Restaurant {
  servers: Server[] = [];
  CAglobal: number  = 0;

  addServer(server: Server) {
    this.servers.push(server);
    console.log(this.servers)
  }

  CA() {
      for (const server of this.servers) {
        this.CAglobal = this.CAglobal + server.command; 

      }
      console.log(this.servers)
  }
}

export default Restaurant;

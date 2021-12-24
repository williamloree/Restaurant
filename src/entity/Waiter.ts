class Waiter {
  name: string;
  order: number;
  turnOver: number;

  constructor(name = "roger", order = 0,turnOver = 0){
    this.name = name
    this.order = order
    this.turnOver = turnOver
  }

  addCommand(commands: number) {
    this.order = this.order + commands;
    this.turnOver = this.order;
  }
}

export default Waiter;

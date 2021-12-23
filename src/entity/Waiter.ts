class Waiter {
  order: number = 0;
  turnOver: number = 0;
  
  addCommand(commands: number) {
    this.order = this.order + commands;
    this.turnOver = this.turnOver + this.order;
  }
  
}

export default Waiter;

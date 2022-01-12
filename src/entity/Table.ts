class Table {
  static _id : number = 0
  public id : number;

  constructor() {
    this.id = Table._id++
  }

}

export default Table;

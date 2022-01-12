import Table from "./Table";

class Master {
  name: string;
  tables: Table[];

  constructor(tables : Table[] = [], name = "hervet") {
    this.name = name;
    this.tables = tables;
  }

  addTable(table: Table) {
    this.tables.push(table);
  }
}

export default Master;

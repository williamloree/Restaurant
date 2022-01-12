import Table from "../entity/Table";

class tableGenerator {
  Generator = (number: number) => {
    let tables: Table[] = [];
    for (let index = 0; index < number; index++) {
      const table = new Table();
      tables.push(table);
    }
    return tables;
  };
}

export default tableGenerator;

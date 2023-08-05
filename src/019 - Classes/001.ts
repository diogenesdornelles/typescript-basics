// short: dentro do construtor estão os parâmetros de inicialização
class Department {
  constructor(
    public readonly name: string,
    private readonly _employees: Employee[] = [], // se quiser array imutável, adicionar readonly ao tipo
  ) {}
  get employees(): Employee[] {
    return this._employees;
  }

  set employees(other: Employee) {
    this._employees.push(other);
  }
}

// long
class Employee {
  public readonly name: string;
  public readonly lastName: string;
  public _department?: Department['name'];
  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
  get department(): string | undefined {
    return this._department;
  }

  set department(other: Department) {
    this._department = other.name;
  }
}

class Enterprise {
  public readonly name: string;
  public readonly cnpj: string;
  private readonly _departments: Department[] = [];
  public static readonly cod: number = 123;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  get departments(): Department[] {
    return this._departments;
  }

  set departments(other: Department) {
    this._departments.push(other);
  }
}

const employee = new Employee('Dio', 'Costa');

const department = new Department('sells');

department.employees = employee;

const enterprise = new Enterprise('vivo', '11.111.111/0001-11');

enterprise.departments = department;

console.log(enterprise);

export default 1;

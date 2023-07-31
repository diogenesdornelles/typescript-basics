export class Database {
  private static DbInstance: Database;
  // private constructor: cannot use new method outside
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void {
    console.log(`User ${this.user} Connected to ${this.host}: password ${this.password}`);
  }

  static getDb(host: string, user: string, password: string): Database {
    if (!Database.DbInstance) {
      Database.DbInstance = new Database(host, user, password);
      return Database.DbInstance;
    }
    return Database.DbInstance;
  }
}

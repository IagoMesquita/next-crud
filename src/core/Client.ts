export default class Client {
  #id: string | null;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id = null) {
    this.#id = id;
    this.#name = name;
    this.#age = age;
  }

  static clientEmpty() {
    return new Client('', 0);
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

export default class Subject {
  private _name: string;

  constructor(name: string) {
    if(name.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
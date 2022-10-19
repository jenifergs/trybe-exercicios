export default abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    if (birthDate > new Date()) {
      throw new Error('Birth date cannot be in the future');
    }
    if (name.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
    if (birthDate.getFullYear() - new Date().getFullYear() > 120) {
      throw new Error('Age must be less than 120 years');
    }
      this._name = name;
      this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(name: string) {
    this._name = name;
  }

  set birthDate(birthDate: Date) {
    this._birthDate = birthDate;
  }
};

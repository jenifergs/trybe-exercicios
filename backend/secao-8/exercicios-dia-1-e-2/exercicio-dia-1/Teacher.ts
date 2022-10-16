import Person from "./Person";
import Employee from "./Employee";
import Subject from "./Subject";
import { v4 as uuidv4 } from 'uuid';


export default class Teacher extends Person implements Employee  {
  _subjectName: Subject;
  _registration: string;
  _salary: number;
  _admissionDate: Date;
  constructor(name: string, birthDate: Date, subjectName: Subject) {
  super(name, birthDate);
  this._registration = this.generateRegistration();
  this._salary = 0;
  this._admissionDate = new Date();
  this._subjectName = subjectName;
  }
  generateRegistration(): string {
    const random = uuidv4().slice(0, 16);
    return random;
  }

  get subject(): Subject {
    return this._subjectName;
  }

  get registration(): string {
    return this._registration;
  }

  get salary(): number {
    return this._salary;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set subject(subject: Subject) {
    this._subjectName = subject;
  }

  set salary(salary: number) {
    if( salary < 0 ) {
      throw new Error("Salário não pode ser negativo");
    }
    this._salary = salary;
  }

  set admissionDate(admissionDate: Date) {
    if( admissionDate > new Date() ) {
      throw new Error("Data de admissão não pode ser no futuro");
    }
    this._admissionDate = admissionDate;
  }

  set registration(registration: string) {
    this._registration = registration;
  }


}
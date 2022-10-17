import Employee from "./Employee";
import Subject from "./Subject";
import { v4 as uuidv4 } from 'uuid';


export default class Teacher extends Employee  {
  _subjectName: Subject;
  constructor(name: string, birthDate: Date, salary: number, subjectName: Subject) {
  super(name, birthDate, salary);
  this._subjectName = subjectName;
  }
  generateRegistration(): string {
    const random = uuidv4().slice(0, 16);
    return random;
  }

  get subject(): Subject {
    return this._subjectName;
  }

}
import Enrollable from "./Enrollable";
import Person from "./Person";

export default abstract class Employee extends Person implements Enrollable {
private _salary: number;
private _admissionDate: Date;
enrollment: string;
abstract generateRegistration(): string;

constructor(name: string, birthDate: Date, salary: number) {
  super(name, birthDate);
  this._admissionDate = new Date();
  this._salary = salary;
  this.enrollment = this.generateRegistration();}

get salary() {
  return this._salary;
}

get admissionDate(){
  return this._admissionDate;
}

set salary(salary: number) {
  if(salary <= 0) {
    throw new Error("Salário inválido");
  }
  this._salary = salary;
}

set admissionDate(admissionDate: Date) {
  if(admissionDate > new Date()) {
    throw new Error("Data de admissão inválida");
  }
  this._admissionDate = admissionDate;  
}

}
import Person from "./Person";
import { v4 as uuidv4 } from 'uuid';

export default class Students extends Person {
  private _matricula: number | string;
  _provas: number[];
  _trabalhos: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate );
    // this._nome = name;
    this._matricula = this.generateEnrollment();
    this._provas = [];
    this._trabalhos = [];
  }

  get matricula() {
    return this._matricula;
  }

  set provas(provas: number[]) {
    if ( provas.length > 4 ) {
      throw new Error("Não é possível adicionar mais de 4 provas");
    }
    this._provas = provas;
  }

  set trabalhos(trabalhos: number[]) {
    if ( trabalhos.length > 2 ) {
      throw new Error("Não é possível adicionar mais de 2 trabalhos");
    }
    this._trabalhos = trabalhos;
  }

  somaDasNotas(): number {
    const soma = this._provas.reduce((acc, atual) => acc + atual, 0);
    return soma;
  }

  mediaDasNotas(): number {
    if ( this._provas.length === 0 ) {
      throw new Error("Não é possível calcular a média sem provas");
    }
    const soma = this.somaDasNotas();
    const media = this.somaDasNotas() / this._provas.length;
    return media;
  }

  generateEnrollment(): string {
    const random = uuidv4().slice(0, 16);
    return random;
  }

}



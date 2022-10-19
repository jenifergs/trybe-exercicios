class Pessoa {
  _name: string;

  constructor(name: string) {
    this._name = name;  
  }
}

class ItemPedido {
  _nome: string;
  _preco: number;

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }
}


class Pedido {
  _pedidoCliente: Pessoa;
  _ItensDoPedido: ItemPedido[];
  _formaDePagamento: string[];
  _desconto?: number;

  constructor(pedidoCliente: Pessoa, ItensDoPedido: ItemPedido[], formaDePagamento: string[]) {
    this._pedidoCliente = pedidoCliente;
    this._ItensDoPedido = ItensDoPedido;
    this._formaDePagamento = formaDePagamento;
  }

  somaDosItens(): number {
    const soma = this._ItensDoPedido.reduce((acc, atual) => acc + atual._preco, 0);
    return soma;
  }


  calculaSomaComDesconto(): number {
    const soma = this.somaDosItens();
    if (this._desconto) {
      const valorQueVaiSerDescontato = soma * this._desconto;  
      return soma - valorQueVaiSerDescontato;
    }
    return soma;
  }

  set ItensDoPedido(pedidos: ItemPedido[]) {
    this._ItensDoPedido = pedidos;
  }

  adicionaNovoPedido(pedido: ItemPedido): void {
    this._ItensDoPedido.push(pedido)
  }
  


  set desconto(desconto: number) {
    this._desconto = desconto;
  }
}



class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {

    // REGRA QUANDO A DATA INFORMADA FOR INVALIDA SERA SUBSTITUIDA PELA DATA 01/01/1900
    const isValidDate = (day: number, month: number, year: number) => {
      if(day > 31 || day < 1) {
        return false;
      }
      if(month > 12 || month < 1) {
        return false;
      }
      if(year < 0) {
        return false;
      }
      return true;
    }
    if(!isValidDate(day, month, year)) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    } else {
      this.day = day;
      this.month = month;
      this.year = year;
    }
  }

  getMonthName(): string {
    const months = [
      'janeiro', // 1 -> 0
      'fevereiro', // 2 ->
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro', // 12 -> 11
    ];

    const mesPorExtenso = months[this.month - 1];

    return months[this.month - 1];
  }

  isLeapYear = (): boolean => {
    return this.year % 4 === 0;
  };

  compare(date: Data): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;

    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];


    const conditionsIncludeFalse = conditions.includes(false);
    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    
    const month = this.month > 9 
      ? this.month.toString() 
      : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}

const data1  = new Data(17,11,2000)

console.log(data1)

console.log(data1.getMonthName())
console.log(data1.isLeapYear());
console.log(data1.format('dd/mm/aaaa'));



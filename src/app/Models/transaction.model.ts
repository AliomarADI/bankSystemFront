export class TransactionModel {

  id: number;
  amount: number;
  nameOfService: string;


  constructor(id: number, amount: number, nameOfService: string) {
    this.id = id;
    this.amount = amount;
    this.nameOfService = nameOfService;
  }
}

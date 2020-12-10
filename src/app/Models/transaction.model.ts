export class TransactionModel {

  id: number;
  amount: number;
  type: string;
  createdDate: Date;
  commission: number;
  value: string;


  constructor(id: number, amount: number, type: string, value: string , commission: number) {
    this.id = id;
    this.amount = amount;
    this.type = type;
    this.value = value;
    this.commission = commission;
  }
}

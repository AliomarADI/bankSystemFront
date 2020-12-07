export  class User {
  id: number;
  name: string;
  phone: number;
  password: string;
  amount: number;


  constructor(id: number, name: string, phone: number, password: string, amount: number) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.password = password;
    this.amount = amount;
}


}

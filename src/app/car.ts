export class Car {
    model: string;
    price: number;
    id: number;
    constructor(
      model: string,
      price: number,
      id?:   number) {this.model = model;
    this.price = price;
    this.id = id;}
  }
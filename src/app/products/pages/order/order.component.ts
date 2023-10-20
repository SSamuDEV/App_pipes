import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public name: string = "SSamurai"

  public isUpperCase: boolean = false;

  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.red,
      age: 40,
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black,
      age: 35,
    },
    {
      name: "Gon",
      canFly: false,
      color: Color.green,
      age: 16,
    },
    {
      name: "Daredevil",
      canFly: false,
      color: Color.red,
      age: 38,
    },
    {
      name: "Nico Robin",
      canFly: false,
      color: Color.blue,
      age: 30,
    },
    {
      name: "Luffy",
      canFly: false,
      color: Color.red,
      age: 20,
    },
    {
      name: "King",
      canFly: true,
      color: Color.black,
      age: 39,
    }
];

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
   this.orderBy = value;
  }


}

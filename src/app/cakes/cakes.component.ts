import { Component } from '@angular/core';
import { Cake } from '../types/Cake';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss'],
})

export class CakesComponent {
  cakes: Cake[] = [
    {
      name: 'Yummy cakes',
      baker: 'Cakes by sparrow',
      img: '../../assets/img/cake.jpg',
      amount: 500
    },
    {
      name: 'Yummy cakes',
      baker: 'Cakes by sparrow',
      img: '../../assets/img/cake2.jpg',
      amount: 900
    }
  ];

  cake: Cake[] = [];

  isShown: boolean = true;

  toggleCakes() {
    this.isShown = !this.isShown;
  }

  addToCart(cake: Cake) {
    console.log(cake);
  }
}

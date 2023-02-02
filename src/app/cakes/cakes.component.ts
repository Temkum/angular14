import { Component } from '@angular/core';

interface Cake {
  name: string;
  baker: string;
  img: string;
  amount: number;
}

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

  isShown: boolean = true;

  toggleCakes() {
    this.isShown = !this.isShown;
  }
}

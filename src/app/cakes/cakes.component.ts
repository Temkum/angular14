import { Component } from '@angular/core';

interface Cake {
  name: string;
  baker: string;
  img: string;
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
    },
    {
      name: 'Yummy cakes',
      baker: 'Cakes by sparrow',
      img: '../../assets/img/cake2.jpg'
    }
  ];

  isShown: boolean = false;

  toggleCakes() {
    this.isShown = !this.isShown;
  }
}

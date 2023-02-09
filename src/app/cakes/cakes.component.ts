import { Component } from '@angular/core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss']
})
export class CakesComponent {
  name: string = 'Yummy cakes';
  baker: string = 'Cakes by sparrow' 
  src : string = '../../assets/img/cake.jpg'
  
  name2: string = 'Yummy cakes';
  baker2: string = 'Cakes by sparrow' 
  src2: string = '../../assets/img/cake2.jpg'
  
  isShown: boolean = true;

  toggleCakes() {
    this.isShown = !this.isShown;
  }
}

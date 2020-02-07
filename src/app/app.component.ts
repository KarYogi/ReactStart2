import { Component, OnInit } from '@angular/core';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars: Car[];
  error = '';
  success = '';
        
  constructor(private carService: CarService) {
  }
        
  ngOnInit() {
    this.getCars();
  }
        
  getCars(): void {
    this.carService.getAll().subscribe(
      (res: Car[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
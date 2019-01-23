import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre = "Eduardo";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  porcentaje = 0.234;

  salario = 1234.5;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private activateRoute:ActivatedRoute, private _heroesServices: HeroesService) { 
     this.activateRoute.params.subscribe( params => {
       //console.log( params['id'] );
       this.heroe = this._heroesServices.getHeroe(params['id']);
       console.log(this.heroe);
     });

  }

  ngOnInit() {
  }

}

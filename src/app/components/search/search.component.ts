import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private activateRoute:ActivatedRoute, private _heroesServices: HeroesService, private router:Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

  verHeroe( index:number ){
    console.log(index);
    
    this.router.navigate(['/heroe', index]);
  }

}

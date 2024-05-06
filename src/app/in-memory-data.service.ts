import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 1, name: 'DeadPool' },
  { id: 2, name: 'IronMan' },
  { id: 3, name: 'Thor' },
  { id: 4, name: 'Hulk' },
  { id: 5, name: 'SpiderMan' },
  { id: 6, name: 'Wolverine' },
  { id: 7, name: 'Dr.Srange' },
  { id: 8, name: 'MAgneto' },
  { id: 9, name: 'Odin' }
    ];

    return { heroes };
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

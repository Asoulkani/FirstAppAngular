import { Injectable } from '@angular/core';
import { Categorie } from './Models/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieServicesService {

  private categories: Categorie[] = [
    new Categorie('Cat1', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'),
    new Categorie('Cat2', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'),
    new Categorie('Cat3', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.')
  ];

  constructor() { }

  getCategorie(index: number) {
    return this.categories[index];
  }

  insertCategorie(categorie: Categorie) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].getName() === (categorie.getName())) {
        return false;
      }
    }
    this.categories.push(categorie);
    return true;
  }

  getAll() {
    return this.categories;
  }

}

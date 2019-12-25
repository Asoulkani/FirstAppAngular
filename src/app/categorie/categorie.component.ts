import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Models/Categorie.model';
import { CategorieServicesService } from '../categorie-services.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  Category: Categorie = new Categorie('', '');
  AddedCategory = true;
  message = '';
  constructor(private categorieService: CategorieServicesService) {

  }

  ngOnInit() {
  }

  keyPress(event: any) {
    this.AddedCategory = true;
  }


  addCategory() {
    if (!this.Category.isEmpty()) {
      this.categorieService.insertCategorie(this.Category);
      this.Category = new Categorie('', '');
      this.AddedCategory = false;
      this.message = 'Category added';
    } else {
      this.message = 'Empty fields !';
      this.Category = new Categorie('', '');
      this.AddedCategory = true;
    }
  }




}

import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Models/Categorie.model';
import { CategorieServicesService } from '../categorie-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  Category: Categorie = new Categorie('', '');
  AddedCategory = true;
  message = '';
  constructor(private categorieService: CategorieServicesService,private router: Router) {

  }

  ngOnInit() {
  }

  keyPress(event: any) {
    this.AddedCategory = true;
  }

  navigateToList(){
    this.router.navigate(['/List']);
    }

  addCategory() {
    if (!this.Category.isEmpty()) {
      if (this.categorieService.insertCategorie(this.Category)) {
        this.message = 'Category added';
        this.AddedCategory = false;
      } else {
        this.message = 'Category exist !!';
        this.AddedCategory = true;
      }
    } else {
      this.message = 'Empty fields !';
      this.Category = new Categorie('', '');
      this.AddedCategory = true;
    }
  }




}

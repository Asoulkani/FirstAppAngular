import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieServicesService } from '../categorie-services.service';
import { Categorie } from '../Models/Categorie.model';

@Component({
  selector: 'app-forms-test',
  templateUrl: './forms-test.component.html',
  styleUrls: ['./forms-test.component.css']
})
export class FormsTestComponent implements OnInit {

  constructor(private categorieService: CategorieServicesService) { }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.categorieService.insertCategorie(new Categorie(form.value.category, form.value.Description));
    form.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Categorie } from '../Models/Categorie.model';
import { CategorieServicesService } from '../categorie-services.service';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  catForm: FormGroup;

  constructor(private categorieService: CategorieServicesService) { }

  ngOnInit() {
    this.catForm = new FormGroup({
      'name': new FormControl(null),
      'description': new FormControl(null)
    });
  }

  onSubmit() {
    this.categorieService.insertCategorie(new Categorie(this.catForm.value.name, this.catForm.value.description));
    this.catForm.reset();
  }


}

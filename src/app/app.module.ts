import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';
import { FormsModule } from '@angular/forms';
import { ColorStatusDirective } from './color-status.directive';
import { PipeTextPipe } from './pipe-text.pipe';
import { CategorieComponent } from './categorie/categorie.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'Category', component: CategorieComponent },
  { path: 'List', component: MainComponent },
  { path: '', component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    ToDoListFormComponent,
    ColorStatusDirective,
    PipeTextPipe,
    CategorieComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

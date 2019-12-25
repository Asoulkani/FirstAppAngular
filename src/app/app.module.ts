import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';
import { FormsModule } from '@angular/forms';
import { ColorStatusDirective } from './color-status.directive';
import { PipeTextPipe } from './pipe-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    ToDoListFormComponent,
    ColorStatusDirective,
    PipeTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

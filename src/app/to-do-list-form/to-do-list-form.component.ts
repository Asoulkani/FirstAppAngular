import { Component, OnInit, Input } from '@angular/core';
import { Categorie } from '../Models/Categorie.model';
import { Task } from '../Models/Task.model';
import { TaskServicesService } from '../services/task-services.service';
import { CategorieServicesService } from '../categorie-services.service';

@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.css']
})
export class ToDoListFormComponent implements OnInit {

  TaskDescription: string;
  TaskName: string;
  CategorieNameDesc: Categorie;

  categories: Categorie[] = [];

  task: Task;

  constructor(private tasksService: TaskServicesService, private categorieService: CategorieServicesService) {
    this.task = new Task('', '', null, 0);
    this.categories = this.categorieService.getAll();
  }

  addTask() {
    this.tasksService.insertTask(this.task);
    this.task = new Task('', '', null, 0);
  }

  updateTask(){
    this.task = new Task('', '', null, 0);
  }

  ngOnInit() {
    this.tasksService.taskEmmitter.subscribe((task: Task) => {
      this.task = task;
    });
  }


}
